<template>
	<view class="content">
		<view class="iconfont icon-location"><text>海南大学</text> <icon class="iconfont icon-triangledownfill"></icon></view>
		<view class="home">
		<swiper indicator-dots circular >
			
		    <swiper-item>
		       <image src="../../static/images/banner1.jpg"></image>
		    </swiper-item>
		    <swiper-item>
		       <image src="../../static/images/banner.jpg"></image>
		    </swiper-item>
		</swiper>      
			  </view>
	</view>
	
</template>

<script>
	export default {
	    data() {
	        return {
	            background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500
	        }
	    },
	    methods: {
	        changeIndicatorDots(e) {
	            this.indicatorDots = !this.indicatorDots
	        },
	        changeAutoplay(e) {
	            this.autoplay = !this.autoplay
	        },
	        intervalChange(e) {
	            this.interval = e.target.value
	        },
	        durationChange(e) {
	            this.duration = e.target.value
	        }
	    }}
</script>

<style lang="scss">
	.content {
		background-color: #63CC5B;
		border-radius: 0px 0px 15px 15px;
		width: 750rpx;
		height: 500rpx;
	}
	.home{
		swiper{
			width: 750rpx;
			height: 350rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	
	}


</style>
