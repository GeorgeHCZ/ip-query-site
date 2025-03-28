function queryIP() {
    const ip = document.getElementById('ipInput').value;
    if (!ip) {
        alert("请输入IP地址！");
        return;
    }

    // 使用 ip-api.com 的免费API（支持反向查询）
    fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query&lang=zh-CN`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                document.getElementById('ip').textContent = data.query;
                document.getElementById('location').textContent = `${data.country} ${data.regionName} ${data.city}`;
                document.getElementById('isp').textContent = data.isp;
            } else {
                alert("查询失败：" + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
}

// 支持回车键触发查询
document.getElementById('ipInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') queryIP();
});
