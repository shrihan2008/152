AFRAME.registerComponent("base",{

    schema:{
  radius:{type:"number",default:150},
  height:{type:"number",default:30}
      },
      init:function(){
         window.addEventListener('click',(e)=>{
            this.data.height=this.data.height+0.02
        })
         this.el.getAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
         })

         this.el.setAttribute("material",{color:"blue"})
      }
  })