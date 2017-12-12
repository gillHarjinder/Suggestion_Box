//pull the data as Suggetions and comments
app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
			{
				id: 1,
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: [
				{
					body: 'free pizza, i take it!!',
					upvotes: 3,
				},
				{
					body: 'i like thin crust pizza',
					upvotes: 2,
				}
				],
			},
			{
				id: 2,
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [
				{
					body: 'once upon time!!',
					upvotes: 0,
				},
				{
					body: 'good one',
					upvotes: 1,
				}
				],
			},
			{
				id: 3,
				title: 'Retrofit water fountain with Gatorade',
				upvotes: 7,
				comments: [
				{
					body: 'good for hydrate!!',
					upvotes: 4,
				},
				{
					body: 'g2 Gatorade',
					upvotes: 5,
				}
				],
			},
			{
				id: 4,
				title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
				upvotes: 3,
				comments: [
				
				],
			}
		]
	}
	return demoSuggestions;
}]);

