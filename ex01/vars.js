// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   vars.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: jnakahod <jnakahod@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/12/28 13:59:48 by jnakahod          #+#    #+#             //
//   Updated: 2020/12/30 19:48:10 by jnakahod         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

let		str = '42',
		num = 42,
		obj = new Object(42),
		empty = new Object(),
		bool = true,
		undef;
		

console.log(`${str} is a ${typeof str}.`);
console.log(`${num} is a ${typeof num}.`);
console.log(`${obj} is an ${typeof obj}.`);
console.log(`${empty} is an ${typeof empty}.`);
console.log(bool, "is a", typeof bool + ".");
console.log(undef, "is an", typeof undef + ".");
