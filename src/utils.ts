export const Requester = (Base) => class extends Base {
  requesterInstance(key) {
    const event = new CustomEvent('request-instance', {
      detail: {key,instance:null},
      bubbles: true,
      cancelable: true
    });
    this.dispatchEvent(event);
    return event.detail.instance;
  }
};

export const Provider = (Base) => class extends Base {
  _instances = new Map();
  constructor() {
    super();
    this.addEventListener('request-instance', event => {
      const key = event.detail.key;
      if (this._instances.has(key)) {
        event.detail.instance = this._instances.get(key);
        event.stopPropagation();
      }
    });
  }
  provideInstance(key, instance) {
    this._instance.set(key, instance);
  }
};
