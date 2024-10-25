import {Component, OnInit} from '@angular/core';
import {FakeApiService} from "../../service/fake-api.service";
import {Product} from "../../entities/product";

@Component({
  selector: 'app-reads-read-delete-update-create-products',
  templateUrl: './reads-products.component.html',
  styleUrl: './reads-products.component.css'
})
export class ReadsProductsComponent implements OnInit{
  protected products : Product[]

  private startCount = [1, 2, 3, 4, 5];
  protected declare product : Product | undefined
  protected disableCard : boolean = true
  protected option : string = ""

  constructor(private fakeApiService: FakeApiService) {
    this.products = []
  }

  ngOnInit(): void {
    this.fakeApiService.productsSubject.subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
    })
  }

  protected totalPrice () {
    let total = 0;
    this.products.map((product: Product) => {
      total += product.price
    })
    return total;
  }

  protected totalReview () {
    let total = 0;
    this.products.map((product: Product) => {
      total += product.rating.count
    })
    return total;
  }

  protected callDeleteProduct(id: number) {
    this.fakeApiService.deleteProduct(id).subscribe((product: Product) => {
      alert(product.id);
    })
  }


  protected openProductCard(id: number) {
    this.product = this.products.find((product: Product) => product.id === id)
    this.disableCard = false
  }

  protected callEditProduct(product: Product ) {
    this.fakeApiService.updateProduct(product.id,product).subscribe((product: Product) => {
      alert(product.id);
    })
  }

  protected readonly Number = Number;


  protected getLimitedIStart(startIndex: number, endIndex: number): number[] {
    return this.startCount.slice(startIndex, endIndex);
  }

  protected onOptionClicked(option : string) {
    this.option = option
  }

  protected callCreateProduct() {
    this.fakeApiService.createProduct(this.products[0]).subscribe((product: Product) => {
      alert(product.id);
    })
  }


}
