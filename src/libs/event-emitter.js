class EventEmitter{
	constructor(){
		this.listeners = {};
		this.idCount = 0;
		this.listenerQueue = [];
	}

	addListener({type,listener}){
		if( !type ) return;

		if( !this.listeners[type] ){
			this.listeners[type] = {};
		}

		// the counter as id
		this.listeners[type][this.idCount++] = listener;
		this.listenerQueue.push(type);

		return this.idCount;

	}

	emit({type,payload}){
		if( !type ) return;

		var listener = this.listeners[type]

		for( var item in listener ){
			listener[item] && listener[item](payload);
		}
	}

	removeListener(listenerId){
		var listenerType = this.listenerQueue[listenerId];
		if( !listenerType ) return;

		var {
			listeners,
			listenerQueue
		} = this;

		listeners[listenerType][listenerId] = null;
	}
}