__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "Rull"
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { TiktokDownloader } = require('../lib/tiktokdl.js')
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/anjay");

var {
  igStalk,
  igDownloader
} = require("./../lib/utils/igdown");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');

//var TiktokDownloader = require('./../lib/tiktokdl');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notgcname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcname'
        },
    notgcicon: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcicon'
        },
    notpp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pp'
        },
    notbg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer bg'
        },
    notmemberCount: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer memberCount'
        },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406, 
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 ERROR'
    }
}

/*
Akhir Pesan Error
*/

//router.use(favicon(__path + "/views/favicon.ico"));

const listkey = ["apirey", "APIKEY", "ditofficial"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

router.get('/game/family100', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/family100.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkalimat', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkalimat.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkata', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkata.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakjenaka', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var pertanyaan = JSON.parse(
            fs.readFileSync(__path + '/data/tebakjenaka.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...pertanyaan[~~(Math.random() * pertanyaan.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkimia', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var nama = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkimia.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...nama[~~(Math.random() * nama.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebaklirik', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var question = JSON.parse(
            fs.readFileSync(__path + '/data/tebaklirik.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...question[~~(Math.random() * question.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakchara', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var name = JSON.parse(
            fs.readFileSync(__path + '/data/tebakchara.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...name[~~(Math.random() * name.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebaktebakan', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaktebakan.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakbendera', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var bendera = JSON.parse(
            fs.readFileSync(__path + '/data/tebakbendera.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...bendera[~~(Math.random() * bendera.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE LIMIT 999'    
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
