<template>
	<view class="mainbox">
		<view class="box" v-for="item in navs" :key="index">
			<u-row>
				<u-col span="4">
					<view class="iconbox">
						<view :class="item.pictureId"></view>
					</view>
				</u-col>
				<u-col span="8">
					<view class="textbox">{{item.rubbishName}}
					</view>
					<view class="notebox">{{item.description}}</view>
					<view class="pricebox">

						<text class="pricetext" v-if="item.rubbishPrice =='999'">价格面议</text>
						<text class="pricetext" v-if="item.rubbishPrice !='999'">￥{{item.rubbishPrice}}/公斤</text>
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
				tabbar: '',
				navs: []
			}
		},
		onLoad() {
			this.getPrice(),
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
				]
		},
		methods: {
			async getPrice() {
				const res = await this.$myRequest({
					url: '/rubbish/getList'
				});
				this.navs = res.data.data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mainbox {
		background: #efefef;
		position: absolute;
		width: 100%;
		height: 100%;

		padding: 20rpx;
	}

	.box {
		margin: 15rpx 15rpx;
		height: 200rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;

		.iconbox {
			background: #efefef;
			position: relative;
			top: 25rpx;
			left: 25rpx;
			width: 150rpx;
			height: 150rpx;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			padding: 15rpx;

			.iconfont {
				font-size: 50px;
				position: relative;
				top: 3rpx;
				left: 13rpx;
			}
		}

		.textbox {
			margin: 20rpx 10rpx 5rpx 10rpx;
			padding: 10rpx 10rpx 5rpx 10rpx;
			font-weight: 800;
		}

		.notebox {
			margin: 0 10rpx;
			padding: 0 20rpx;
			font-size: 12px;
			color: #949494;
		}

		.pricebox {
			margin: 0 10rpx;
			padding: 20rpx;
			color: #ED1C24;
			font-size: 12px;
			font-weight: 600;
		}
	}
</style>
