export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly price: number,
    public readonly userId: string,
  ) {}
  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}
