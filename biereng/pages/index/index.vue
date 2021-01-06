<template>
	<view>
		<!-- 上半部分 -->
		<view class="topcontent">
			<view class="textbox">
				<view class="iconfont icon-locationfill"><text class="text">海口市 海南大学 </text>
					<icon class="iconfont icon-triangledownfill"></icon>
				</view>
			</view>
			<view class="home">
				<swiper indicator-dots circular>
					<swiper-item>
						<image src="../../static/images/banner1.jpg"></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/images/banner.jpg"></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/images/banner3.jpg"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 下半部分 -->
		<view class="bottom">
			<u-row gutter="15">
				<u-col span="8">
					<view class="bottombox " style="background:rgba(236, 165, 99, 0.2);">
						<u-row>
							<u-col >
								<view style="height: 20rpx;"></view>
							</u-col>
						</u-row>
						<u-row>
							<text class="text-title">我的积分</text>
						</u-row>
						<u-row>
							<text class="text-english">My points score</text>
						</u-row>
						<view class="image-box">
							<image src="../../static/images/score.png" class="score"></image>
						</view>
						
					</view>
				</u-col>
				<u-col span="4">
					<view class="bottombox" style="background: rgba(152, 196, 234,0.2);">
						<u-row>
							<u-col >
								<view style="height: 20rpx;"></view>
							</u-col>
						</u-row>
						<u-row>
							<text class="text-title">废品报价</text>
							<view class="image-box1">
								<image src="../../static/images/price.png" class="price"></image>
							</view>
						</u-row>
						<u-row>
							<text class="text-english">Scrap quotation</text>
						</u-row>
					</view>
				</u-col>
			</u-row>
			<u-row>
				<u-col span="12">
					<view style="height: 15rpx;"></view>
				</u-col>
			</u-row>
			<u-row gutter="15" class="rowstyle">
				<u-col span="12">
					<view class="bottombox " style="background: rgba(99, 204, 91,0.2) ;">
						<u-row>
							<u-col >
								<view style="height: 20rpx;"></view>
							</u-col>
						</u-row>
						<u-row>
							<text class="text-title">现在预约</text>
						</u-row>
						<u-row>
							<text class="text-english">Reservation now</text>
						</u-row>
						<view class="image-box2">
							<image src="../../static/images/time.png" class="time"></image>
						</view>
					</view>
				</u-col>
			</u-row>
			<u-row>
				<u-col span="12">
					<view style="height: 15rpx;"></view>
				</u-col>
			</u-row>
			<u-row gutter="15" class="rowstyle">
				<u-col span="4">
					<view class="bottombox " style="background:rgba(236, 165, 99, 0.2);">
						<u-row>
							<u-col >
								<view style="height: 20rpx;"></view>
							</u-col>
						</u-row>
						<u-row>
							<text class="text-title">旧纸箱</text>
						</u-row>
						<u-row>
							<text class="text-english">Waste  Carton</text>
						</u-row>
						<view class="image-box3">
							<image src="../../static/images/carton.png" class="carton"></image>
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="bottombox " style="background:rgba(152, 196, 234,0.2);">
						<u-row>
							<u-col >
								<view style="height: 20rpx;"></view>
							</u-col>
						</u-row>
						<u-row>
							<text class="text-title">旧衣物</text>
						</u-row>
						<u-row>
							<text class="text-english">Waste Clothes</text>
						</u-row>
						<view class="image-box4">
							<image src="../../static/images/cloth.png" class="cloth"></image>
						</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="bottombox " style="background: rgba(99, 204, 91,0.2) ;">
						<u-row>
							<u-col >
								<view style="height: 20rpx;"></view>
							</u-col>
						</u-row>
						<u-row>
							<text class="text-title">其他</text>
						</u-row>
						<u-row>
							<text class="text-english">Other</text>
						</u-row>
						<view class="image-box5">
							<image src="../../static/images/seting.png" class="set"></image>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
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
				duration: 500,
				tabbar: ''
			}
		},

		methods: {
			/* 轮播图 */
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
			},
			/* tabbar */
			onLoad() {
				this.tabbar = [{
						iconPath: "/static/icon/home.png",
						selectedIconPath: "/static/icon/home-chioced.png",
						text: '首页',
						count: 2,
						isDot: true,
						pagePath: "/pages/index/index"
					},
					{
						iconPath: "/static/icon/price.png",
						selectedIconPath: "/static/icon/price-chioced.png",
						text: '报价',
						pagePath: "/pages/price/price"
					},
					{
						iconPath: "/static/icon/deal.png",
						selectedIconPath: "/static/icon/deal.png",
						text: '下单',
						midButton: true,
						pagePath: "/pages/js/index"
					},
					{
						iconPath: "/static/icon/order.png",
						selectedIconPath: "/static/icon/order-chioced.png",
						text: '订单',
						pagePath: "/pages/order/order"
					},
					{
						iconPath: "/static/icon/mine.png",
						selectedIconPath: "/static/icon/mine-chioced.png",
						text: '我的',
						pagePath: "/pages/mine/mine"
					},
				];

			}
		}
	}
