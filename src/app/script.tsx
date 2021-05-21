import React, { useRef } from 'react'
// console.clear();

const slides = [
{
  image: process.env.PUBLIC_URL + "/images/client1.png"
},

{
  image: process.env.PUBLIC_URL + "/images/client2.png"},
{
  image: process.env.PUBLIC_URL + "/images/client3.png"},
{
  image: process.env.PUBLIC_URL + "/images/client4.png"},
{
  image: process.env.PUBLIC_URL + "/images/client5.png"}];



function useTilt(active:any) {
  const ref = useRef<any>(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state:any = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined };


    let el = ref.current;

    const handleMouseMove = (e:any) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
         state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0 };


const slidesReducer = (state:any, event:any) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length };

  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
      state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1 };

  }
};

function Slide({ slide, offset }:any) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    React.createElement("div", {
      ref: ref,
      className: "slide",
      "data-active": active,
      style: {
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1 } },


    React.createElement("div", {
      className: "slideBackground",
      style: {
        backgroundImage: `url('${slide.image}')` } }),


    React.createElement("div", {
      className: "slideContent",
      style: {
        backgroundImage: `url('${slide.image}')` } },
)));




}

function App1() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    React.createElement("div", { className: "slides" },
    React.createElement("button1", { onClick: () => dispatch({ type: "PREV" }) }, "\u2039"),

    [...slides, ...slides, ...slides].map((slide, i) => {
      let offset = slides.length + (state.slideIndex - i);
      return React.createElement(Slide, { slide: slide, offset: offset, key: i });
    }),
    React.createElement("button1", { onClick: () => dispatch({ type: "NEXT" }) }, "\u203A")));


}

export default App1