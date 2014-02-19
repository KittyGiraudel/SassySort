Sass sort
=========

Here are a couple of ways to sort values (including strings) in Sass (~> 3.3).

**Disclaimer!** While it can be useful to sort numbers in Sass in case of the making of a modular scale or something, it is rarely the case for strings. The main idea behind this repository is to push Sass' syntax to its limit. Long story short: *because we can*.

## Available algorithms

* [Comb sort](http://en.wikipedia.org/wiki/Comb_sort)
* [Quick sort](http://en.wikipedia.org/wiki/Quicksort)
* [Shell sort](http://en.wikipedia.org/wiki/Shellsort)
* [Bubble sort](http://en.wikipedia.org/wiki/Bubble_sort)
* [Selection sort](http://en.wikipedia.org/wiki/Selection_sort)
* [Insertion sort](http://en.wikipedia.org/wiki/Insertion_sort)

## Benchmark

### 50 items long list
* quick     -> 0.238s / 0.226s / 0.202s / 0.206s / 0.226s => **0.2195s**
* comb      -> 0.350s / 0.323s / 0.330s / 0.324s / 0.328s => **0.3310s**
* shell     -> 0.412s / 0.355s / 0.359s / 0.372s / 0.437s => **0.3869s**
* insertion -> 0.400s / 0.42s  / 0.406s / 0.399s / 0.468s => **0.4185s**
* selection -> 0.635s / 0.579s / 0.580s / 0.601s / 0.611s => **0.6012s**
* bubble    -> 0.976s / 0.830s / 0.802s / 0.824s / 0.936s => **0.8736s**

### 100 items long list
* quick     -> 0.592s / 0.547s / 0.569s / 0.541s / 0.548s => **0.5594s**
* comb      -> 0.946s / 0.903s / 0.897s / 0.902s / 0.905s => **0.9106s**
* shell     -> 1.413s / 1.435s / 1.425s / 1.489s / 1.408s => **1.4340s**
* insertion -> 1.744s / 1.625s / 1.583s / 1.572s / 1.608s => **1.6263s**
* selection -> 2.605s / 2.462s / 2.502s / 2.490s / 2.477s => **2.5072s**
* bubble    -> 3.828s / 3.699s / 3.704s / 3.672s / 3.743s => **3.7292s**

`quicksort` is well named since it is by far the fastest algorithm: about 3 times faster than `shellsort` and `insertionsort` implementations, 4 times faster than `selectionsort` and 7 times faster than `bubblesort`.

## Install as a Compass extension

1. `gem install SassySort`
2. Add `require 'SassySort'` to your `config.rb`
3. Import it in your stylesheets with `@import 'SassySort'`

## Credits

Thanks to [mgechev](https://github.com/mgechev) for [his work on sorting algorithms](https://github.com/mgechev/javascript-algorithms/tree/master/src/sorting) in JavaScript which has been a great help for implementing sorting algorithms in Sass.

More informations about sorting algorithms at [http://www.sorting-algorithms.com/](http://www.sorting-algorithms.com/).
