# Polyfill for NodeList.forEach()

Adds the `forEach()` method to `NodeList` objects for browsers not supporting `NodeList.forEach`.

## Installation

    npm install -save polyfill-nodelist-foreach

or

    yarn add polyfill-nodelist-foreach

## Import

Import the polyfill prior to using `forEach()` on a `NodeList` object.

    require('polyfill-nodelist-foreach')

or 

    import 'polyfill-nodelist-foreach'

## Usage

    // Reference a Nodelist 
    const nodeListElements = document.querySelectorAll('.item')

    // Loop through the NodeList using forEach
    nodeListElements.forEach((element, index, nodeList) => {
        console.log(this, element, index, nodeList)
    })
