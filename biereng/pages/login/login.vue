<template>
	<!-- 背景 -->
	<view class="UCenter-bg">
		<view class="title">别扔</view>
		<view class="bottombox1">
			<u-button type="success" size="default" open-type="getUserInfo" @getuserinfo="getUserInfo">微信登录</u-button>
		</view>
		<view class="bottombox2">
			<navigator url="/pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">
				 <button type="default">先看看</button>
			</navigator>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uni.login({
				success: function(res) {
					console.log(res);
					uni.request({
						url: 'http://localhost:8011/rubbish/login/mini/login/openId',
						data: {
							code:res.code
						},
						method: "POST",
						success: res => {
							console.log(res);
						}
					})
				}
			})

		},
		methods: {
			getUserInfo: function(res) {
				console.log(res)
			},


		}
	}
</script>

<style lang="scss" scoped>
	.UCenter-bg {
		position: absolute;
		width: 100%;
		height: 100%;

	}

	.title {
		color: #63CC5B;
		position: absolute;
		top: 25%;
		left: 37%;
		font-size: 100rpx;
		font-weight: 400;
	}

	.bottombox1 {
		width: 550rpx;
		position: absolute;
		top: 40%;
		left: 14%;
		margin: 5rpx;

	}

	,
	.bottombox2 {
		width: 550rpx;
		position: absolute;
		top: 50%;
		left: 14%;

	}
</style>
