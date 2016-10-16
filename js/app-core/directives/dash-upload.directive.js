let dashUpload = function(DashService){
	return {
		restrict: 'E',
		scope: {

		},
		template: `
		<div class="layoutForm">
			<form>
				<div id="fileUploadControls">
					<progress class="fileUploadProgress"
						value="0"
						max="100"
						id="dashUploader">0%</progress>
					<input class="fileUploadInput"
							type="file"
							name="img"
							accept="image/*"
							ng-model="image.one"
							placeholder="Choose a File"/>
				</div>
				<button class="small button"
					id="addPhotosBtn">Upload</button>
			</form>
		</div>
		`,
		link: function(scope, element, attrs){
			let uploader, submitBtn;

			element.on('click', function(){
				submitBtn = document.querySelector('#addPhotosBtn');
				uploader = document.querySelector('#dashUploader');
			});//click

			element.on('submit', function(){
				let file = element.find('input')[0].files[0];

				if(file){
					console.log('have file');

					submitBtn.disabled = true;

					DashService.fileUpload(file, uploader);
				} else {
					console.log('no file');
					return
				}
			});//submit


		} //link
	}//return
}//DashUpload

dashUpload.$inject = ['DashService'];

export default dashUpload;