</script>

<style lang="scss" scoped>
	.textbox {
		padding-bottom: 35rpx;
		padding-left: 20rpx;

		.iconfont {
			color: #FFFFFF;
			font-size: 25rpx;

			.text {
				padding: 10rpx;
			}
		}

	}

	.topcontent {
		background-color: #63CC5B;
		width: 750rpx;
		height: 500rpx;
	
	}

	.home {
		position: absolute;
		left: 15rpx;
		top:100rpx;
		swiper {
			width: 720rpx;
			height: 350rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.bottom {

		position: absolute;
		top: 500rpx;
		height: 900rpx;
		width: 100%;
		padding: 10rpx;
		padding-top: 25rpx;
	}

	.bottombox {
		border-radius: 15rpx 15rpx 15rpx 15rpx;
		height: 240rpx;
	}
	.text-title {
		margin: 30rpx;
		font-size: 24rpx;
		font-weight: 900 ;
		text-align: 8rpx;
		letter-spacing: 10rpx;
	
	}
	.text-english {
		color: #868686;
		font-size: 19rpx;
		margin: 20rpx 30rpx;
	}
	.image-box {
		position: absolute;
		left: 367rpx;
		top: 140rpx;
		height: 125rpx;
		width: 125rpx;
		overflow: hidden;
		.score{
			position: absolute;
			top:15rpx;
			height: 140rpx;
			width: 140rpx;
		}
		
	}
	.image-box1 {
		position: absolute;
		right: 20rpx;
		top:140rpx;
		height: 125rpx;
		width: 125rpx;
		border-radius: 0 0 15rpx 0;
		overflow: hidden;
		.price{
			position: absolute;
			top:15rpx;
			left: 10rpx;
			height: 150rpx;
			width: 150rpx;
		}
	}
	.image-box2 {
		position: absolute;
		right: 25rpx;
		top:360rpx;
		height: 150rpx;
		width: 150rpx;
		.time{
			height: 100%;
			width: 100%;
		}
	}
	.image-box3 {
		position: absolute;
		left: 120rpx;
		top:648rpx;
		height: 125rpx;
		width: 125rpx;
		border-radius: 0 0 15rpx 0;
		overflow: hidden;
		.carton{
			position: absolute;
			top:20rpx;
			height: 150rpx;
			width: 150rpx;
		}
	}
	.image-box4 {
		position: absolute;
		left: 367rpx;
		top: 648rpx;
		height: 125rpx;
		width: 125rpx;
		overflow: hidden;
		border-radius: 0 0 15rpx 0;
		.cloth{
			position: absolute;
			top:15rpx;
			left: 25rpx;
			height: 140rpx;
			width: 140rpx;
		}
		
	}
	.image-box5 {
		position: absolute;
		right: 20rpx;
		top: 648rpx;
		height: 125rpx;
		width: 125rpx;
		overflow: hidden;
		border-radius: 0 0 15rpx 0;
		.set{
			position: absolute;
			top:30rpx;
			left: 30rpx;
			height: 120rpx;
			width: 120rpx;
		}
		
	}
</style>
