// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   io.js                                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: jnakahod <jnakahod@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/30 22:05:13 by jnakahod          #+#    #+#             //
//   Updated: 2021/01/25 13:19:16 by jnakahod         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

try {
	if (process.argv.length == 3) {
		const fs = require("fs");
		const file_name = process.argv[2];

		const file = fs.readFileSync(file_name, "utf-8");
		let num = 0;
		for (let i = 0; i < file.length; i++) {
			if (file[i] == '\n') {
				num++;
			}
		}
		console.log(num);
	} else {
		console.log("Wrong number of arguments.");
	}
} catch(e) {
	console.log(e.message);
}
