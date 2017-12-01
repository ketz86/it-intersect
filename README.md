# it-intersect

> A simple component that use the IntersectionObserver to notify when it intersect with the viewport or a an element

## About
___

Being a wrapper around the **IntersectionObserver API**, this simple component is useful when your application need to respond to the presence of particular component in the viewport.

The best use case is probably for infinite scroll.

Given that you're rendering a list inside a container component, if you place this component after the list in that container you can listen for the intersection event and perform asynchronous operations to update your list

## IMPORTANT

The component is based on the **Intersection Observer API**, which at the moment is an experimental technology, implemented only in the latest versions of the major browsers.

Fortunately there's an official [polyfill](https://github.com/w3c/IntersectionObserver) that you can include to make everything works

## Installation
```bash
  npm install it-intersect
  #or
  yarn add it-intersect
```

## Usage

This is an example for infinite scroll loading

```vue
<template>
  <div>
    <!-- your list -->
    <div v-for="item in list">
      {{item}}
    </div>
    <!-- place the component right after your list --> 
    <!-- you can optionally insert text or other components inside it-intersect, it comes with a default slot-->
    <it-intersect @it-intersected="fetchMore"/>
  </div>
</template>

<script>  
  import ItIntersect from 'it-intersect'
  export default {
    // ...
    methods : {
      fetchMore(){
        // code to fetch data
      }
    },
    components : {ItIntersect}
  }
</script>
```

## API

### Event

 **it-intersected** : the event that gets triggered when the component intersect the root

### Props

Prop name |  Type | Description | Default
--- | --- | --- | --- | 
tagName | String | Set the tag for the the element | `div`
refName | String | Set the ref value for this element, useful if you need more than one instance on the component | `it-intersect-trigger`
rootMargin | Number | The margin around the component used to calculate its intersection with its root element | `0`
root | String | A string that can be used as query selector for the IntersectionObserver.If none is given it use the viewport | -
threshold | Number | A number between 0 and 1 representing the ratio of the component that has to intersect before the event gets triggered. If 0, the event will trigger as soon as the element intersect with the root. If 1, the event will trigger only when all the component will be in the root viewport. | `0`



## License
MIT