import { makeObservable, observable, action, computed } from "mobx";

export default class MarketStore {
  @observable selectedItems = [];

  constructor(root) {
    this.root = root;
    makeObservable(this)
  }  

  @action
  put = (name, price) => {
    const {number} = this.root.counter;
    //존재여부 체크
    const exists = this.selectedItems.find(item => item.name === name );
    if(!exists) {
      this.selectedItems.push({
        name,
        price,
        count:number,
      });
      return;
    }

    exists.count++;
  }

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if(itemToTake.count === 0){
      this.selectedItems.remove(itemToTake); // 배열에서 제거
    }
  };

  @computed
  get total() {
    console.log('총합 계산 ...');
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0)
  }
}