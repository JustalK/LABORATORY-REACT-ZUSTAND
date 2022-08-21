# LABORATORY-REACT-ZUSTAND

This project is my laboratory for testing the difference of Zustand vs RTK. I have been using Redux and RTK for multiple years. Redux/RTK is really good and does the job properly. But one thing that always annoy me about this technology is the amount of code to implement for a simple change. It can be quite heavy for a developer.

**Zustand** is a state manager like Redux. Compare to Redux/RTK where we need to define a bunch of actions, state, payload, reducer, slice... Everything there is manage with slice. It makes it really simple to handle and manipulate.

## Zustand

- Experience1: Official example of Zustand
  This experience is a copy and paste of the Zustand example of NPM. I made it to test if Zustand works properly

- Experience2: Testing the update of react component depending of parameters change
  This experience was for testing that if I make a store of multiple elements and call one element in each component, I dont rerender everything.

- Experience3: Persist a store over reload and change of page
  By using the middleware persist, we can easy persist a result in the locastorage

## Redux/RTK
