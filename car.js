AFRAME.registerComponent('car',{
    schema:{
        link:{type:"string" , link:"car/scene.gltf"}
    },
    init:function(){
        console.log(this.data.message)
    }


})