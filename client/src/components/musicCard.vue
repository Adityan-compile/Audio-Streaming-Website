<template>
	<div class="card shadow bg-dark text-center d-flex">
		<div class="card-body">
			<div class="row">
				<div class="col-md-3">
					<object :data="data.image" class="thumbnail">
						<!-- <img src="../assets/default.png" class="thumbnail" /> -->
					</object>
				</div>
				<div class="col-md-3 p-4">
					<span class="align-middle">{{ data.title }}</span>
				</div>
				<div class="col-md-3 align-middle p-4">
					<span>{{ data.artist }}</span>
				</div>
				<div class="col-md-3 p-4">
					<i class="fa fa-play-circle play"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MusicCard",
	data() {
		return {};
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.thubmnail {
	height: 80px;
	width: 80px;
	object-fit: cover;
}
.play {
	font-size: 2.3rem;
}
</style>
