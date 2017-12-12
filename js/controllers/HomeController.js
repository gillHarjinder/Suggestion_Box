app.controller('HomeController', [
	'$scope',
	'suggestions',

	function($scope, suggestions) {
	$scope.posts = suggestions.posts

	$scope.addSuggestion = function() {
		// Add a suggestion to $scope.posts
		if (!$scope.title || $scope.title === "") {
			return
		}

		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
		});

		$scope.title = '';

	};

	// every time plus sign clicked the upvote increment by 1
	$scope.upVote = function(post) {
		post.upvotes += 1;
	};
}]);