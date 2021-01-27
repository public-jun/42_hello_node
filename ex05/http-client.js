// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-client.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: jnakahod <jnakahod@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/15 13:53:39 by jnakahod          #+#    #+#             //
//   Updated: 2021/01/25 13:14:12 by jnakahod         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //


if (process.argv.length === 3) {
	try {
		const http = require("http");

		http.get(process.argv[2], (res) => {
			let rawData = '';
			res.on("data", (chunk) => {
				rawData += chunk;
			});
			res.on("end", () => {
				console.log(rawData);
			});
			res.on("error", (err) => {
				console.error(err.message);
			});

		}).on("error", (err) => {
			console.error(err.message);
		});
	} catch(err) {
		console.error(err.message);
	}
} else {
	console.log("Wrong number of arguments.");
}
