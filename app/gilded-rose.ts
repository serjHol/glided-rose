export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
        const isAgedBrie = item.name === "Aged Brie";
        const isBackstagePass = item.name.startsWith("Backstage passes");
        const isSulfuras = item.name === "Sulfuras, Hand of Ragnaros";
        const isConjured = item.name.startsWith("Conjured");

        // SULFURAS START
        if (isSulfuras) {
            item.quality = 80;  // In case you have to make sure that quality is 80
            return;
        }
        // SULFURAS END

        item.sellIn > 0 && item.sellIn--;

        // CHEESE START
        if (isAgedBrie) {
            item.quality < 50 && item.quality++;
            return;
        }
        // CHEESE END

        // CONJURED START
        if (isConjured) {
            item.quality -= 2;
            if (item.sellIn === 0) {
                item.quality -= 2;
            }
            if (item.quality < 0) {
                item.quality = 0;
            }
            return;
        }

        // CONJURED END

        // BACKSTAGE PASS START

        if (isBackstagePass) {
            if (item.sellIn <= 0) {
                item.quality = 0;
                return;
            }
            if (item.sellIn < 5) {
                item.quality += 3;
                if (item.quality > 50) {
                    item.quality = 50;
                }
                return;
            }
            if (item.sellIn < 10) {
                item.quality += 2;
                if (item.quality > 50) {
                    item.quality = 50;
                }
                return;
            }
            item.quality++;
            if (item.quality > 50) {
                item.quality = 50;
            }
            return;
        }

        // BACKSTAGE PASS END

        item.quality--;
        item.sellIn === 0 && item.quality--;
        if (item.quality < 0) item.quality = 0


    })
    return this.items;
  }
}
