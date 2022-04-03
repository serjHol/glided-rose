import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('8 damage', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Sulfuras, Hand of Ragnaros",
            sellIn: 10,
            quality: 80});
    });

    it('Cheese', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 6, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Aged Brie",
            sellIn: 5,
            quality: 21});
    });

    it('Cheese sellIn', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Aged Brie",
            sellIn: 0,
            quality: 21});
    });

    it('Cheese highValue', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Aged Brie",
            sellIn: 9,
            quality: 50});
    });

    it('Conjured', () => {
        const gildedRose = new GildedRose([new Item('Conjured Stuff', 5, 21)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Conjured Stuff",
            sellIn: 4,
            quality: 19});
    });

    it('Conjured sellIn', () => {
        const gildedRose = new GildedRose([new Item('Conjured Stuff', 0, 21)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Conjured Stuff",
            sellIn: 0,
            quality: 17});
    });

    it('Conjured zeroValue', () => {
        const gildedRose = new GildedRose([new Item('Conjured Stuff', 9, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Conjured Stuff",
            sellIn: 8,
            quality: 0});
    });

    it('default item', () => {
        const gildedRose = new GildedRose([new Item('default item', 5, 21)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "default item",
            sellIn: 4,
            quality: 20});
    });

    it('default item sellIn', () => {
        const gildedRose = new GildedRose([new Item('default item', 0, 21)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "default item",
            sellIn: 0,
            quality: 19});
    });

    it('default item zeroValue', () => {
        const gildedRose = new GildedRose([new Item('default item', 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "default item",
            sellIn: 4,
            quality: 0});
    });

    it('BackStage', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 20, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 19,
            quality: 6});
    });

    it('BackStage highValue', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 20, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 19,
            quality: 50});
    });

    it('BackStage 10 sellIn', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 0,
            quality: 0});
    });

    it('BackStage 10 days', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 9, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 8,
            quality: 22});
    });

    it('BackStage 10 days highValue', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 9, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 8,
            quality: 50});
    });

    it('BackStage 5 sellIn', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 0,
            quality: 0});
    });

    it('BackStage 5 days', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 4, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 3,
            quality: 23});
    });

    it('BackStage 5 days highValue', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes', 4, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toEqual({
            name: "Backstage passes",
            sellIn: 3,
            quality: 50});
    });
});
