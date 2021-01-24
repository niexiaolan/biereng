<template>
	<view>

		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" style="margin-top: 20rpx;">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">小篮子</view>
				<view class="u-font-14 u-tips-color">微信号:未登录</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="28"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="收藏"></u-cell-item>
				<u-cell-item icon="photo" title="相册"></u-cell-item>
				<u-cell-item icon="coupon" title="卡券"></u-cell-item>
				<u-cell-item icon="heart" title="关注"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
			</u-cell-group>
		</view>
		<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: [],
				pic:'https://uviewui.com/common/logo.png',
				show:true
			}
		},
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
			},]
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
