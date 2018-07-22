<template>
    <div>
    	<!--<mt-search v-model="value"></mt-search>-->
    	<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="https://pic2.cnrmall.com/image/ed/cb/edcbbd0be87803911391c1e440e8d424.jpg" alt="" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="https://pic1.cnrmall.com/image/12/f0/12f02b7389e76f35fd760d04c7ebc441.jpg" alt="" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="https://pic2.cnrmall.com/image/e4/0c/e40c7b5d6cfd316885c894321ea3e024.jpg" alt="" />
			  </mt-swipe-item>
		</mt-swipe>
		<div class="navList">
			<ul>
				<li>
					<a href="#">
						<img src="https://pic4.cnrmall.com/image/71/f4/71f405d093baa7555234bb656e6f22bc.jpg" alt="">
					</a>				
				</li>
				<li>
					<a href="#">
						<img src="https://pic1.cnrmall.com/image/a9/bc/a9bc0dc399ac349935dd844ff9810598.jpg" alt="">
					</a>
				</li>
				<li>
					<a href="#">
						<img src="https://pic2.cnrmall.com/image/46/1e/461e4d3a6b4f03c7a474dfd4bf4d9958.jpg" alt="">
					</a>
				</li>
				<li>
					<a href="#">
						<img src="https://pic3.cnrmall.com/image/ec/90/ec9025585f03e916106dd3a824643711.jpg" alt="">
					</a>
				</li>
				<li>
					<a href="#">
						<img src="https://pic3.cnrmall.com/image/98/db/98db45a3dbf3da632a0a44d64b7776d6.jpg" alt="">
					</a>
				</li>
			</ul>
		</div>
		
		<div class="list-pic">
			<a href="#">
				<img src="https://pic2.cnrmall.com/image/9a/78/9a78dea46a9e498e2b87f92718d317f6.jpg" alt="" />
			</a>
		</div>
		<div class="hot-list">
			<div class="List-pic">
				<a href="#">
					<img src="https://pic3.cnrmall.com/image/30/9f/309f0dd1d17f204f6d8df135c928c078.jpg" alt="" />
				</a>
			</div>
			<div class="List-pic">
				<a href="#">
					<img src="https://pic3.cnrmall.com/image/56/db/56db1187ec3db2eb86ec8e37cae76077.jpg" alt="" />
				</a>
			</div>
			<div class="List-pic">
				<a href="#">
					<img src="https://pic3.cnrmall.com/image/a0/aa/a0aa676dfc4857fcd59911dfb6ae4ca3.jpg" alt="" />
				</a>
			</div>
		</div>
		
		<div class="list-pic">
			<a href="#">
				<img src="https://pic4.cnrmall.com/image/47/2c/472c39117740341c6614d86a7891fc76.jpg" alt="" />
			</a>
		</div>			
		<div class="jewelryList">			
			<ul>
				<li v-for='item in jewelryList'  :key="item.id">
					<div>
						<img :src="item.img" alt="" />
					</div>
					<dl>
						<dt>{{item.info}}</dt>
						<dd>{{item.price}}</dd>
					</dl>
				</li>				
			</ul>
		</div>
		
		<div class="watchList">			
			<div class="List-pic">
				<a href="#">
					<img src="https://pic1.cnrmall.com/image/41/7a/417a8116be21bcc932c1bd599ed6c063.jpg" alt="" />
				</a>
			</div>
			<ul>
				<li v-for='item in watchList'  :key="item.id">
					<div>
						<img :src="item.img" alt="" />
					</div>
					<dl>
						<dt>{{item.info}}</dt>
						<dd>{{item.price}}</dd>
					</dl>
				</li>				
			</ul>
		</div>
		
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>