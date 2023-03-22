(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(2),s=a(3),c=a(5),l=a(4),m=a(1),o=a.n(m),u=(a(13),a(8)),h=a.n(u);a(14);function p(e,t,a,n,i){var r=e+n;return e+a===t&&i&&(r=0),t-r<a&&(r=t-a),r}function d(e,t,a,n,i){var r=e-n;return 0===e&&i&&(r=t-a),r<0&&(r=0),r}var b=a(0),g=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentFrame:0,inTransition:!1,hasNext:!0,hasPrevious:!1},e.intervalId=0,e.handleNext=function(){var t=e.props,a=t.step,n=t.frameSize,i=t.infinite,r=t.images.length,s=e.state,c=s.currentFrame,l=s.hasPrevious,m=p(c,r,n,a,i);p(m,r,n,a,i)!==m||e.setState({hasNext:!1}),l||e.setState({hasPrevious:!0}),e.setCurrentFrame(m)},e.handlePrevious=function(){var t=e.props,a=t.step,n=t.infinite,i=t.frameSize,r=t.images.length,s=e.state,c=s.currentFrame,l=s.hasNext,m=d(c,r,i,a,n);d(m,r,i,a,n)!==m||e.setState({hasPrevious:!1}),l||e.setState({hasNext:!0}),e.setCurrentFrame(m)},e.setCurrentFrame=function(t){e.setState({inTransition:!0,currentFrame:t}),setTimeout((function(){e.setState({inTransition:!1})}),e.props.animationDuration)},e.inVisibleArea=function(t){var a=e.state.currentFrame,n=e.props.frameSize;return t>=a&&t<a+n},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.images,n=t.frameSize,i=t.itemWidth,r=t.animationDuration,s=this.state,c=s.currentFrame,l=s.inTransition,m=s.hasNext,o=s.hasPrevious;return Object(b.jsxs)("div",{className:"Carousel",style:{width:n*i},children:[Object(b.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(-i*c,"px)"),transitionDuration:"".concat(r,"ms")},children:a.map((function(t,a){return Object(b.jsx)("li",{className:"Carousel__item",children:Object(b.jsx)("img",{className:h()("Carousel__img",{"Carousel__img--visible":e.inVisibleArea(a)}),src:t,alt:"".concat(a+1),width:i})})}))}),Object(b.jsxs)("div",{className:"Carousel__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.handlePrevious,className:"Carousel__button",disabled:l||!o,children:"<<"}),Object(b.jsx)("button",{type:"button",onClick:this.handleNext,"data-cy":"next",className:"Carousel__button",disabled:l||!m,children:">>"})]})]})}}]),a}(m.Component),j=g,f={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state=f,e.handleStepChange=function(t){var a=Number(t.target.value);e.setState({step:a})},e.handleItemWidthChange=function(t){var a=Number(t.target.value);e.setState({itemWidth:a})},e.handleFrameSizeChange=function(t){var a=Number(t.target.value);e.setState({frameSize:a})},e.handleAnimationDurationChange=function(t){var a=Number(t.target.value);e.setState({animationDuration:a})},e.handleInfiniteChange=function(t){e.setState({infinite:t.target.checked})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,r=e.animationDuration,s=e.infinite;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(b.jsx)(j,{images:t,step:a,frameSize:n,itemWidth:i,animationDuration:r,infinite:s}),Object(b.jsxs)("form",{className:"App__form",children:[Object(b.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item width: ",Object(b.jsx)("input",{id:"itemId",type:"number",min:0,name:"itemWidth",value:i,onChange:this.handleItemWidthChange})]}),Object(b.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame size: ",Object(b.jsx)("input",{id:"frameId",type:"number",min:1,max:t.length,name:"frameSize",value:n,onChange:this.handleFrameSizeChange})]}),Object(b.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step: ",Object(b.jsx)("input",{id:"stepId",type:"number",min:1,max:t.length-1,name:"step",value:a,onChange:this.handleStepChange})]}),Object(b.jsxs)("label",{className:"App__label",children:["Animation duration: ",Object(b.jsx)("input",{type:"number",min:0,name:"animationDuration",value:r,onChange:this.handleAnimationDurationChange})]}),Object(b.jsxs)("label",{className:"App__label",children:["Infinite: ",Object(b.jsx)("input",{type:"checkbox",name:"infinite",checked:s,onChange:this.handleInfiniteChange})]})]})]})}}]),a}(o.a.Component),x=v;i.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3402293d.chunk.js.map