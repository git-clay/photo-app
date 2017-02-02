var ClientID=process.env.ClientID,
YOURCLIENTID=process.env.YOUR_CLIENT_ID,
base_url = 'https://api.imgur.com/3/image',
request = require('request')
// imgDataSend ='bsWyr4EqlexpJnXHQdx0VcdeSxAI0hjtf04tFY4/gYlrDECkdKi6kUs4/j wBlOvcNDJQp3NsspAaEMtvkKpJrkzVkoJDNT5LFOuiLTAxyRkuS6fkjOCtnNcFHJ2cA7lwxkKyxyhwOKWlZ1pS50XTGe8kkd rdWFz4NWhBqUZ7TCbjRhNNckm7VLgUx5PfwF r Big5dP8AcFjm/qtcF8srZSKqZEPY5XT TmXKk3QKM1EU6jPTdsK5mz/e6Z15uPwZk86eQYWR0tFkRt5JVbFZZd xfPk0IZMvky6SGJZld2R5aM ef2ZWXUvtItjQ tst9VVsyv5j5O/zOkVMaay/g6spmLqVfLQSPUprkI1IZP7BHPRn4869w6ypoimO 18gptFO9FJS7n8AGWztHI8Fm7GoiWgsoNdPHXllMX6jRWLuwR/JqDLarxsq78IdzYGtpCjFRW2jjfsSRR2JRdS9zqnqwXccUmhVNRm0Fj1FIS76VWcc37kGpHMpLkJ3exlwytedDOPP80UOF0 AMZphI7YReVS8AcmCMvCGIwv8lZwcWVlnzwOLbXsL21o1mk/Arl6dNOlsDPlkSlvk5HL9xTqcM8cmwEJvupgNSyuzP6nK3JoYnPfIh1DfcyYoPc1IPHKu1bFd2ES0aTW1ny0nsQyTbdjGV2uBWStNGZHogMmwcm 3bCyiByfpGJVFJ3yRzYOyjbRcYHWR 51ZHxYBO0RP2LiHY9RTWxmPUuvJmWFhO0TFaL6nXkvDOmZk5UiQzU dmbCNyOVVzQR5PyZmPNpcDMcqZFPYZXJGthmvpJMw8E7kqNTHP mixk9KCnj8GNONSa9jXxzuJm5lU2yoWlwDb8hpKwUlsAMiim75LyQOnYFr Tjns4 Ck5a QDRmi8Zt8CsW Bnp13NhTmLI1Wx/DNNoRjj0vAfHofUauFJyQxm6dS4Qj02RqUTWi1JIrLLyYHGVIWaabRuSxqXIjk6f73QNZOfEp wjk6VK2uTZzYWlwK14YVgZ4ShIRm7kz0mfApmXn9PptosSs Ee5jCx64Lx6dw5GYwVFSuS2B nbCHUrRnHpKzhvSF5x1sfnFCuSJUItUwckMTgDcdljmGkReyCdpO3QHGXjo41rkidkbkdlwBjKm7aC1doVyupP/yQsw9jy75QzDIZMJ/I3GfhGbE1sdLltpM1o5EoxSMDpHtGhLK4zir8BltYcloXzK3KgPTdRbpsZybk/YtCkrrgo0muAj5dnGr4JULTiCaaGpIG4q78gAapcA5RsYlBvYNqgAq1x BvopJyfgVk6/IXo51kZe1bEUgkFvgWx5fkZhJMIPjVM0sbaozIuh/psilJKyxKZ q1yS1JpleojT/KARnKMl7FZGy4VKOlszsvTNPSZpxypqmSUIyBWBOHbNplHiT1Q51sFDMqXKFr1Yiyl5dIpcIC ldmjDgs4Juy pXnluJZLRWKsJRMekOURfJFvgcaAzhdlxCM4pPgE4qx6WP4AvHs1jFL9vgjjSGPp6opLHyhhIBkVRRSK3QXL lWCx/rRnt14yeC9v3Mz o1laNRfqZmdV/xZCzo/TxTFuQ1BimH9aGca 4y4tLpm1KPyOzleeKvwI9PqUBjvvror2GIfxJxyN/g0ZP/AHFMa23QXJP7qM1UyR9ioZfdFFXAf6Ate5RxDONMFLSJ9QMFPQSTAZJVbKAZXbOdNOsrBZZ2BhlUZ3ZVbMc1PkZx59owf5ra/wDYzi6m2gjejn XQ30Wb rHzvyYMM3kc6LPWeL/APsgleo6t/0YyEoysf6qPd6f3LwrMWOaixk9dKyv13F1Yr/MXwVeTuZYqvqOdd0Hv2Fe9SWmA9Tk1GLXuLYs7QRqQfGw9oRxZ1q0EeTZSxkRVBCkd AhZN9emIUa2XfJDUiWhuFguy2M1Xg52rwisgOHmgEo8tj0l9rE8tb3stmHH1n57evk5jX3JfISSTbKxVS17nO9uvEWX2tmZ1O8zNHK2r/BmZXeRl5J ldwK8iDw/4v7gumX3BY19V17mPHA9jdNM7hk310X8goy TuBv8Am4v5KPSR1D8gcs6lyWcl9NCeTJ3T/cxSNXA3LHaLvgp0dPpr8nMktmfVSUlbsWyTOzn8i2TIuL2UcnMVy5Ks7ky6Fck78gCnk29i88nJzLK2wLbZUW q000hnFnvyJ0y0bT0awbGLqK8jfTdRWVb8mHjyST2NdPlqad7IPqeFLP6Y68w/wDB5Gc 2Uo Ueo9ByLN6bj/AO2jyPXp4uuzQ9pMMRZ5WWXUNf8A6Kqf2reykpbY1rBusn9TDSYlHXLLzk3aXBSmVMHhkcVdWF swEVq2ST2IInotbBxYTlG471a9o6nvSOfJFv3NRLask/JxLZfa9ycuzUidKSX2sQy1ckaM9xZmZ01J xOUON7K/qk0djF9xbHG2/gvVMzI7aBndKTMyTubNLqFp6M6UX3E5OXOjdOqdluMjZzDokm 56MuY8JWmFwtLqF8C J 4VOswRtrJeC74Fcbc238ncUm mZfp4a/LMK1 jX9CvNC bJvQz0qqDXwZ/UNxMyL9Ulk2J5slOzuTM09ieXJdlHZ5f3F55b4s423fj/AMlCwcatlXUVpFyjdr4Kjmn/AGLrnyVhFyaGsXTtvdigMYtvY3hxcF49O4jeDHwho9t/C2S khF DJ9e6Zw9Vyvw9jv8Ny7JdvyO u9P39THIvMUGPK8fKHairi/JrZul1xvkTnj7eSNFe3ZOy9hJtJ6OpWrB6HRVp2HcVVFKLDsCISPACDQVcnWO9E4LIqq8nV7FjNX2WS SkX/AGL2jcYqs GZ/ULlmgxTPG0KcSuKO2XmjuONWXlG DOdOlpTLG4szZw 82smP7GZ TFvgzYzS0ftezkns7NUyvcc6zgmJ/cgjl/WbF8TqaXyF5yt/I I1eld4Jsb6NNzFOk1hkvc0eij/Uozi1oYFSf4EOog7ZpYlbkL5YbES1i5sLd68icsMr45N2eJewtPAvYqMWcJLwwTNbJgtcCWTp6e0MCqt8I68TpOhvH09/8AToZn0y jaRFJ4sVI0MWLV14OPFTWtUOYIW6fsCF1jbGMONLZeUEvB2NJEGv6Zk lnVG/10llx45PejyuHJ2Si06N6OdZOlj920WM3 w8mFOmvKMLr19LM1RvyklFP20YXrP61K9UCMyWTe2GwJyT0IKSllS92b3SYPt45C6Uo72jWfD2T45KKGuAMZOlthU/IG2XXB2juPFl1t6BY AiNRmrrksii5RfybjFR7A5IWnqwrOS4FSFUkjpHyQzrTvba BPNia9qNCHgX6hKv3JT6xc6qQCLvka6v8AX 4scr6uOx1K09WGjuQGHCDRMxlpdLPVGr0aqZj9J pG10v60TwrUwQ7k2clh8UE6T9LDtLYlZvrOlg50heWL4NSUVYvJK EaTGZPDoUy4OdGxkitaFssUm9AZ PFSYx9K8UtBIRQWKX03 CVSrgvpxa9gmC /4ovNL6UfwUj9stGVdm6bBObiTLJ9zASk/cBpZuNmp0vV/0KbPPucuzkP0 SXbz4EG uouNJ3vgz/WXcIv8g4TlXJX1KTlgt 4RhxyduWP5PWenzUscG/Y8U2/qL8nq/S5P6UNmsK0urxpqMqAdnwO9Ql9FC1CJH//Z'

console.log('imgur')
function getApi(req,res){
	var imageData = req.body
	var newImageData =Object.keys(imageData)[0][0]
	var newImageData =JSON.stringify(newImageData)
	console.log('.info:',Object.keys(imageData)[0])
	console.log('.stuff:',newImageData)
	console.log('newimage:',newImageData, typeof newImageData)

var options ={
	method: 'POST',
	headers:{
		'content-type': 'text/plain' ,
		'Authorization': 'Client-ID '+ClientID
	},
	url: base_url,
	body: imageData
}
function callback(error, response, body) {
	console.log('in callback')
  if (!error ) {
    var info = JSON.parse(body);
    console.log(response,body)
    res.send(response)
  }
  else if(error){
  	console.log(error)
  }
}

request(options,callback)



}

function postApi(req,res){
	console.log(req.body)
	res.send(req)
}


module.exports={
getApi:getApi,
postApi:postApi
}