## Nav bar 


- [x] height: auto VS height: 100%
- [x] overflow: hidden -> do not forget to give "height" to other elements or they won't show up
- [x] DOM manipulation
- [x] toggle(), display, height



### Difference between height: auto and height: 100%

```
height: 100% 
gives the element 100% height of its parent container.
```
```js
<div style="height: 50px">
    <div id="innerDiv" style="height: 100%">
    </div>
</div>

// #innerDiv is going to have height: 50px
```

```
height: auto 
means the element height will depend upon the height of its children.
```
```js
<div style="height: 50px">
    <div id="innerDiv" style="height: auto">
          <div id="evenInner" style="height: 10px">
          </div>
    </div>
</div>

// #innerDiv is going to have height: 10px
```