// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   asyncio.js                                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: jnakahod <jnakahod@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/06 12:54:51 by jnakahod          #+#    #+#             //
//   Updated: 2021/01/25 13:13:36 by jnakahod         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

if (process.argv.length == 3) {
	const fs = require("fs");
	const file_name = process.argv[2];

	fs.readFile(file_name, "utf-8", (err, file) => {
		if (err) {
			console.log(err.message);
		} else {
			let num = 0;
			for (let i = 0; i < file.length; i++) {
				if (file[i] == '\n') {
					num++;
				}
			}
			console.log(num);
		}
	});
} else {
	console.log("Wrong number of arguments.");
}
