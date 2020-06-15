const routes = [
	{
		url: '/a',
		routes: [
			{
				name: 'a-home',
				url: '/',
			},
			{
				name: 'a-consultations',
				url: '/consultations/',
			},
			{
				url: '/settings',
				routes: [
					{
						name: 'a-settings',
						url: '/',
					},
					{
						name: 'a-password',
						url: '/password/',
					},
				],
			},
		],
	},
	{
		name: 'login',
		url: '/login/',
	},
];


function reverse(name, res = routes, parentRoute = '') {
	let result = null;
	res.find((r) => {
		if(r.routes) {
			result = reverse(name, r.routes, parentRoute);
			if(result){
				result = `${r.url}${result}`;
			}
		}
		else if(r.name === name) {
			result = `${parentRoute}${r.url}`;
			return result;
		}
	});
	return result;
}


// Test cases (should see true for tests to pass)
console.log(reverse('a-home') === '/a/');
console.log(reverse('a-consultations') === '/a/consultations/');
console.log(reverse('a-settings') === '/a/settings/');
console.log(reverse('a-password') === '/a/settings/password/');
console.log(reverse('login') === '/login/');
