<template>
	<view>
			<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: ''
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

<style>

</style>
