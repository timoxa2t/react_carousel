(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(2),r=a(3),c=a(4),l=a(6),m=a(5),o=a(1),u=a.n(o),p=(a(14),a(9)),h=a.n(p),b=(a(15),a(0)),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentFrame:0},e.intervalId=0,e.nextStep=function(){var t=e.props,a=t.step,n=t.frameSize,i=t.infinite,s=t.images.length,r=e.state.currentFrame,c=r+a;r+n===s&&i&&(c=0),s-c<n&&(c=s-n),e.setState({currentFrame:c})},e.previousStep=function(){var t=e.props,a=t.step,n=t.infinite,i=t.frameSize,s=t.images.length,r=e.state.currentFrame,c=r-a;0===r&&n&&(c=s-i),c<0&&(c=0),e.setState({currentFrame:c})},e.inVisibleArea=function(t){var a=e.state.currentFrame,n=e.props.frameSize;return t>=a&&t<a+n},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.images,n=t.frameSize,i=t.itemWidth,s=t.animationDuration,r=this.state.currentFrame;return Object(b.jsxs)("div",{className:"Carousel",style:{width:n*i},children:[Object(b.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(-i*r,"px)"),transitionDuration:"".concat(s,"ms")},children:a.map((function(t,a){return Object(b.jsx)("li",{className:"Carousel__item",children:Object(b.jsx)("img",{className:h()("Carousel__img",{"Carousel__img--visible":e.inVisibleArea(a)}),src:t,alt:"".concat(a+1),width:i})})}))}),Object(b.jsxs)("div",{className:"Carousel__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.previousStep,className:"Carousel__button",children:"<<"}),Object(b.jsx)("button",{type:"button",onClick:this.nextStep,"data-cy":"next",className:"Carousel__button",children:">>"})]})]})}}]),a}(o.Component),d=j,g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleChange=function(t){var a=Number(t.target.value),n=t.target.name;switch(n){case"step":case"itemWidth":case"frameSize":case"animationDuration":e.setState(Object(s.a)({},n,a));break;case"infinite":e.setState(Object(s.a)({},n,t.target.checked))}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,s=e.animationDuration,r=e.infinite;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(b.jsx)(d,{images:t,step:a,frameSize:n,itemWidth:i,animationDuration:s,infinite:r}),Object(b.jsxs)("form",{className:"App__form",children:[Object(b.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item width: ",Object(b.jsx)("input",{id:"itemId",type:"numner",min:10,name:"itemWidth",value:i,onChange:this.handleChange})]}),Object(b.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame size: ",Object(b.jsx)("input",{id:"frameId",type:"numner",min:1,max:10,name:"frameSize",value:n,onChange:this.handleChange})]}),Object(b.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step: ",Object(b.jsx)("input",{id:"stepId",type:"numner",min:1,max:9,name:"step",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:"App__label",children:["Animation duration: ",Object(b.jsx)("input",{type:"numner",min:0,name:"animationDuration",value:s,onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:"App__label",children:["Infinite: ",Object(b.jsx)("input",{type:"checkbox",name:"infinite",checked:r,onChange:this.handleChange})]})]})]})}}]),a}(u.a.Component),f=g;i.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.038cdb45.chunk.js.map