const { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  let items;
  beforeEach(() => {
    items = [
      new Item("+5 Dexterity Vest", 10, 20, false),
      new Item("Aged Brie", 2, 0, false),
      new Item("Elixir of the Mongoose", 5, 7, false),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80, false),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80, false),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20, false),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49, false),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39, false),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6, true),

      new Item('+5 Dexterity Vest', 0, 10, false),
      new Item('Conjured Mana Cake', 0, 10, true)
    ];

    const days = Number(process.argv[2]) || 2;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach((item) =>
        console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
      );
      gildedRose.updateQuality();
    }
  });

  it('+5 dexterity vest should return',function(){
    expect(items[0].name).toBe('+5 Dexterity Vest')
    expect(items[0].sellIn).toBe(8)
    expect(items[0].quality).toBe(18)
  })
  it('aged brie should return',function(){
    expect(items[1].name).toBe('Aged Brie')
    expect(items[1].sellIn).toBe(0)
    expect(items[1].quality).toBe(2)
  })
  it('Elixir of the Mongoose should return',function(){
    expect(items[2].name).toBe('Elixir of the Mongoose')
    expect(items[2].sellIn).toBe(3)
    expect(items[2].quality).toBe(5)
  })

  it('Sulfuras, Hand of Ragnaros should be',function(){
    expect(items[3].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(items[3].sellIn).toBe(0)
    expect(items[3].quality).toBe(80)
  })
  it('Sulfuras, Hand of Ragnaros should be',function(){
    expect(items[4].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(items[4].sellIn).toBe(-1)
    expect(items[4].quality).toBe(80)
  })
  it('Backstage passes to a TAFKAL80ETC concert should be',function(){
    expect(items[5].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(items[5].sellIn).toBe(13)
    expect(items[5].quality).toBe(22)
  })
  it('Backstage passes to a TAFKAL80ETC concert should be',function(){
    expect(items[6].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(items[6].sellIn).toBe(8)
    expect(items[6].quality).toBe(50)
  })
  it('Backstage passes to a TAFKAL80ETC concert should be',function(){
    expect(items[7].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(items[7].sellIn).toBe(3)
    expect(items[7].quality).toBe(45)
    expect(items[7].isConjured).toBe(false)
  })

  it('Mana cake should be conjured', function(){
    expect(items[8].isConjured).toBe(true)
    expect(items[8].name).toBe('Conjured Mana Cake')
    expect(items[8].sellIn).toBe(1)
    expect(items[8].quality).toBe(2)

  })

  it('Peremption 2x more effective when passed', function(){
    expect(items[9].sellIn).toBe(-2)
    expect(items[10].sellIn).toBe(-2)
    expect(items[9].quality).toBe(6)
    expect(items[10].quality).toBe(6)
  })

  // it("should foo", function () {
  //   const gildedRose = new Shop([new Item("foo", 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toBe("foo");
  // });
});
