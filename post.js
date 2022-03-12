// 导入 express 模块
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const path = require('path');

// 导入cors 模块,解决跨域问题
const cors = require('cors');

// 配置解析表单数据的中间件
app.use(express.urlencoded());

// express 托管静态资源
app.use(express.static('./给TGG的快乐打工'));

// 配置 cors 中间件, 从而解决接口跨域的问题
app.use(cors());

// post 接口
app.post('/getname',(req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin','*');

    if( req.body.Id == 'FS00026')
    {
        return res.send({
            info:'success',
            data:{
                    Id: "FS00026",
                    Name: "新刊医林状元寿世保元十卷",
                    Writer:"（清）陳念祖撰",
                    Version: "清光緒二十四（1898）多文會刻本",
                    EnglishName: "The Changsha Fang Song consists of six v",
                    URL: "https://s2.loli.net/2022/03/10/VRti5ImJnMhXDOT.jpg"
            }
        })
    }
               /* {
                    "Id": "FS00060",
                    "Name": "黄氏医书八种",
                    "Writer": "（清）黃伯垂編",
                    "Version": "清道光十六年（1836）刻本",
                    "EnglishName": "Lessons learned in four volumes",
                    "URL": "https://s2.loli.net/2022/03/10/KBisOZXS9w1AQNq.jpg"
                },
                {
                    "Id": "FS00120",
                    "Name": "新锲云林神彀四卷",
                    "Writer": "（唐）孫思邈撰",
                    "Version": "清嘉慶十二年（1807）平津館刻本",
                    "EnglishName": "The Thousand Golden Treasures are to be ",
                    "URL": "https://s2.loli.net/2022/03/10/XzJMtpY7BcdmlqU.jpg"
                },
                {
                    "Id": "FS00646",
                    "Name": "增补万病回春原本八卷",
                    "Writer": "（清）费山寿撰",
                    "Version": "清光緒七年（1881）江石樹德書屋刻本",
                    "EnglishName": "First Aid Fulfillment Recipe Three Volum",
                    "URL": "https://s2.loli.net/2022/03/10/EaKsbn5rqAeDVxo.jpg"
                },
                {
                    "Id": "FS00706",
                    "Name": "医学集成四卷",
                    "Writer": "（清）□□撰",
                    "Version": "清北京順天府刻本",
                    "EnglishName": "Too hospital emergency party volume",
                    "URL": "https://s2.loli.net/2022/03/10/IpmAQXF4KfEqOil.jpg"
                },
                {
                    "Id": "FS00714",
                    "Name": "赛金丹二卷",
                    "Writer": "（日本）丹波元簡輯",
                    "Version": "清聿修堂刻本",
                    "EnglishName": "The spectator party should make up ten v",
                    "URL": "https://s2.loli.net/2022/03/10/dBNFmo4Vlv3TnQH.jpg"
                },
                {
                    "Id": "YY00043",
                    "Name": "医法圆通四卷",
                    "Writer": "（清）陳念祖著",
                    "Version": "清光緒二十九年（1903）蜀東信義書局刻本",
                    "EnglishName": "Jingyue Xinfang Stone four volumes",
                    "URL": "https://s2.loli.net/2022/03/10/YH3OiI1jqLxTd75.jpg"
                },
                {
                    "Id": "ZH00150",
                    "Name": "医学实在易八卷",
                    "Writer": "（明）龔雲林撰",
                    "Version": "嘉慶十四年（1809）文順堂刻本",
                    "EnglishName": "The new issue of medical Lin Zhuangyuan ",
                    "URL": "https://s2.loli.net/2022/03/10/AJRVhXLtv8ir2aU.jpg"
                },
                {
                    "Id": "ZH00607",
                    "Name": "订补明医指掌十卷",
                    "Writer": "（清）黃坤載著",
                    "Version": "清善成堂刻本",
                    "EnglishName": "There are eight kinds of Wong's medical ",
                    "URL": "https://s2.loli.net/2022/03/10/nAsvdTyfq6xupLK.jpg"
                },
                {
                    "Id": "ZH00692",
                    "Name": "医学三字经四卷",
                    "Writer": "（明）龔廷賢撰",
                    "Version": "清聚奎堂刻本",
                    "EnglishName": "Four volumes of the New Yunlin Shrine",
                    "URL": "https://s2.loli.net/2022/03/10/YfmFnAE4hx3qTz9.jpg"
                },
                {
                    "Id": "ZH00708",
                    "Name": "一囊春三卷",
                    "Writer": "（明）龔廷賢撰",
                    "Version": "清南溪書屋刻本",
                    "EnglishName": "Added eight volumes of the original Ten ",
                    "URL": "https://s2.loli.net/2022/03/10/OJqrhv1KLZPCEl2.jpg"
                },
                {
                    "Id": "ZH00730",
                    "Name": "御纂医宗金鉴九十卷",
                    "Writer": "（清）劉仕廉纂",
                    "Version": "清同治十二年（1873）刻本",
                    "EnglishName": "Medical Integration Volume IV",
                    "URL": "https://s2.loli.net/2022/03/10/5ZRox3NX4jpIYEG.jpg"
                },
                {
                    "Id": "ZH00780",
                    "Name": "医学实在易八卷",
                    "Writer": "（清）徐半峰編",
                    "Version": "清道光二十七年（1847）刻本",
                    "EnglishName": "Saidan II Volumes",
                    "URL": "https://s2.loli.net/2022/03/10/jrOiuGqo8PQ6ftU.jpg"
                },
                {
                    "Id": "ZH00816",
                    "Name": "详校医宗必读十卷",
                    "Writer": "（清）鄭壽全編",
                    "Version": "清光緒二十九年（1903）七星會刻本",
                    "EnglishName": "The Medical Science Circle is four volum",
                    "URL": "https://s2.loli.net/2022/03/10/Np8zxDrUaj9sGg2.jpg"
                },
                {
                    "Id": "ZH00852",
                    "Name": "医学心悟六卷",
                    "Writer": "（清）陳念祖撰",
                    "Version": "清光緒二十一年（1895）宏道堂刻本",
                    "EnglishName": "Medicine is easy to eight volumes",
                    "URL": "https://s2.loli.net/2022/03/10/YNhlKvBMsPHfmd6.jpg"
                },
                {
                    "Id": "ZH00874",
                    "Name": "东医宝鉴二十三卷",
                    "Writer": "（清）皇甫中撰",
                    "Version": "清光緒二十一年（1895）學庫山房刻本",
                    "EnglishName": "Ten volumes of the Physician's Finger",
                    "URL": "https://s2.loli.net/2022/03/10/yoUEGBFv2ld9Mnu.jpg"
                },
                {
                    "Id": "ZH00929",
                    "Name": "针灸甲乙经十二卷",
                    "Writer": "（清）陳念祖撰",
                    "Version": "清光緒十三年（1887）倣南雅書屋刻本",
                    "EnglishName": "The Three Characters of Medicine are fou",
                    "URL": "https://s2.loli.net/2022/03/10/1H7YOlkjMh6832o.jpg"
                },
                {
                    "Id": "ZH01086",
                    "Name": "寒疫合编歌括四卷",
                    "Writer": "（清）徐朝宦編",
                    "Version": "清同治五年（1866）刻本",
                    "EnglishName": "Three volumes of spring in one sack",
                    "URL": "https://s2.loli.net/2022/03/10/Xwmh2SrPdCJcU6T.jpg"
                },
                {
                    "Id": "ZH01296",
                    "Name": "麻科活人全书四卷",
                    "Writer": "（清）吳謙編",
                    "Version": "清光緒元年（1875）七曲會刻本",
                    "EnglishName": "Ninety volumes of the Imperial Medicine ",
                    "URL": "https://s2.loli.net/2022/03/10/FBG36xkKdnSO87a.jpg"
                },
                {
                    "Id": "ZH01852",
                    "Name": "血证论八卷",
                    "Writer": "（清）陳念祖撰",
                    "Version": "清光緒戊戌年（1898）多文會刻本",
                    "EnglishName": "Medicine is easy to eight volumes",
                    "URL": "https://s2.loli.net/2022/03/10/uZsMr5OoaLByNxX.jpg"
                },
                {
                    "Id": "ZH01863",
                    "Name": "活幼心法大全九卷",
                    "Writer": "（明）李仕材輯",
                    "Version": "清光緒六年（1880）掃葉山房刻本",
                    "EnglishName": "The Detailed School Medical Sect must re",
                    "URL": "https://s2.loli.net/2022/03/10/3YudHvjCcTJtRDP.jpg"
                },
                {
                    "Id": "ZH01895",
                    "Name": "灵素提要浅注十二卷",
                    "Writer": "（清）程國彭撰",
                    "Version": "清乾隆五十六年（1791）刻本",
                    "EnglishName": "Medical Enlightenment Six Volumes",
                    "URL": "https://s2.loli.net/2022/03/10/sgYyZ6uUt4ir5wz.jpg"
                },
                {
                    "Id": "ZH01957",
                    "Name": "针灸大成卷十卷",
                    "Writer": "（朝鮮）許浚撰",
                    "Version": "清道光十一年（1831）富春堂刻本",
                    "EnglishName": "Twenty-three volumes of the Treasure Boo",
                    "URL": "https://s2.loli.net/2022/03/10/i5olP3a2xBfZMrF.jpg"
                },
                {
                    "Id": "ZH02027",
                    "Name": "笔花医镜四卷",
                    "Writer": "（西晉）皇甫謐撰",
                    "Version": "清光緒十一年（1885）四明存存軒刻本",
                    "EnglishName": "Acupuncture A and B Sutra 12 Volumes",
                    "URL": "https://s2.loli.net/2022/03/10/g2noPRObNI8tkL4.jpg"
                },
                {
                    "Id": "ZH02036",
                    "Name": "删注脉诀规正二卷",
                    "Writer": "（清）王光甸輯",
                    "Version": "清同治二年（1863）樂善公所刻本",
                    "EnglishName": "The Cold Plague co-edited song consists ",
                    "URL": "https://s2.loli.net/2022/03/10/13IfUO7onLPWRtr.jpg"
                },
                {
                    "Id": "ZH02042",
                    "Name": "医门棒喝四卷",
                    "Writer": "（清）謝玉瓊輯",
                    "Version": "清光緒十五年（1889）集義公所刻本",
                    "EnglishName": "The Complete Book of the Living Man of M",
                    "URL": "https://s2.loli.net/2022/03/10/BvJcdkCRA3bUTV9.jpg"
                },
                {
                    "Id": "ZH02053",
                    "Name": "痢证汇㕘十卷",
                    "Writer": "（清）唐宗海撰",
                    "Version": "清光緒三十二年（1906）善成堂刻本",
                    "EnglishName": "Eight volumes of Blood Evidence",
                    "URL": "https://s2.loli.net/2022/03/10/CQW3g5OVzhJK8N7.jpg"
                },
                {
                    "Id": "ZH02066",
                    "Name": "病机沙纂二卷",
                    "Writer": "（明）聶尚恒撰",
                    "Version": "清光緒十四年（1888）務本堂刻本",
                    "EnglishName": "The Nine Volumes of the Law of Living Yo",
                    "URL": "https://s2.loli.net/2022/03/10/9Qc5wB2y4XgWCsS.jpg"
                },
                {
                    "Id": "ZH02072",
                    "Name": "长沙方歌括六卷",
                    "Writer": "（清）陳念祖集注",
                    "Version": "清光緒三十一年（1905）信義書局刻本",
                    "EnglishName": "The Synopsis of The Spirit Essence notes",
                    "URL": "https://s2.loli.net/2022/03/10/LWE3vCbKqwdtRjT.jpg"
                },
                {
                    "Id": "ZH02094",
                    "Name": "经验良方四卷",
                    "Writer": "（明）楊繼洲輯",
                    "Version": "清善成堂刻本",
                    "EnglishName": "Acupuncture is rolled up into ten volume",
                    "URL": "https://s2.loli.net/2022/03/10/akO9LAUEtodZjTI.jpg"
                },
                {
                    "Id": "ZH02136",
                    "Name": "千金宝要六卷",
                    "Writer": "（清）江涵暾撰",
                    "Version": "清同治八年（1869）刻本",
                    "EnglishName": "Pen flower medical mirror four volumes",
                    "URL": "https://s2.loli.net/2022/03/10/2OxBKCzRS9ejLWt.jpg"
                },
                {
                    "Id": "ZH02137",
                    "Name": "急救应验良方三卷",
                    "Writer": "（清）沈鏡刪注",
                    "Version": "清光緒二十年（1894 ）澹雅書局刻本",
                    "EnglishName": "Deletion of the Pulse Recipe Rules Volum",
                    "URL": "https://s2.loli.net/2022/03/10/xt9nlasSQ7o8h5O.jpg"
                },
                {
                    "Id": "ZH02174",
                    "Name": "太医院急救方一卷",
                    "Writer": "（清）章楠撰",
                    "Version": "民國宣統元年（1909）三友益齋石印本",
                    "EnglishName": "The doctor stick drinks four rolls",
                    "URL": "https://s2.loli.net/2022/03/10/1U3ceECGQuRbD2h.jpg"
                },
                {
                    "Id": "ZH02226",
                    "Name": "观聚方要补十卷",
                    "Writer": "（清）吳道源撰",
                    "Version": "清道光十六年（1836）刻本",
                    "EnglishName": "Hong Kong Certificate exchange volume 10",
                    "URL": "https://s2.loli.net/2022/03/10/1NtW4wjy6YQVzL5.jpg"
                },
                {
                    "Id": "ZH02432",
                    "Name": "景岳新方砭四卷",
                    "Writer": "（明）李中梓撰",
                    "Version": "清刻本",
                    "EnglishName": "Sick Machine Sand Roll Ii",
                    "URL": "https://s2.loli.net/2022/03/10/DtmnlsuZT9P5Voz.jpg"
                }
            ],
            "info": "成功"
        }
        }
    ');*/
        
    
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})