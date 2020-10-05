import { Injectable, NotFoundException } from '@nestjs/common';

import { CoffeeEntity } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: CoffeeEntity[] = [
    {
      id: 1,
      name: 'Test Coffee',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  public findAll() {
    return this.coffees;
  }

  public findOne(id: string) {
    const coffee = this.coffees.find(item => item.id === +id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }

    return coffee;
  }

  public create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  public update(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id);
    if (coffee) {
      // update existing coffee
    }
  }

  public remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
