import { observable, action, makeObservable } from 'mobx';

export default class CounterStore {
  @observable number = 1;
  
  constructor(root) {
    makeObservable(this)
    this.root = root;
  }

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}