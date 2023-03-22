(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(2),s=a(3),c=a(5),l=a(4),m=a(1),o=a.n(m),u=(a(13),a(8)),h=a.n(u),p=(a(14),a(0)),d=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentFrame:0,inTransition:!1,hasNext:!0,hasPreviouus:!1},e.intervalId=0,e.handleNext=function(){var t=e.props,a=t.step,n=t.frameSize,i=t.infinite,r=t.images.length,s=e.state,c=s.currentFrame,l=s.hasPreviouus,m=function(e){var t=e+a;return e+n===r&&i&&(t=0),r-t<n&&(t=r-n),t},o=m(c);m(o)!==o||e.setState({hasNext:!1}),l||e.setState({hasPreviouus:!0}),e.setCurrentFrame(o)},e.handlePrevious=function(){var t=e.props,a=t.step,n=t.infinite,i=t.frameSize,r=t.images.length,s=e.state,c=s.currentFrame,l=s.hasNext,m=function(e){var t=e-a;return 0===e&&n&&(t=r-i),t<0&&(t=0),t},o=m(c);o!==m(o)||e.setState({hasPreviouus:!1}),l||e.setState({hasNext:!0}),e.setCurrentFrame(o)},e.setCurrentFrame=function(t){e.setState({inTransition:!0,currentFrame:t}),setTimeout((function(){e.setState({inTransition:!1})}),e.props.animationDuration)},e.inVisibleArea=function(t){var a=e.state.currentFrame,n=e.props.frameSize;return t>=a&&t<a+n},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.images,n=t.frameSize,i=t.itemWidth,r=t.animationDuration,s=this.state,c=s.currentFrame,l=s.inTransition,m=s.hasNext,o=s.hasPreviouus;return Object(p.jsxs)("div",{className:"Carousel",style:{width:n*i},children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(-i*c,"px)"),transitionDuration:"".concat(r,"ms")},children:a.map((function(t,a){return Object(p.jsx)("li",{className:"Carousel__item",children:Object(p.jsx)("img",{className:h()("Carousel__img",{"Carousel__img--visible":e.inVisibleArea(a)}),src:t,alt:"".concat(a+1),width:i})})}))}),Object(p.jsxs)("div",{className:"Carousel__buttons",children:[Object(p.jsx)("button",{type:"button",onClick:this.handlePrevious,className:"Carousel__button",disabled:l||!o,children:"<<"}),Object(p.jsx)("button",{type:"button",onClick:this.handleNext,"data-cy":"next",className:"Carousel__button",disabled:l||!m,children:">>"})]})]})}}]),a}(m.Component),b=d,g={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},j=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=g,e.handleStepChange=function(t){var a=Number(t.target.value);e.setState({step:a})},e.handleItemWidthChange=function(t){var a=Number(t.target.value);e.setState({itemWidth:a})},e.handleFrameSizeChange=function(t){var a=Number(t.target.value);e.setState({frameSize:a})},e.handleAnimationDurationChange=function(t){var a=Number(t.target.value);e.setState({animationDuration:a})},e.handleInfiniteChange=function(t){e.setState({infinite:t.target.checked})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,r=e.animationDuration,s=e.infinite;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(p.jsx)(b,{images:t,step:a,frameSize:n,itemWidth:i,animationDuration:r,infinite:s}),Object(p.jsxs)("form",{className:"App__form",children:[Object(p.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item width: ",Object(p.jsx)("input",{id:"itemId",type:"number",min:10,name:"itemWidth",value:i,onChange:this.handleItemWidthChange})]}),Object(p.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame size: ",Object(p.jsx)("input",{id:"frameId",type:"number",min:1,max:10,name:"frameSize",value:n,onChange:this.handleFrameSizeChange})]}),Object(p.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step: ",Object(p.jsx)("input",{id:"stepId",type:"number",min:1,max:9,name:"step",value:a,onChange:this.handleStepChange})]}),Object(p.jsxs)("label",{className:"App__label",children:["Animation duration: ",Object(p.jsx)("input",{type:"number",min:0,name:"animationDuration",value:r,onChange:this.handleAnimationDurationChange})]}),Object(p.jsxs)("label",{className:"App__label",children:["Infinite: ",Object(p.jsx)("input",{type:"checkbox",name:"infinite",checked:s,onChange:this.handleInfiniteChange})]})]})]})}}]),a}(o.a.Component),f=j;i.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.12443611.chunk.js.map