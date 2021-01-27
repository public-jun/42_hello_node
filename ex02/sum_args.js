// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   sum_args.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: jnakahod <jnakahod@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/30 16:47:51 by jnakahod          #+#    #+#             //
//   Updated: 2020/12/30 22:06:41 by jnakahod         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

let	sum = 0;

for	(let i = 0; i < process.argv.length; i++) {
	const arg = process.argv[i];
	if (i > 1) {
		sum += parseInt(arg, 10);
	}
}

console.log(sum);
