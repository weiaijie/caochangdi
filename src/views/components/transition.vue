<template>
    <div class="components-container">

    </div>
</template>

<script>
export default {
    name: 'transition',
    data() {
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
// .components-container{
//     position:fixed;
//     height:100%;
//     width: 100%;
// }
.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both
}

@-webkit-keyframes slideInLeft {
	0% {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
		visibility: visible
	}

	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes slideInLeft {
	0% {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
		visibility: visible
	}

	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.slideInLeft {
	-webkit-animation-name: slideInLeft;
	animation-name: slideInLeft
}

@-webkit-keyframes slideInRight {
	0% {
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
		visibility: visible
	}

	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes slideInRight {
	0% {
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
		visibility: visible
	}

	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.slideInRight {
	-webkit-animation-name: slideInRight;
	animation-name: slideInRight
}
</style>

