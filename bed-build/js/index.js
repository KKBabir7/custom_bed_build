/* Size name for select option*/
const sizeName = {
    feet2: 'Small Single 2ft 6',
    feet26: 'Single 3ft',
    feet4: 'Small Double 4ft',
    feet46: 'Double 4ft 6',
    feet5: 'King Size 5ft',
    feet6: 'Super King size 6ft',
}
const sizeNameB = document.getElementById('sizeNameB')

/* color name for select option*/
const colorName = {
    gray: 'Slate Grey Cotton',
    black: 'Black Cotton',
    blue: 'Midnight Blue Cotton',
    red: 'Red Cotton',
    white: 'White Cotton',
    lime: 'Lime Cotton',
    duck: 'Duck Egg Blue Cotton',
    orchid: 'Orchid Cotton',
	graphite: "Graphite Velvet",
	marine: "Blue Marine Velvet",
	emerald: "Emerald Velvet",
	deggb: "Duck Egg Blue Velvet",
	silver: "Light Silver Velvet",
	silgry: "Silver Grey Cotton",
	cream: "Cream Cotton",
	chocolate: "Chocolate Cotton",
	pink: "Pink Velvet",
	asphalt: "Asphalt Velvet",
	beige: "Beige Velvet",
	mustard: "Mustard Velvet",
	bpvelvet: "Black Velvet",
	plum: "Plum Cotton",
	charcoal: "Charcoal Cotton"
}
const colorNameB = document.getElementById('colorNameB')

/* Sape name for select option*/
const sapeName = {
	no:'No Headboard',
    sapex1: 'Ankara Plain',
    sapex1a: 'Ankara Lined',
    sapex1b: 'Ankara Buttoned',
    sapex2: 'Swanhill  Buttoned',
    sapex2a: 'Swanhill plain',
    sapex2b: 'Swanhill Lined',
    sapex3: 'Cornell Buttoned',
    sapex3a: 'Cornell plain',
    sapex3b: 'Cornell Lined',
    sapex4: 'Dudley Plain',
    sapex4a: 'Dudley Lined',
    sapex4b: 'Dudley Buttoned',
    sapex5: 'Everest Plain',
    sapex5a: 'Everest Lined',
    sapex5b: 'Everest Buttoned',
    sapex6: 'Florence Plain',
    sapex6a: 'Florence Lined',
    sapex6b: 'Florence Buttoned',
    sapex7: 'Victor Plain',
    sapex7a: 'Victor Lined',
    sapex7b: 'Victor Buttoned', 
}
const sapeNameB = document.getElementById('sapeNameB')

/* depth name for select option*/
const depthName = {
    depthx1: '6"',
    depthx2: '10"',
    depthx3: '14"',
}
const depthNameB = document.getElementById('depthNameB')

/* storage or box name for select option*/
const boxName = {
    storagex0: 'No Drawer',
    storagex1: 'End Drawer',
    storagex2: 'End Drawer with 2 Mini Drawers',
    storagex3: '2 Drawer',
    storagex4: '2 Drawers with 2 Mini Drawers',
    storagex5: '2 Drawers with End Drawers',
    storagex6: '2 Drawers Same Side',
    storagex7: '4 Drawers',
    storageOttoman: 'Ottoman'
}
const boxNameB = document.getElementById('boxNameB')


/* for by defult bed build*/
let currentSelectedSize = 'feet2'
let currentSelectedColor = 'gray'
let currentSelectDepth = 'depthx3'
let currentSelectsape = 'sapex1b'
let currentSelectedImage = ''
let currentSelectedstorage="";
let totalPrice = 0 ;
let wasPrice = 0;
let currentSelectedSizeName = ''

/* color modal*/
const colorBedModal = {
    gray: {
       color: 'gray',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205664/2_kwbrfy.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205418/2_ahcg84.webp'

       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684802/4_kjtwpx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684840/4_kzwrqg.webp'

       ],
       
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206399/5_b39ve1.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206431/5_xaizhz.webp'

       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238398/6_mtw7gs.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238196/6_yp1ycv.png'

       ]
   },
    black: {
       color: 'black',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618207009/black_fqheur.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206886/black_quirgp.png'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618686215/black_exswkb.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618686176/black_sft75g.png'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618207091/black_kefv2j.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618207121/black_uzhq2r.png'

       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618247870/black_w1de3s.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618248275/black_jpok9i.png'

       ]
   },
    blue: {
       color: 'blue',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618257383/blue_esuejg.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618257443/blue_kzs7fr.webp'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618686389/blue_jf4n4c.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618686418/blue7_wqj4ba.webp'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618257631/blue_yygcmq.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618257666/blue_gtdd4s.png'
       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618257878/blue_oqjtix.png',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618257954/blue_bmbdqw.png'

       ]
    },
    red: {
       color: 'red',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           
		  /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619435131/ankara_buttoned_3ft_14i11_rvnjdn.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619375115/bedbase_3ft_14i_11_ci2wyk.png'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           
		   /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435458/ankara_buttoned_4ft6_14i11_jfwiw7.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619375532/bedbase_4ft6_14i_11_hlbllu.png'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435509/ankara_buttoned_5ft_14i11_iwiqdd.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619377494/bedbase_5ft_14i_11_zvnyu9.webp'
       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435567/ankara_buttoned_6ft_14i11_owj4v4.png' ,
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619378564/bedbase_6ft_14i_11_eblnvv.png'

       ]
    },
    white: {
       color: 'white',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           
		  /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619476466/ankara_buttoned_3ft_14i14_as1rvp.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476267/bedbase_3ft_14i_14_g3wwkf.png'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           
		   /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476451/ankara_buttoned_4ft6_14i14_x7tpe5.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476281/bedbase_4ft6_14i_14_hrvegr.png'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476436/ankara_buttoned_5ft_14i14_odnbfx.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476298/bedbase_5ft_14i_14_fc7b3s.png'
       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476413/ankara_buttoned_6ft_14i14_kf0n4k.png' ,
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476313/bedbase_6ft_14i_14_ujc6e0.png'

       ]
    },
    lime: {
       color: 'lime',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           
		  /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619898334/ankara_buttoned_3ft_14i6_pbvgbc.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898324/bedbase_3ft_14i_6_djjcsl.png'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           
		   /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898359/ankara_buttoned_4ft6_14i6_nicu23.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898347/bedbase_4ft6_14i_6_afihtc.png'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898388/ankara_buttoned_5ft_14i6_cfy9he.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898375/bedbase_5ft_14i_6_kmjxxc.png'
       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898410/ankara_buttoned_6ft_14i6_azaunp.png' ,
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898402/bedbase_6ft_14i_6_v1ydhx.webp'

       ]
   },
    duck: {
       color: 'duck',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           
		  /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619914893/ankara_buttoned_3ft_14i4_cypaiv.webp',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914876/bedbase_3ft_14i_4_kvd1tk.webp'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           
		   /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914927/ankara_buttoned_4ft6_14i4_yqvcih.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914918/bedbase_4ft6_14i_4_yf1ien.webp'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914977/ankara_buttoned_5ft_14i4_jn1zhd.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914946/bedbase_5ft_14i_4_myb9pn.png'
       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915005/ankara_buttoned_6ft_14i4_wams1y.png' ,
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914994/bedbase_6ft_14i_4_xp2srm.png'

       ]
   },
    orchid: {
       color: 'orchid',
       feet2: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
           
		  /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619971880/ankara_buttoned_3ft_14i8_jtp3at.webp',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971872/bedbase_3ft_14i_8_zwrziu.webp'
       ],
       feet4: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
           
		   /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971903/ankara_buttoned_4ft6_14i8_y3yzfr.png',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971895/bedbase_4ft6_14i_8_shmeaa.png'

       ],
       feet5: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971929/ankara_buttoned_5ft_14i8_xacwsm.webp',
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971915/bedbase_5ft_14i_8_gpbqwn.webp'
       ],
       feet6: [
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
           'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
           /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971955/ankara_buttoned_6ft_14i8_fljfrq.png' ,
           
		  /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971948/bedbase_6ft_14i_8_ujbrlu.png'

       ]
   },
    graphite: {
        color: 'graphite',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619875536/ankara_buttoned_3ft_14i32_1_lteeku.png',		   
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840168/bedbase_3ft_14i_32_hfj8ze.png', 
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876471/ankara_buttoned_4ft6_14i32_bixlgz.webp',		   ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840562/bedbase_4ft6_10i_32_uwn6av.png', 

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877392/ankara_buttoned_5ft_14i32_tuz1uy.webp',		   
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840701/bedbase_5ft_14i_32_zvf3rg.png', 
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878137/ankara_buttoned_6ft_14i32_nwq17z.webp',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840870/bedbase_6ft_14i_32_yifkaz.png',

       ]
    },
	marine: {
       color: 'marine',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921886/ankara_buttoned_3ft_14i34_uq9pdt.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919010/bedbase_3ft_14i_34_ygucye.png'
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922589/ankara_buttoned_4ft6_14i34_l9qv1a.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919243/bedbase_4ft6_14i_34_zfkxbz.png'

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923178/ankara_buttoned_5ft_14i34_hn9fjs.webp',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919304/bedbase_5ft_14i_34_wu50vl.png'
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923739/ankara_buttoned_6ft_14i34_ujosw0.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919389/tome_6ft_14i_34_ie28gx.png'

       ]
    },
	emerald: {
		color: 'emerald',
		feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/ankara_buttoned_3ft_14i35_ppcddv.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619924984/bedbase_3ft_14i_35_vtqvfm.png'
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929385/ankara_buttoned_4ft6_14i35_xegru4.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925108/bedbase_4ft6_14i_35_hi23vj.png'

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930010/ankara_buttoned_5ft_14i35_lvh1ej.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925253/bedbase_5ft_14i_35_mc3vsg.png'
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930831/ankara_buttoned_6ft_14i35_kkjcwa.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925269/bedbase_6ft_14i_35_mlkers.png'

       ]
    },
	deggb: {
        color: 'deggb',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619962396/ankara_buttoned_3ft_14i36_vwn4jt.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949335/bedbase_3ft_14i_36_xuntxa.png'
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963043/ankara_buttoned_4ft6_14i36_awvvzz.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949428/bedbase_4ft6_14i_36_xu63f0.png'

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963703/ankara_buttoned_5ft_14i36_erza3a.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949505/bedbase_5ft_14i_36_iib6ox.png'
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964837/ankara_buttoned_6ft_14i36_wzubny.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949582/bedbase_6ft_14i_36_p91y9l.png'

       ]
    },
    silver: {
        color: 'silver',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/ankara_buttoned_3ft_14i30_f2yx0x.png',		   
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619665861/bedbase_3ft_14i_30_krhmkj.png', 
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013227/ankara_buttoned_4ft6_14i30_rajuz1.webp', 
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754598/bedbase_4ft6_14i_30_vmmd8m.png', 

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799726/ankara_buttoned_5ft_14i30_t1n5pv.png', 
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754747/bedbase_5ft_14i_30_agfk4o.png',		   
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800467/ankara_buttoned_6ft_14i30_szhhoo.png',
        
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754877/bedbase_6ft_14i_30_evjhnr.png',

        ]
    },
    silgry: {
        color: 'silgry',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620047072/ankara_buttoned_3ft_14i29_vddpf8.webp',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047042/bedbase_3ft_14i_29_blh6mk.webp'
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047116/ankara_buttoned_4ft6_14i29_pn3n7d.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047108/bedbase_4ft6_14i_29_chpgwj.png'

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047162/ankara_buttoned_5ft_14i29_kpljdm.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047149/bedbase_5ft_14i_29_zijjcg.png'
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047219/ankara_buttoned_6ft_14i29_zpvbtl.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047199/bedbase_6ft_14i_29_wmg4cy.png'

        ]
    },
    cream: {
        color: 'cream',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620085381/ankara_buttoned_3ft_14i3_he5xyh.webp',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085370/bedbase_3ft_14i_3_gh8kdv.webp'
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085412/ankara_buttoned_4ft6_14i3_zv15ii.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085401/bedbase_4ft6_14i_3_gkxefi.png'

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085436/ankara_buttoned_5ft_14i3_uyt86r.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085425/bedbase_5ft_14i_3_hsqhco.png'
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085463/ankara_buttoned_6ft_14i3_xcwwsx.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085453/bedbase_6ft_14i_3_xsitrt.png'

        ]
    },
    chocolate: {
        color: 'chocolate',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096829/ankara_buttoned_3ft_14i2_bb5wdv.webp',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096787/bedbase_3ft_14i_2_tmi61c.webp'
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096878/ankara_buttoned_4ft6_14i2_va1uhv.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096859/bedbase_4ft6_14i_2_hpgxeb.png'

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096926/ankara_buttoned_5ft_14i2_u51w9d.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096911/bedbase_5ft_14i_2_kkj7kt.png'
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096971/ankara_buttoned_6ft_14i2_u9mwrj.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096959/bedbase_6ft_14i_2_jmnnxf.png'

        ]
    },
	pink: {
        color: 'pink',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/ankara_buttoned_3ft_14i37_mypgqm.png',
        
       /* bed*/  
	  'https://res.cloudinary.com/furniturebuild/image/upload/v1620008703/bedbase_3ft_14i_37_pfklml.webp', 
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972903/ankara_buttoned_4ft6_14i37_fsrilr.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009351/bedbase_4ft6_14i_37_aylwa1.webp', 

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974063/ankara_buttoned_5ft_14i37_pwr7qh.png',
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009598/bedbase_5ft_14i_37_hnplsu.png', 
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974829/ankara_buttoned_6ft_14i37_rt3b9g.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009900/bedbase_6ft_14i_37_ljaqxa.webp', 

    ]
   },
    asphalt: {
        color: 'asphalt',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620019876/ankara_buttoned_3ft_14i31_ibehgm.png',		   
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015727/bedbase_3ft_14i_31_ydtk6z.webp',
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020747/ankara_buttoned_4ft6_14i31_e09dsx.webp', 
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015737/bedbase_4ft6_14i_31_kwo4tt.webp',

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/ankara_buttoned_5ft_14i31_czq2gk.png',		   
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015760/bedbase_5ft_14i_31_fbndi5.webp',
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022466/ankara_buttoned_6ft_14i31_b8pbgd.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015799/bedbase_6ft_14i_31_dg3jj9.png',

       ]
    },
	beige: {
        color: 'beige',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
              'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620038290/ankara_buttoned_3ft_14i38_wvo37p.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037460/bedbase_3ft_14i_38_vrphif.png',
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039019/ankara_buttoned_4ft6_14i38_rgbbgb.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037662/bedbase_4ft6_14i_38_g1ssu7.png',

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039721/ankara_buttoned_5ft_14i38_o7o60u.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037826/bedbase_5ft_14i_38_ljcb9b.png',
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040470/ankara_buttoned_6ft_14i38_bl9qpt.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037896/bedbase_6ft_14i_38_i4kb7q.png',

    ]
   },
    mustard: {
       color: 'mustard',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054095/ankara_buttoned_3ft_14i39_iyt7aa.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095378/bedbase_3ft_14i_33_zli4s4.png',
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054763/ankara_buttoned_4ft6_14i39_htewol.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095498/bedbase_4ft6_14i_33_q6waom.png',

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055471/ankara_buttoned_5ft_14i39_vzwoiq.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095564/bedbase_5ft_14i_33_mh6wpq.png',
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059698/ankara_buttoned_6ft_14i39_zyjnia.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095674/bedbase_6ft_14i_33_qxadzb.png',

    ]
   },
   bpvelvet: {
    color: 'bpvelvet',
    feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095995/ankara_buttoned_3ft_14i33_wgksdl.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095378/bedbase_3ft_14i_33_zli4s4.png',
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096630/ankara_buttoned_4ft6_14i33_lzisc6.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095498/bedbase_4ft6_14i_33_q6waom.png',

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097147/ankara_buttoned_5ft_14i33_bitkhj.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095564/bedbase_5ft_14i_33_mh6wpq.png',
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097831/ankara_buttoned_6ft_14i33_wznkzo.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095674/bedbase_6ft_14i_33_qxadzb.png',

       ]
    },
	plum: {
       color: 'plum',
        feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133114/ankara_buttoned_3ft_14i9_era8rr.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115358/bedbase_3ft_14i_9_fg3eub.png',
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133816/ankara_buttoned_4ft6_14i9_vzwvch.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115410/bedbase_4ft6_14i_9_pb9wzf.png',

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134589/ankara_buttoned_5ft_14i9_skknag.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119809/bedbase_5ft_14i_9_oz9kvk.png',
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135384/ankara_buttoned_6ft_14i9_num39s.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119836/bedbase_6ft_14i_9_r9n4ya.png',

       ]
    },
	charcoal: {
    color: 'charcoal',
    feet2: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618205522/2_idry3x.jpg',
              'https://res.cloudinary.com/furniturebuild/image/upload/v1618205579/2_dtdiju.png',
        
       /* hend*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137831/ankara_buttoned_3ft_14i1_xqfsab.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137024/bedbase_3ft_14i_1_vpyuw1.webp',
    ],
    feet4: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684721/4_fi9cjm.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618684765/4_p43myb.webp',
        
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138533/ankara_buttoned_4ft6_14i1_yu3hrm.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137250/bedbase_4ft6_14i_1_twosr6.png',

    ],
    feet5: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206306/5_szulmx.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618206351/5_niljvz.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139501/ankara_buttoned_5ft_14i1_m5apag.png',
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137322/bedbase_5ft_14i_1_m7ilbq.png',
    ],
    feet6: [
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238270/6_q3aqvk.webp',
        'https://res.cloudinary.com/furniturebuild/image/upload/v1618238351/6_yk6scj.webp',
        /* hend*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159896/ankara_buttoned_6ft_14i1_d1ayr4.png' ,
        
       /* bed*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137396/bedbase_6ft_14i_1_hcytlv.png',

      ]
   }
}























const allsape = {
    gray: {
       feet2: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618316208/spae1_fdu213.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618767923/ankara_lined_3ft_14i13_odcfqe.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618205664/2_kwbrfy.webp',
           
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618330472/swanhill_ezwqcc.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618771178/swanhill_plain_3ft_14i13_ay0chm.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778296/swanhill_line_3ft_14i13_gcnclx.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334705/rgraysape_yrfy0e.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618780127/cornell_plain_3ft_14i13_yooigs.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827306/cornell_lined_3ft_14i13_nvqxq2.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618840254/dudley_plain_3ft_14i13_ghc9ak.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844625/dudley_lined_3ft_14i13_iicocq.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854342/dudley_buttoned_3ft_14i13_ybbfeh.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859685/everest_plain_3ft_14i13_b3mwla.png',
           
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862228/everest_lined_3ft_14i13_emyhif.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863121/everest_buttoned_3ft_14i13_ckzrm8.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914829/florence_plain_3ft_14i13_r5cfcj.webp',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925112/florence_lined_3ft_14i13_go0gdd.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925114/florence_buttoned_3ft_14i13_tcn1th.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932297/victor_plain_3ft_14i13_t53ipu.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932288/victor_lined_3ft_14i13_di1mzy.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932283/victor_buttoned_3ft_14i13_kq73up.png',
           
            
       },
       feet4: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618687477/grayplainsape_pn8uf3.png',
               
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768024/ankara_lined_4ft6_14i13_hxswql.png',
               
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618684802/4_kjtwpx.webp',
               
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618687605/grayplainsapedew1_kg3jyi.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618771693/swanhill_plain_4ft6_14i13_x9vbvh.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778334/swanhill_line_4ft6_14i13_v1r27d.webp',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618687664/grayplainsapereg_uhfhvp.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783694/cornell_plain_4ft6_14i13_psntg5.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827846/cornell_lined_4ft6_14i13_nahybr.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843497/dudley_plain_4ft6_14i13_wm2jrh.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844675/dudley_lined_4ft6_14i13_af5e6d.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854379/dudley_buttoned_4ft6_14i13_qu1ivw.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859711/everest_plain_4ft6_14i13_dkfskk.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862266/everest_lined_4ft6_14i13_fvg3km.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863153/everest_buttoned_4ft6_14i13_fo3lny.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914864/florence_plain_4ft6_14i13_jzark2.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925716/florence_lined_4ft6_14i13_krgbvk.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925714/florence_buttoned_4ft6_14i13_hrvqb1.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932489/victor_plain_4ft6_14i13_i12k9n.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932463/victor_lined_4ft6_14i13_emur7n.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932475/victor_buttoned_4ft6_14i13_ue4q5j.png',
           
       },
       
       feet5: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618329320/sapegray_moa0rd.webp',
               
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768174/ankara_lined_5ft_14i13_pppdau.png',
               
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618206399/5_b39ve1.webp',
               
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618330581/swanhill_gray_g3aqll.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618772097/swanhill_plain_5ft_14i13_sngqrf.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778382/swanhill_line_5ft_14i13_z77lcp.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334751/rgrayysape_cnnahn.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783719/cornell_plain_5ft_14i13_snfzht.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827917/cornell_lined_5ft_14i13_iyorrk.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843535/dudley_plain_5ft_14i13_s0yclq.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844708/dudley_lined_5ft_14i13_poezqs.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854411/dudley_buttoned_5ft_14i13_tujyej.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859736/everest_plain_5ft_14i13_vzv91o.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862288/everest_lined_5ft_14i13_qzi9ua.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863179/everest_buttoned_5ft_14i13_eehwfs.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914927/florence_plain_5ft_14i13_zlmfie.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925833/florence_lined_5ft_14i13_mkjvaz.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925832/florence_buttoned_5ft_14i13_wqpevu.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933323/victor_plain_5ft_14i13_gqph4l.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933318/victor_lined_5ft_14i13_amzv9v.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933297/victor_buttoned_5ft_14i13_ifh34h.png',
           
       },
       feet6: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618329639/sapegray_r1cncu.webp',
               
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768369/ankara_lined_6ft_14i13_kdzcdl.png',
               
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618238398/6_mtw7gs.webp',
               
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618330681/swanhill_gray_exif1c.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618772564/swanhill_plain_6ft_14i13_litejp.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778807/swanhill_line_6ft_14i13_jn8ipd.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334811/rgrayysape_c2x0gy.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783843/cornell_plain_6ft_14i13_seihlq.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618828026/cornell_lined_6ft_14i13_qikzdo.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843750/dudley_plain_6ft_14i13_mlywwt.webp',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844750/dudley_lined_6ft_14i13_r2n09i.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854439/dudley_buttoned_6ft_14i13_osbsfm.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859762/everest_plain_6ft_14i13_jujnra.webp',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862312/everest_lined_6ft_14i13_od2hjz.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863204/everest_buttoned_6ft_14i13_nuoxdw.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914957/florence_plain_6ft_14i13_cq8ylz.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925907/florence_lined_6ft_14i13_yibca8.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925907/florence_buttoned_6ft_14i13_yyfzrz.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933814/victor_plain_6ft_14i13_zymqx0.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933806/victor_lined_6ft_14i13_zgcwlu.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933786/victor_buttoned_6ft_14i13_uqdbfp.png',
           
       }


   },
    black: {
       feet2: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618309850/sape-black_b6qfet.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768977/ankara_lined_3ft_14i0_fgib5y.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618207009/black_fqheur.png',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618333627/black-s_si8jsc.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618771214/swanhill_plain_3ft_14i0_gpvadk.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778285/swanhill_line_3ft_14i0_uhqdy6.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334998/rblack_e2kmp2.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618780125/cornell_plain_3ft_14i0_pcxhuy.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827300/cornell_lined_3ft_14i0_kbldwt.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618839868/dudley_plain_3ft_14i0_ni43gs.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844625/dudley_lined_3ft_14i0_l06bye.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854342/dudley_buttoned_3ft_14i0_ftw2l4.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859685/everest_plain_3ft_14i0_eez9mo.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862228/everest_lined_3ft_14i0_il0isv.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863121/everest_buttoned_3ft_14i0_ajc8zz.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914829/florence_plain_3ft_14i0_xbwsrk.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925117/florence_lined_3ft_14i0_ji2u4a.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925119/florence_buttoned_3ft_14i0_baprwi.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932305/victor_plain_3ft_14i0_rl5p6x.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932289/victor_lined_3ft_14i0_f9opql.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932279/victor_buttoned_3ft_14i0_ye2dkm.png',
           
       },
       feet4: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618687965/blackplainsape_sgo8qr.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768864/ankara_lined_4ft6_14i0_l7anmv.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618686215/black_exswkb.png',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618688000/blackplainsapedew1_bbo5gc.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618771725/swanhill_plain_4ft6_14i0_zuqr09.webp',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778334/swanhill_line_4ft6_14i0_vmacjj.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618688025/blackplainsapereg_jdlh6g.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783691/cornell_plain_4ft6_14i0_fdrina.webp',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827843/cornell_lined_4ft6_14i33_jkjqzb.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843500/dudley_plain_4ft6_14i0_vcreib.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844670/dudley_lined_4ft6_14i0_fzujnm.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854379/dudley_buttoned_4ft6_14i0_j5ksqb.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859711/everest_plain_4ft6_14i0_mnqzag.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862265/everest_lined_4ft6_14i0_ywn0bl.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863153/everest_buttoned_4ft6_14i0_kvnldt.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914866/florence_plain_4ft6_14i0_chcokk.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925710/florence_lined_4ft6_14i0_ofx3ij.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925703/florence_buttoned_4ft6_14i0_v06t1c.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932485/victor_plain_4ft6_14i0_l5f1va.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932486/victor_lined_4ft6_14i0_kox2g1.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932480/victor_buttoned_4ft6_14i0_uxuyss.png',
           
       },
       feet5: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618309892/sape-black_ypmwre.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768760/ankara_lined_5ft_14i0_kabges.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618207091/black_kefv2j.png',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618333695/swanhill_ygwgf2.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618772146/swanhill_plain_5ft_14i0_jozdvo.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778379/swanhill_line_5ft_14i0_sq77xe.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618335022/rblacksape_dnhtpi.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783719/cornell_plain_5ft_14i0_yjdllv.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827909/cornell_lined_5ft_14i0_ifpgry.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843530/dudley_plain_5ft_14i0_dj98ap.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844705/dudley_lined_5ft_14i0_x0u6me.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854410/dudley_buttoned_5ft_14i0_iwhbge.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859736/everest_plain_5ft_14i0_dbgdcv.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862287/everest_lined_5ft_14i0_wgxnfp.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863178/everest_buttoned_5ft_14i0_uu9ik7.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914927/florence_plain_5ft_14i0_ltbyfs.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925840/florence_lined_5ft_14i0_skiqmb.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925830/florence_buttoned_5ft_14i0_rzzyed.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933324/victor_plain_5ft_14i0_otzsc6.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933283/victor_lined_5ft_14i0_qzx3q0.webp',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933832/victor_buttoned_5ft_14i0_vayyzk.png',
           
       },
       feet6: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618309935/sape-black_vgbcyv.png',
               
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618768636/ankara_lined_6ft_14i0_vo99de.png',
               
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618247870/black_w1de3s.png',
               
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618333856/sapeblack_hlzs8m.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618772607/swanhill_plain_6ft_14i0_tdyv9r.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778801/swanhill_line_6ft_14i0_xlpny7.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618335047/rblacksape_hc3dwe.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783839/cornell_plain_6ft_14i0_khmijh.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618828024/cornell_lined_6ft_14i0_anzga5.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843595/dudley_plain_6ft_14i0_rc1g0a.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844748/dudley_lined_6ft_14i0_rsuhls.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854439/dudley_buttoned_6ft_14i0_yade3g.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859762/everest_plain_6ft_14i0_ihkhqn.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862312/everest_lined_6ft_14i0_px4d27.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863203/everest_buttoned_6ft_14i0_p0rli6.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914957/florence_plain_6ft_14i0_ulkpnc.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925904/florence_lined_6ft_14i0_dn5fox.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925890/florence_buttoned_6ft_14i0_nlzzum.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933808/victor_plain_6ft_14i0_votra5.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933792/victor_lined_6ft_14i0_l5lpub.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933778/victor_buttoned_6ft_14i0_whvgww.png',
           
       }


   },
    blue: {
       feet2: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618310183/sape-blue_z89ax2.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618769200/ankara_lined_3ft_14i7_pb3ish.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618257383/blue_esuejg.webp',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334110/sapeblues_q1q7xd.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618771191/swanhill_plain_3ft_14i7_ba4pb9.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778293/swanhill_line_3ft_14i7_obmxin.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618335329/rbluesape_gmuk8l.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618780125/cornell_plain_3ft_14i7_pftk5d.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827302/cornell_lined_3ft_14i7_hefvuv.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618839842/dudley_plain_3ft_14i7_lymfjv.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844628/dudley_lined_3ft_14i7_xbg3ch.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854342/dudley_buttoned_3ft_14i7_lvlygo.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859685/everest_plain_3ft_14i7_yipvoz.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862228/everest_lined_3ft_14i7_hlqkpz.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863121/everest_buttoned_3ft_14i7_vdk2vt.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914827/florence_plain_3ft_14i7_wmt4hd.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925117/florence_lined_3ft_14i7_zjyl6j.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925109/florence_buttoned_3ft_14i7_qnmm1p.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932303/victor_plain_3ft_14i7_vtpmuz.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932285/victor_lined_3ft_14i7_vcetpc.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932285/victor_buttoned_3ft_14i7_ulpebo.png',
           
       },
       feet4: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618688239/blueplainsape_dle6u5.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618769329/ankara_lined_4ft6_14i7_hqfoz5.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618686389/blue_jf4n4c.webp',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618688270/bluelainsapedew1_assop0.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618771707/swanhill_plain_4ft6_14i7_h3wlpe.webp',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778335/swanhill_line_4ft6_14i7_wwrhwc.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618688299/blueplainsapereg_xwm25m.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783693/cornell_plain_4ft6_14i7_suhz3o.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827841/cornell_lined_4ft6_14i7_yncff8.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843501/dudley_plain_4ft6_14i7_vk1f6p.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844670/dudley_lined_4ft6_14i7_gxeepx.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854377/dudley_buttoned_4ft6_14i7_dkodjk.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859711/everest_plain_4ft6_14i7_oqngec.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862265/everest_lined_4ft6_14i7_bh3aj5.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863153/everest_buttoned_4ft6_14i7_cwgc2d.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914863/florence_plain_4ft6_14i7_eyxv6x.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925706/florence_lined_4ft6_14i7_ylg1mc.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925701/florence_buttoned_4ft6_14i7_vy7vfd.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932480/victor_plain_4ft6_14i7_przr9w.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932472/victor_lined_4ft6_14i7_wrbq3c.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618932452/victor_buttoned_4ft6_14i7_rclyac.png',
           
       },
       feet5: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618310146/sape-blue_c8a81z.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618769410/ankara_lined_5ft_14i7_pcnegv.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618257631/blue_yygcmq.png',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334239/bluesapes_k75xfu.png',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618772127/swanhill_plain_5ft_14i7_wbm4it.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778371/swanhill_line_5ft_14i7_qjsjve.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618335363/rbluesape_pxkdvd.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783719/cornell_plain_5ft_14i7_a4lmfu.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827915/cornell_lined_5ft_14i7_vy36zu.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843527/dudley_plain_5ft_14i7_oqda90.webp',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844710/dudley_lined_5ft_14i7_swjdvt.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854411/dudley_buttoned_5ft_14i7_ztqqid.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859736/everest_plain_5ft_14i7_gghfot.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862287/everest_lined_5ft_14i7_rnqnqv.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863178/everest_buttoned_5ft_14i7_ksg5fi.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914926/florence_plain_5ft_14i7_xqdcuh.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925832/florence_lined_5ft_14i7_ypiov3.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925831/florence_buttoned_5ft_14i7_blsldq.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933323/victor_plain_5ft_14i7_fwon1v.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933293/victor_lined_5ft_14i7_zvevhj.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933303/victor_buttoned_5ft_14i7_rvzhms.png',
           
       },
       feet6: {
           sapex1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618310112/sape-blue_zafkzh.png',
           sapex1a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618769554/ankara_lined_6ft_14i7_rp9js5.png',
           sapex1b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618257878/blue_oqjtix.png',
           
           sapex2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618334345/bluesapes_odlmdg.webp',
           sapex2a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618772592/swanhill_plain_6ft_14i7_bktsbi.png',
           sapex2b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618778803/swanhill_line_6ft_14i7_kbsf7d.png',
           
           sapex3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618335386/rbluesape_ngr6e2.png',
           sapex3a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618783843/cornell_plain_6ft_14i7_hm8yir.png',
           sapex3b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618827998/cornell_lined_6ft_14i7_qs8jo5.png',
           sapex4:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618843603/dudley_plain_6ft_14i7_tl4f6w.png',
           sapex4a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618844751/dudley_lined_6ft_14i7_q5nsiy.png',
           sapex4b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618854440/dudley_buttoned_6ft_14i7_hu9tmc.png',
           sapex5:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618859762/everest_plain_6ft_14i7_bmtplt.png',
           sapex5a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618862312/everest_lined_6ft_14i7_q970q0.png',
           sapex5b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618863203/everest_buttoned_6ft_14i7_zu4fr7.png',
           sapex6:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618914963/florence_plain_6ft_14i7_gyjw02.png',
           sapex6a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925906/florence_lined_6ft_14i7_dt8ry8.png',
           sapex6b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618925884/florence_buttoned_6ft_14i7_reizes.png',
           sapex7:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933800/victor_plain_6ft_14i7_agnbju.png',
           sapex7a:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933767/victor_lined_6ft_14i7_fhgltk.png',
           sapex7b:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618933773/victor_buttoned_6ft_14i7_xiegvr.png',
           
       }


   },
    red: {
       feet2: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619436213/ankara_plain_3ft_14i11_ovvnmj.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436213/ankara_lined_3ft_14i11_xpllpk.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435131/ankara_buttoned_3ft_14i11_rvnjdn.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436216/swanhill_buttoned_3ft_14i11_fexijj.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619436217/swanhill_plain_3ft_14i11_wtd2te.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436216/swanhill_line_3ft_14i11_leg8xg.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436212/cornell_buttoned_3ft_14i11_xwtnia.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619436213/cornell_plain_3ft_14i11_jpjhne.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436213/cornell_lined_3ft_14i11_hmuzcb.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619436213/dudley_plain_3ft_14i11_in2eeo.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619436212/dudley_lined_3ft_14i11_dci3uj.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436213/dudley_buttoned_3ft_14i11_c07jwr.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619436216/everest_plain_3ft_14i11_ac91xu.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619436216/everest_lined_3ft_14i11_qijdl0.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619436214/everest_buttoned_3ft_14i11_m7focf.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619436217/florence_plain_3ft_14i11_zecco6.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619436214/florence_lined_3ft_14i11_wzpwok.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436214/florence_buttoned_3ft_14i11_kg3iuc.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619436218/victor_plain_3ft_14i11_k68r3g.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619436218/victor_lined_3ft_14i11_vn2wbk.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619436218/victor_buttoned_3ft_14i11_sdcydz.png',
           
       },
       feet4: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619451630/ankara_plain_4ft6_14i11_qksaer.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451630/ankara_lined_4ft6_14i11_ste0aq.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435458/ankara_buttoned_4ft6_14i11_jfwiw7.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451636/swanhill_buttoned_4ft6_14i11_rs0ylr.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619451635/swanhill_plain_4ft6_14i11_eh8eot.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451635/swanhill_line_4ft6_14i11_v4ptsy.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451637/cornell_buttoned_4ft6_14i11_yqh78m.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619451630/cornell_plain_4ft6_14i11_tmlpfc.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451631/cornell_lined_4ft6_14i11_y9wtwt.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619451633/dudley_plain_4ft6_14i11_dxmxlc.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619451633/dudley_lined_4ft6_14i11_fpjlp8.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451630/dudley_buttoned_4ft6_14i11_vtpsmz.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619451633/everest_plain_4ft6_14i11_wcfjty.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619451632/everest_lined_4ft6_14i11_so2kol.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619451633/everest_buttoned_4ft6_14i11_jhnjzh.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619451639/florence_plain_4ft6_14i11_opgbjq.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619451633/florence_lined_4ft6_14i11_fhffsm.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451632/florence_buttoned_4ft6_14i11_r65kzg.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619451636/victor_plain_4ft6_14i11_bpl44p.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619451637/victor_lined_4ft6_14i11_wtd4ju.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619451635/victor_buttoned_4ft6_14i11_tuctoz.png',
           
       },
       feet5: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619452719/ankara_plain_5ft_14i11_aaimhv.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452718/ankara_lined_5ft_14i11_qdy1as.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435509/ankara_buttoned_5ft_14i11_iwiqdd.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452724/swanhill_buttoned_5ft_14i11_gdxu4i.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619452725/swanhill_plain_5ft_14i11_detqqe.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452726/swanhill_line_5ft_14i11_mrcpvb.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452718/cornell_buttoned_5ft_14i11_pzmbvi.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619452719/cornell_plain_5ft_14i11_nnwkdj.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452718/cornell_lined_5ft_14i11_qaeapp.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619452720/dudley_plain_5ft_14i11_lnf0d4.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619452720/dudley_lined_5ft_14i11_gv55x3.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452720/dudley_buttoned_5ft_14i11_cq3z3p.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619452721/everest_plain_5ft_14i11_igljum.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619452720/everest_lined_5ft_14i11_hmuyua.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619452720/everest_buttoned_5ft_14i11_ogjltc.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619452725/florence_plain_5ft_14i11_uamshl.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619452721/florence_lined_5ft_14i11_exzumf.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452721/florence_buttoned_5ft_14i11_woolqw.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619452723/victor_plain_5ft_14i11_sgwnmb.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619452722/victor_lined_5ft_14i11_e6aone.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619452722/victor_buttoned_5ft_14i11_isuv4b.webp',
           
       },
       feet6: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619453727/ankara_plain_6ft_14i11_frnitd.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453727/ankara_lined_6ft_14i11_oqk9cz.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619435567/ankara_buttoned_6ft_14i11_owj4v4.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453733/swanhill_buttoned_6ft_14i11_utzfd8.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619453735/swanhill_plain_6ft_14i11_bnfeec.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453732/swanhill_line_6ft_14i11_oo2jd8.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453726/cornell_buttoned_6ft_14i11_pyz1cb.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619453726/cornell_plain_6ft_14i11_yxydoe.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453726/cornell_lined_6ft_14i11_swj9df.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619453728/dudley_plain_6ft_14i11_ztgwrr.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619453727/dudley_lined_6ft_14i11_cu50hy.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453730/dudley_buttoned_6ft_14i11_wz8a4b.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619453735/everest_plain_6ft_14i11_rduqvq.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619453729/everest_lined_6ft_14i11_pbfyuh.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619453728/everest_buttoned_6ft_14i11_qubwao.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619453730/florence_plain_6ft_14i11_h8jdm0.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619453729/florence_lined_6ft_14i11_nk56zw.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453729/florence_buttoned_6ft_14i11_hyig11.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619453734/victor_plain_6ft_14i11_fbm3rh.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619453732/victor_lined_6ft_14i11_aazucm.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619453735/victor_buttoned_6ft_14i11_noox5d.png',
           
       }


   },
    white: {
       feet2: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619478130/ankara_plain_3ft_14i14_djgjlc.webp',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478130/ankara_lined_3ft_14i14_nja0vu.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476466/ankara_buttoned_3ft_14i14_as1rvp.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/swanhill_buttoned_3ft_14i14_bw9wl0.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619478136/swanhill_plain_3ft_14i14_mlblew.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478135/swanhill_line_3ft_14i14_mdoawv.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478130/cornell_buttoned_3ft_14i14_kq1gs5.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619478130/cornell_plain_3ft_14i14_rji70n.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478130/cornell_lined_3ft_14i14_u7tyha.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619478131/dudley_plain_3ft_14i14_ecmkyb.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619478131/dudley_lined_3ft_14i14_avkvlh.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478131/dudley_buttoned_3ft_14i14_hqyhed.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619478131/everest_plain_3ft_14i14_r7nwxp.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619478131/everest_lined_3ft_14i14_vkc2ow.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619478131/everest_buttoned_3ft_14i14_gug4pa.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/florence_plain_3ft_14i14_gro1gz.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/florence_lined_3ft_14i14_gbo7po.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/florence_buttoned_3ft_14i14_br6w8v.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/victor_plain_3ft_14i14_ecolmr.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/victor_lined_3ft_14i14_waguql.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619478132/victor_buttoned_3ft_14i14_jcb5qv.png',
           
       },
       feet4: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619479964/ankara_plain_4ft6_14i14_nvk6xe.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479964/ankara_lined_4ft6_14i14_j9iexb.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476451/ankara_buttoned_4ft6_14i14_x7tpe5.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479968/swanhill_buttoned_4ft6_14i14_aeno1s.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619479967/swanhill_plain_4ft6_14i14_x0ralq.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479968/swanhill_line_4ft6_14i14_rndqbl.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479964/cornell_buttoned_4ft6_14i14_btxccx.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619479964/cornell_plain_4ft6_14i14_n9pjb2.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479964/cornell_lined_4ft6_14i14_gyfonm.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619479966/dudley_plain_4ft6_14i14_brrpns.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619479965/dudley_lined_4ft6_14i14_stcose.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479965/dudley_buttoned_4ft6_14i14_pmvy7l.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619479967/everest_plain_4ft6_14i14_rpeezm.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619479966/everest_lined_4ft6_14i14_yhlqf8.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619479971/everest_buttoned_4ft6_14i14_k5japi.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619479966/florence_plain_4ft6_14i14_wefztx.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619479966/florence_lined_4ft6_14i14_gqzeen.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479965/florence_buttoned_4ft6_14i14_j63acp.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619479968/victor_plain_4ft6_14i14_qmtfxz.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619479968/victor_lined_4ft6_14i14_c7fieq.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619479972/victor_buttoned_4ft6_14i14_xojzfe.png',
           
       },
       feet5: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481009/ankara_plain_5ft_14i14_gs0aev.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481010/ankara_lined_5ft_14i14_b7lazd.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476436/ankara_buttoned_5ft_14i14_odnbfx.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481017/swanhill_buttoned_5ft_14i14_p6an2v.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481031/swanhill_plain_5ft_14i14_cgzzn7.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481015/swanhill_line_5ft_14i14_wuvtt0.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481010/cornell_buttoned_5ft_14i14_samiea.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481015/cornell_plain_5ft_14i14_nbgiyi.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481009/cornell_lined_5ft_14i14_lakfrx.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481010/dudley_plain_5ft_14i14_or1zmo.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481010/dudley_lined_5ft_14i14_yaphth.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481011/dudley_buttoned_5ft_14i14_wbjcm9.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481012/everest_plain_5ft_14i14_gv1ph3.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619481016/everest_lined_5ft_14i14_llcdxl.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481016/everest_buttoned_5ft_14i14_d2oruq.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481012/florence_plain_5ft_14i14_mkndkg.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481021/florence_lined_5ft_14i14_bv9ry7.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481011/florence_buttoned_5ft_14i14_b6v2vn.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481019/victor_plain_5ft_14i14_p6wpqy.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481018/victor_lined_5ft_14i14_i3hgea.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481018/victor_buttoned_5ft_14i14_kmvkuu.png',
           
       },
       feet6: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481938/ankara_plain_6ft_14i14_ykgb6w.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481939/ankara_lined_6ft_14i14_jobqru.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476413/ankara_buttoned_6ft_14i14_kf0n4k.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481947/swanhill_buttoned_6ft_14i14_fnmsib.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481942/swanhill_plain_6ft_14i14_suhh9x.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481944/swanhill_line_6ft_14i14_yxuwk2.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481939/cornell_buttoned_6ft_14i14_evx2uv.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481939/cornell_plain_6ft_14i14_emgsgd.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481938/cornell_lined_6ft_14i14_fbihj4.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481939/dudley_plain_6ft_14i14_vrxihd.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481939/dudley_lined_6ft_14i14_rsv7rw.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481938/dudley_buttoned_6ft_14i14_xzae2j.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481940/everest_plain_6ft_14i14_gwxxoz.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619481939/everest_lined_6ft_14i14_idihex.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481940/everest_buttoned_6ft_14i14_m1mgnq.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481940/florence_plain_6ft_14i14_xewzf9.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619481940/florence_lined_6ft_14i14_nijgvw.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481940/florence_buttoned_6ft_14i14_iztdhc.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481941/victor_plain_6ft_14i14_htuzdh.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619481941/victor_lined_6ft_14i14_gv8p0u.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619481941/victor_buttoned_6ft_14i14_y7fvnt.png',
           
       }


   },
    lime: {
       feet2: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899994/ankara_plain_3ft_14i6_hs707m.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899994/ankara_lined_3ft_14i6_ctvqdf.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898334/ankara_buttoned_3ft_14i6_pbvgbc.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899998/swanhill_buttoned_3ft_14i6_uim4pm.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619900000/swanhill_plain_3ft_14i6_ame5fs.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899999/swanhill_line_3ft_14i6_sudmpp.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899994/cornell_buttoned_3ft_14i6_b8rlpp.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899994/cornell_plain_3ft_14i6_mmar6e.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899994/cornell_lined_3ft_14i6_zkzdmy.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619899997/dudley_plain_3ft_14i6_cipql3.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619899995/dudley_lined_3ft_14i6_lxgp5c.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899994/dudley_buttoned_3ft_14i6_bca8vj.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619899996/everest_plain_3ft_14i6_gryeps.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619899998/everest_lined_3ft_14i6_xluri6.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619899996/everest_buttoned_3ft_14i6_p8gnng.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619899998/florence_plain_3ft_14i6_kncycm.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619899996/florence_lined_3ft_14i6_o1ddzh.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899996/florence_buttoned_3ft_14i6_djc8sx.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899998/victor_plain_3ft_14i6_ha4cxb.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899999/victor_lined_3ft_14i6_esyjpm.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899998/victor_buttoned_3ft_14i6_nqbb9z.png',
           
       },
       feet4: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619900677/ankara_plain_4ft6_14i6_flxx7r.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900677/ankara_lined_4ft6_14i6_jyu6iy.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898359/ankara_buttoned_4ft6_14i6_nicu23.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900829/swanhill_buttoned_4ft6_14i6_fhgsm6.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619900688/swanhill_plain_4ft6_14i6_kog8xq.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900687/swanhill_line_4ft6_14i6_v05gpp.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900679/cornell_buttoned_4ft6_14i6_aqq4pa.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619900679/cornell_plain_4ft6_14i6_dn1fij.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900680/cornell_lined_4ft6_14i6_wkfasj.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619900679/dudley_plain_4ft6_14i6_z5s7ch.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619900678/dudley_lined_4ft6_14i6_cnj8tb.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900679/dudley_buttoned_4ft6_14i6_tllqp9.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619900682/everest_plain_4ft6_14i6_um0xi1.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619900685/everest_lined_4ft6_14i6_c6h2ib.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619900681/everest_buttoned_4ft6_14i6_q4cn5c.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619900686/florence_plain_4ft6_14i6_zphot3.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619900683/florence_lined_4ft6_14i6_jkbdzn.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900682/florence_buttoned_4ft6_14i6_sl0c7z.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619900686/victor_plain_4ft6_14i6_nbktgq.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619900686/victor_lined_4ft6_14i6_lgzgs8.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619900684/victor_buttoned_4ft6_14i6_zjvuhz.png',
           
       },
       feet5: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619901417/ankara_plain_5ft_14i6_ouz7q2.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901417/ankara_lined_5ft_14i6_q3nebb.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898388/ankara_buttoned_5ft_14i6_cfy9he.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901424/swanhill_buttoned_5ft_14i6_nnfp7c.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619901423/swanhill_plain_5ft_14i6_jzdpx8.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901424/swanhill_line_5ft_14i6_idbuox.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901417/cornell_buttoned_5ft_14i6_ajisi8.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619901420/cornell_plain_5ft_14i6_u2vlvd.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901420/cornell_lined_5ft_14i6_uf46n0.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619901421/dudley_plain_5ft_14i6_hfug4e.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619901418/dudley_lined_5ft_14i6_fgurkb.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901424/dudley_buttoned_5ft_14i6_p6h8qt.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619901420/everest_plain_5ft_14i6_sjzwoh.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619901421/everest_lined_5ft_14i6_jiomri.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619901419/everest_buttoned_5ft_14i6_clghu2.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619901425/florence_plain_5ft_14i6_aic2sv.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619901421/florence_lined_5ft_14i6_g1xvxs.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901422/florence_buttoned_5ft_14i6_fg9phv.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619901425/victor_plain_5ft_14i6_iscwhn.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619901425/victor_lined_5ft_14i6_jc7fti.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619901425/victor_buttoned_5ft_14i6_vetham.png',
           
       },
       feet6: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619902318/ankara_plain_6ft_14i6_vod5js.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902318/ankara_lined_6ft_14i6_kstjds.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898410/ankara_buttoned_6ft_14i6_azaunp.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902325/swanhill_buttoned_6ft_14i6_clxm5p.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619902331/swanhill_plain_6ft_14i6_lnmb65.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902324/swanhill_line_6ft_14i6_gvqyj5.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902318/cornell_buttoned_6ft_14i6_rprbgh.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619902325/cornell_plain_6ft_14i6_dbufwk.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902319/cornell_lined_6ft_14i6_bj58k7.webp',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619902319/dudley_plain_6ft_14i6_musgfe.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619902319/dudley_lined_6ft_14i6_g8cxpz.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902325/dudley_buttoned_6ft_14i6_sloetw.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619902322/everest_plain_6ft_14i6_hy6r3f.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619902322/everest_lined_6ft_14i6_tngcfb.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619902322/everest_buttoned_6ft_14i6_kmam1b.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619902324/florence_plain_6ft_14i6_s25eiw.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619902322/florence_lined_6ft_14i6_fxokzn.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902321/florence_buttoned_6ft_14i6_u60irt.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619902326/victor_plain_6ft_14i6_lh4lnb.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619902326/victor_lined_6ft_14i6_kwuksk.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619902327/victor_buttoned_6ft_14i6_uckeqx.png',
           
       }


    },
    duck: {
       feet2: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619916624/ankara_plain_3ft_14i4_gkjpdg.webp',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916624/ankara_lined_3ft_14i4_v37m9m.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914893/ankara_buttoned_3ft_14i4_cypaiv.webp',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916629/swanhill_buttoned_3ft_14i4_cq1sum.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619916634/swanhill_plain_3ft_14i4_uunkhp.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916628/swanhill_line_3ft_14i4_od23lr.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916624/cornell_buttoned_3ft_14i4_zcrp9g.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619916624/cornell_plain_3ft_14i4_poh49l.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916624/cornell_lined_3ft_14i4_szk7cz.webp',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619916627/dudley_plain_3ft_14i4_szcucl.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619916628/dudley_lined_3ft_14i4_bg85of.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916624/dudley_buttoned_3ft_14i4_vlgstf.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619916628/everest_plain_3ft_14i4_kjjqrf.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619916627/everest_lined_3ft_14i4_gyfjsx.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619916625/everest_buttoned_3ft_14i4_jy9bpx.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619916627/florence_plain_3ft_14i4_hswk8a.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619916626/florence_lined_3ft_14i4_lvieyg.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916626/florence_buttoned_3ft_14i4_wa4upu.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619916629/victor_plain_3ft_14i4_vputdg.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619916633/victor_lined_3ft_14i4_mwkqhy.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619916634/victor_buttoned_3ft_14i4_n3xat7.png',
           
       },
       feet4: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619917797/ankara_plain_4ft6_14i4_qylwpe.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917798/ankara_lined_4ft6_14i4_wjtkbx.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914927/ankara_buttoned_4ft6_14i4_yqvcih.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917801/swanhill_buttoned_4ft6_14i4_qwkizk.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619917804/swanhill_plain_4ft6_14i4_klqt45.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917801/swanhill_line_4ft6_14i4_ljm6zb.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917797/cornell_buttoned_4ft6_14i4_q0g94k.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619917798/cornell_plain_4ft6_14i4_yrjbyw.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917798/cornell_lined_4ft6_14i4_bkaofr.webp',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619917806/dudley_plain_4ft6_14i4_juwlbg.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619917798/dudley_lined_4ft6_14i4_tpckgv.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917799/dudley_buttoned_4ft6_14i4_ev0w8o.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619917808/everest_plain_4ft6_14i4_vrczu4.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619917799/everest_lined_4ft6_14i4_rkfkjo.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619917801/everest_buttoned_4ft6_14i4_oym01a.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619917805/florence_plain_4ft6_14i4_pg07cb.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619917802/florence_lined_4ft6_14i4_rvr2xv.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917799/florence_buttoned_4ft6_14i4_junxgl.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619917802/victor_plain_4ft6_14i4_kfznnj.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619917803/victor_lined_4ft6_14i4_qoyhpw.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619917803/victor_buttoned_4ft6_14i4_rrxlvq.png',
           
       },
       feet5: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919172/ankara_plain_5ft_14i4_e9agsc.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919172/ankara_lined_5ft_14i4_skwf3m.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914977/ankara_buttoned_5ft_14i4_jn1zhd.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919177/swanhill_buttoned_5ft_14i4_hihsip.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919177/swanhill_plain_5ft_14i4_n8gxfb.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919182/swanhill_line_5ft_14i4_uofbit.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919174/cornell_buttoned_5ft_14i4_fcs6de.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919181/cornell_plain_5ft_14i4_codzup.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919174/cornell_lined_5ft_14i4_swaowo.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619919174/dudley_plain_5ft_14i4_r7bc4t.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619919173/dudley_lined_5ft_14i4_wsk0gh.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919181/dudley_buttoned_5ft_14i4_jbpkww.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619919175/everest_plain_5ft_14i4_akovh6.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619919175/everest_lined_5ft_14i4_dw9scu.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619919174/everest_buttoned_5ft_14i4_z2vahv.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619919176/florence_plain_5ft_14i4_vpzmzj.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619919175/florence_lined_5ft_14i4_qwuo6n.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919177/florence_buttoned_5ft_14i4_t3yols.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919179/victor_plain_5ft_14i4_jfuhmd.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919178/victor_lined_5ft_14i4_hjbpyr.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919181/victor_buttoned_5ft_14i4_rgjtj7.png',
           
       },
       feet6: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920308/ankara_plain_6ft_14i4_aoo2cb.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920308/ankara_lined_6ft_14i4_p7bzx0.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915005/ankara_buttoned_6ft_14i4_wams1y.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920324/swanhill_buttoned_6ft_14i4_rsk40r.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920318/swanhill_plain_6ft_14i4_oekeuo.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920315/swanhill_line_6ft_14i4_ohguwb.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920316/cornell_buttoned_6ft_14i4_q9wuqz.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/cornell_plain_6ft_14i4_kndnft.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920308/cornell_lined_6ft_14i4_u6kj6u.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619920311/dudley_plain_6ft_14i4_rvxnpm.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619920309/dudley_lined_6ft_14i4_hwxqeb.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920320/dudley_buttoned_6ft_14i4_hvm0x4.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619920313/everest_plain_6ft_14i4_pjslis.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619920311/everest_lined_6ft_14i4_dtfqta.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619920311/everest_buttoned_6ft_14i4_voyc9l.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/florence_plain_6ft_14i4_m8gzbm.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619920313/florence_lined_6ft_14i4_g56tip.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920313/florence_buttoned_6ft_14i4_uidswu.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920317/victor_plain_6ft_14i4_jyvheh.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920317/victor_lined_6ft_14i4_rqhivz.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920316/victor_buttoned_6ft_14i4_alndeh.png',
           
       }


   },
    orchid: {
       feet2: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975270/ankara_plain_3ft_14i8_mua238.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975270/ankara_lined_3ft_14i8_cncgqe.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971880/ankara_buttoned_3ft_14i8_jtp3at.webp',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975274/swanhill_buttoned_3ft_14i8_ncyo2k.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975275/swanhill_plain_3ft_14i8_wygrby.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975276/swanhill_line_3ft_14i8_vp3xn0.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975272/cornell_buttoned_3ft_14i8_qaawpe.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975271/cornell_plain_3ft_14i8_erc6tn.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975271/cornell_lined_3ft_14i8_vjvyes.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975272/dudley_plain_3ft_14i8_bibruf.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975271/dudley_lined_3ft_14i8_n49mlw.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975271/dudley_buttoned_3ft_14i8_fciqnx.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975271/everest_plain_3ft_14i8_qdjon8.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619975275/everest_lined_3ft_14i8_t0s74h.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975272/everest_buttoned_3ft_14i8_yqidpk.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975273/florence_plain_3ft_14i8_xefh9c.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975272/florence_lined_3ft_14i8_gdi3w9.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975272/florence_buttoned_3ft_14i8_wbajah.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975276/victor_plain_3ft_14i8_nqrtvd.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975275/victor_lined_3ft_14i8_nbyykk.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975274/victor_buttoned_3ft_14i8_vaybcc.png',
           
       },
       feet4: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975696/ankara_plain_4ft6_14i8_dbwawy.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975695/ankara_lined_4ft6_14i8_j3driu.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971903/ankara_buttoned_4ft6_14i8_y3yzfr.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975710/swanhill_buttoned_4ft6_14i8_c5fzyx.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975702/swanhill_plain_4ft6_14i8_mvuczz.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975702/swanhill_line_4ft6_14i8_dww1bn.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975698/cornell_buttoned_4ft6_14i8_twg1z7.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975701/cornell_plain_4ft6_14i8_uqwq6r.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975695/cornell_lined_4ft6_14i8_hgc4qc.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975696/dudley_plain_4ft6_14i8_nq8jcw.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975696/dudley_lined_4ft6_14i8_qqgs43.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975698/dudley_buttoned_4ft6_14i8_iinjhp.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975699/everest_plain_4ft6_14i8_ogrwhr.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619975697/everest_lined_4ft6_14i8_ag9c5g.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975698/everest_buttoned_4ft6_14i8_lha2bx.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975702/florence_plain_4ft6_14i8_s6kxap.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975699/florence_lined_4ft6_14i8_qn7fmo.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975698/florence_buttoned_4ft6_14i8_j5vney.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975704/victor_plain_4ft6_14i8_p5ct5f.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975702/victor_lined_4ft6_14i8_yulpts.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975700/victor_buttoned_4ft6_14i8_cbjwr0.png',
           
       },
       feet5: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985372/ankara_plain_5ft_14i8_wupqhs.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985369/ankara_lined_5ft_14i8_ecwglm.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971929/ankara_buttoned_5ft_14i8_xacwsm.webp',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985375/swanhill_buttoned_5ft_14i8_ppdvcx.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985380/swanhill_plain_5ft_14i8_jpxyqn.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985373/swanhill_line_5ft_14i8_arsgkn.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985370/cornell_buttoned_5ft_14i8_fdrktq.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985368/cornell_plain_5ft_14i8_me5xea.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985368/cornell_lined_5ft_14i8_m7zuql.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985370/dudley_plain_5ft_14i8_wxsaee.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985370/dudley_lined_5ft_14i8_fvnda6.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985368/dudley_buttoned_5ft_14i8_bt6ee6.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985371/everest_plain_5ft_14i8_itj8iz.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619985372/everest_lined_5ft_14i8_gbjnks.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985370/everest_buttoned_5ft_14i8_krrhbn.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985373/florence_plain_5ft_14i8_kskshx.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985372/florence_lined_5ft_14i8_t6xcmj.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985373/florence_buttoned_5ft_14i8_zjuib5.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985375/victor_plain_5ft_14i8_izy9bo.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985376/victor_lined_5ft_14i8_rfs5za.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985376/victor_buttoned_5ft_14i8_vgltau.png',
           
       },
       feet6: {
           sapex1:
               
			  /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985874/ankara_plain_6ft_14i8_cfri95.png',
           sapex1a:
              /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985874/ankara_lined_6ft_14i8_wapowh.png',
           sapex1b:
               
			  /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971955/ankara_buttoned_6ft_14i8_fljfrq.png',
           
           sapex2:
		      /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985884/swanhill_buttoned_6ft_14i8_fwqfgh.png',
            
           sapex2a:
                /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985887/swanhill_plain_6ft_14i8_gqryz5.png',
			  
           sapex2b:
                /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985887/swanhill_line_6ft_14i8_rplf3d.png',
			  
           
           sapex3:
               /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985876/cornell_buttoned_6ft_14i8_fysrdm.png',
           sapex3a:
               /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985877/cornell_plain_6ft_14i8_dhlvwg.png',
           sapex3b:
               /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985877/cornell_lined_6ft_14i8_npupg4.png',
           sapex4:
               
			  /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985879/dudley_plain_6ft_14i8_szz0je.png',
           sapex4a:
               
			  /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985876/dudley_lined_6ft_14i8_iv5co2.png',
           sapex4b:
               /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985883/dudley_buttoned_6ft_14i8_tzn8fg.png',
           sapex5:
               
			   /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985879/everest_plain_6ft_14i8_mwmvue.png',
           sapex5a:
               
			  /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619985879/everest_lined_6ft_14i8_swu6in.png',
           sapex5b:
               
			  /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985879/everest_buttoned_6ft_14i8_bryr5c.png',
           sapex6:
                /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985886/florence_plain_6ft_14i8_bgcqnh.png',
           sapex6a:
               /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619985881/florence_lined_6ft_14i8_yqs30c.png',
           sapex6b:
              /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985880/florence_buttoned_6ft_14i8_cqnpvu.png',
           sapex7:
               
			  /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985887/victor_plain_6ft_14i8_my75dr.png',
           sapex7a:
              /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619985888/victor_lined_6ft_14i8_j3s9xz.png',
           sapex7b:
               
			  /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619985884/victor_buttoned_6ft_14i8_eumbzy.png',
           
       }


    },
    graphite: {
    feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619875533/ankara_plain_3ft_14i32_ke4ezb.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619875538/ankara_lined_3ft_14i32_lizs3s.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619875536/ankara_buttoned_3ft_14i32_1_lteeku.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619875533/swanhill_buttoned_3ft_14i32_uzwvau.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619875533/swanhill_plain_3ft_14i32_guxbnw.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619875535/swanhill_line_3ft_14i32_bt1zel.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619875539/cornell_buttoned_3ft_14i32_bstenu.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619875537/cornell_plain_3ft_14i32_g9m7ob.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619875538/cornell_lined_3ft_14i32_opmxie.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876127/dudley_plain_3ft_14i32_mvigtz.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876127/dudley_lined_3ft_14i32_b0hiae.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876127/dudley_buttoned_3ft_14i32_hx66ts.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876128/everest_plain_3ft_14i32_qanduz.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619876127/everest_lined_3ft_14i32_prtjam.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876128/everest_buttoned_3ft_14i32_qv50q4.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876128/florence_plain_3ft_14i32_s3mnqd.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876130/florence_lined_3ft_14i32_sjy01p.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876129/florence_buttoned_3ft_14i32_gmg9ns.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876130/victor_plain_3ft_14i32_xweupv.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876130/florence_lined_3ft_14i32_sjy01p.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876126/victor_buttoned_3ft_14i32_dlochk.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876472/ankara_plain_4ft6_14i32_yuhuos.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876473/ankara_lined_4ft6_14i32_sqzxqb.png',
        sapex1b:
            
           /*Ankara Buttoned */ 		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876471/ankara_buttoned_4ft6_14i32_bixlgz.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876475/swanhill_buttoned_4ft6_14i32_d9dpmh.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876472/swanhill_plain_4ft6_14i32_k6wbt0.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876473/swanhill_line_4ft6_14i32_ucgxak.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876477/cornell_buttoned_4ft6_14i32_ilmfcl.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876478/cornell_plain_4ft6_14i32_v4vvhs.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876474/cornell_lined_4ft6_14i32_jma1ci.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876475/dudley_plain_4ft6_14i32_tvz0at.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876475/dudley_lined_4ft6_14i32_wtojkx.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876476/dudley_buttoned_4ft6_14i32_pkwyhk.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876929/everest_plain_4ft6_14i32_ayvg5r.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619876930/everest_lined_4ft6_14i32_hjxzjs.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876929/everest_buttoned_4ft6_14i32_b1yzxe.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876929/florence_plain_4ft6_14i32_qjgas0.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619876930/florence_lined_4ft6_14i32_whfvwz.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876935/florence_buttoned_4ft6_14i32_y7b3tq.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876930/victor_plain_4ft6_14i32_zqttpa.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619876933/victor_lined_4ft6_14i32_ctwhfx.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619876932/victor_buttoned_4ft6_14i32_sxctbb.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619877396/ankara_plain_5ft_14i32_tt9ylt.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877393/ankara_lined_5ft_14i32_ktbqec.png',
        sapex1b:
            
           /*Ankara Buttoned */ 		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877392/ankara_buttoned_5ft_14i32_tuz1uy.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877395/swanhill_buttoned_5ft_14i32_zdvt2s.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619877394/swanhill_plain_5ft_14i32_hcavnk.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877393/swanhill_line_5ft_14i32_bsfgym.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877395/cornell_buttoned_5ft_14i32_utfyhk.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619877394/cornell_plain_5ft_14i32_wgybod.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877397/cornell_lined_5ft_14i32_byqfuz.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877396/dudley_plain_5ft_14i32_dwib42.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877398/dudley_lined_5ft_14i32_esfwwf.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877397/dudley_buttoned_5ft_14i32_ba2c4r.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877761/everest_plain_5ft_14i32_yntwt5.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619877758/everest_lined_5ft_14i32_upsobp.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877759/everest_buttoned_5ft_14i32_gamune.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877760/florence_plain_5ft_14i32_llgtbm.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619877760/florence_lined_5ft_14i32_ifmhsl.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877762/florence_buttoned_5ft_14i32_n0qld2.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619877761/victor_plain_5ft_14i32_lm9em3.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619877761/victor_lined_5ft_14i32_ne5e5l.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619877764/victor_buttoned_5ft_14i32_gun92s.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619878135/ankara_plain_6ft_14i32_ycu7ey.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878136/ankara_lined_6ft_14i32_mz6bfv.png',
        sapex1b:
            
           /*Ankara Buttoned */ 		  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878137/ankara_buttoned_6ft_14i32_nwq17z.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878136/swanhill_buttoned_6ft_14i32_ghf8tl.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619878135/swanhill_plain_6ft_14i32_ghypi1.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878135/swanhill_line_6ft_14i32_zufyxu.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878138/cornell_buttoned_6ft_14i32_cz97sw.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619878137/cornell_plain_6ft_14i32_lwppf9.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878138/cornell_lined_6ft_14i32_s0tcpf.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619878138/dudley_plain_6ft_14i32_g2xp8w.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619878140/dudley_lined_6ft_14i32_jckusn.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619878143/dudley_buttoned_6ft_14i32_tablj1.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619880153/everest_plain_6ft_14i32_b7hsfa.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619880154/everest_lined_6ft_14i32_dy3wqa.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619880152/everest_buttoned_6ft_14i32_hqv5ej.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619880153/florence_lined_6ft_14i32_c64dfw.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619880153/florence_lined_6ft_14i32_c64dfw.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619880151/florence_buttoned_6ft_14i32_ujhelz.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619880152/victor_plain_6ft_14i32_etrhuf.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619880154/victor_lined_6ft_14i32_ukgvdf.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619880154/victor_buttoned_6ft_14i32_lclnfx.png',
        
         }
    },
	marine: {
        feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921886/ankara_plain_3ft_14i34_o0kmnp.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921886/ankara_lined_3ft_14i34_le3lnk.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921886/ankara_buttoned_3ft_14i34_uq9pdt.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921887/swanhill_buttoned_3ft_14i34_foshdn.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921889/swanhill_plain_3ft_14i34_ejxjuw.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921889/swanhill_line_3ft_14i34_abp1dh.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921887/cornell_buttoned_3ft_14i34_oww2ub.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921886/cornell_plain_3ft_14i34_jmerr4.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921889/cornell_lined_3ft_14i34_sob0ti.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619921888/dudley_plain_3ft_14i34_scefsn.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619921890/dudley_lined_3ft_14i34_ubs9qj.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921888/dudley_buttoned_3ft_14i34_gbmh1q.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922168/everest_plain_3ft_14i34_-_Copy_g2elei.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619922168/everest_lined_3ft_14i34_-_Copy_n97vde.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922169/everest_buttoned_3ft_14i34_eahq6e.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922168/florence_plain_3ft_14i34_qqiazr.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922169/florence_lined_3ft_14i34_m18uvh.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922167/florence_buttoned_3ft_14i34_ycijlv.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922170/victor_plain_3ft_14i34_iuebjc.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922171/victor_lined_3ft_14i34_jc46ur.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922171/victor_buttoned_3ft_14i34_esf81e.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922584/ankara_plain_4ft6_14i34_v8lqav.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922588/ankara_lined_4ft6_14i34_wxopwo.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922589/ankara_buttoned_4ft6_14i34_l9qv1a.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922589/swanhill_buttoned_4ft6_14i34_u8khgh.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922587/swanhill_plain_4ft6_14i34_nytg4m.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922588/swanhill_line_4ft6_14i34_bjbttu.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922603/cornell_buttoned_4ft6_14i34_fkygfi.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922585/cornell_plain_4ft6_14i34_qognrg.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922587/cornell_lined_4ft6_14i34_1_zjodc2.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922588/dudley_plain_4ft6_14i34_odvx7y.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922589/dudley_lined_4ft6_14i34_kuxeq6.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922590/dudley_buttoned_4ft6_14i34_f9exem.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922898/everest_plain_4ft6_14i34_vjwkl7.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619922903/everest_lined_4ft6_14i34_scpzxk.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922897/everest_buttoned_4ft6_14i34_isxgux.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922899/florence_plain_4ft6_14i34_cjtrxu.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619922898/florence_lined_4ft6_14i34_a97gea.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922901/florence_buttoned_4ft6_14i34_p4pk5l.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922898/victor_plain_4ft6_14i34_eqwapr.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922899/victor_lined_4ft6_14i34_qhjong.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922902/victor_buttoned_4ft6_14i34_zbuefj.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923181/ankara_plain_5ft_14i34_u5kkue.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923181/ankara_lined_5ft_14i34_fnhdkc.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923178/ankara_buttoned_5ft_14i34_hn9fjs.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923179/swanhill_buttoned_5ft_14i34_yotnzh.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923180/swanhill_plain_5ft_14i34_pts2pj.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923182/swanhill_line_5ft_14i34_rxgdki.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923182/cornell_buttoned_5ft_14i34_xx94pn.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923182/cornell_plain_5ft_14i34_l9spwz.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923181/cornell_lined_5ft_14i34_jzlgb4.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923185/dudley_plain_5ft_14i34_akg7e5.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923186/dudley_lined_5ft_14i34_sxl88t.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923184/dudley_buttoned_5ft_14i34_tef6bg.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923455/everest_plain_5ft_14i34_nxlsjo.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619923453/everest_lined_5ft_14i34_zmkoiq.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923453/everest_buttoned_5ft_14i34_dx6shx.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923455/florence_plain_5ft_14i34_jxifzr.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923454/florence_lined_5ft_14i34_wnievv.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923456/florence_buttoned_5ft_14i34_pvq4cz.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923456/victor_plain_5ft_14i34_tob0c1.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923457/victor_lined_5ft_14i34_nxfs9i.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923460/victor_buttoned_5ft_14i34_nqpa32.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923741/ankara_plain_6ft_14i34_pld5sw.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923740/ankara_lined_6ft_14i34_fi5mhy.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923739/ankara_buttoned_6ft_14i34_ujosw0.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923740/swanhill_buttoned_6ft_14i34_psuplv.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923739/swanhill_plain_6ft_14i34_c3n2eg.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923740/swanhill_line_6ft_14i34_c46t8r.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923743/cornell_buttoned_6ft_14i34_lgrvtb.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619923742/cornell_plain_6ft_14i34_kovxxz.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923743/cornell_lined_6ft_14i34_rvqbr6.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923744/dudley_plain_6ft_14i34_vx71h8.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619923746/dudley_lined_6ft_14i34_ex74m3.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619923747/dudley_buttoned_6ft_14i34_dasebj.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619924128/everest_plain_6ft_14i34_n9uaic.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619924127/everest_lined_6ft_14i34_sffgnu.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619924126/everest_buttoned_6ft_14i34_q5tt5e.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619924127/florence_plain_6ft_14i34_aadnvd.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619924126/florence_lined_6ft_14i34_1_bajmef.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619924130/florence_buttoned_6ft_14i34_kpxutd.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619924129/victor_plain_6ft_14i34_z3jqlu.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619924130/victor_lined_6ft_14i34_c4lsnk.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619924130/victor_buttoned_6ft_14i34_qp2ny7.png',
        
	    }
    },
	emerald: {
        feet2: {
             sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/ankara_plain_3ft_14i35_gforct.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/ankara_lined_3ft_14i35_ywy7ll.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/ankara_buttoned_3ft_14i35_ppcddv.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/swanhill_buttoned_3ft_14i35_ysdstq.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/swanhill_plain_3ft_14i35_mcni48.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928891/swanhill_line_3ft_14i35_dhsmji.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928892/cornell_buttoned_3ft_14i35_ndszvi.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928892/cornell_plain_3ft_14i35_lqaejo.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928892/cornell_lined_3ft_14i35_djubo2.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619928892/dudley_plain_3ft_14i35_yk9wrv.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619928892/dudley_lined_3ft_14i35_tzduan.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928893/dudley_buttoned_3ft_14i35_dmz3lo.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929144/everest_plain_3ft_14i35_feieqp.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619929146/everest_lined_3ft_14i35_x82mcu.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929144/everest_buttoned_3ft_14i35_qozv4a.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929145/florence_plain_3ft_14i35_gkuouf.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929145/florence_lined_3ft_14i35_tybntl.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929145/florence_buttoned_3ft_14i35_cogaqd.webp',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929145/victor_plain_3ft_14i35_lbmiwy.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929145/victor_lined_3ft_14i35_az5rii.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929145/victor_buttoned_3ft_14i35_g7kzd4.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929386/ankara_plain_4ft6_14i35_wtcape.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929385/ankara_lined_4ft6_14i35_ob0fvd.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929385/ankara_buttoned_4ft6_14i35_xegru4.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929384/swanhill_buttoned_4ft6_14i35_woytlo.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929384/swanhill_plain_4ft6_14i35_pq144a.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929384/swanhill_line_4ft6_14i35_u2bp38.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929385/cornell_buttoned_4ft6_14i35_opbfux.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929385/cornell_plain_4ft6_14i35_dwb6wx.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929385/cornell_lined_4ft6_14i35_erdupu.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929386/dudley_plain_4ft6_14i35_wazzr6.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929386/dudley_lined_4ft6_14i35_t6dd6i.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929386/dudley_buttoned_4ft6_14i35_lk2tkf.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929645/everest_plain_4ft6_14i35_czz6ra.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619929646/everest_lined_4ft6_14i35_iftlsp.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929645/everest_buttoned_4ft6_14i35_n3omlc.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929647/florence_plain_4ft6_14i35_r5i0eu.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619929645/florence_lined_4ft6_14i35_ifhyxm.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929645/florence_buttoned_4ft6_14i35_i1mjfv.webp',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929646/victor_plain_4ft6_14i35_wwvo0u.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619929646/victor_lined_4ft6_14i35_wmheik.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619929649/victor_buttoned_4ft6_14i35_cknywd.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930010/ankara_plain_5ft_14i35_ujpneq.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930011/ankara_lined_5ft_14i35_j6nkh8.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930010/ankara_buttoned_5ft_14i35_lvh1ej.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930011/swanhill_buttoned_5ft_14i35_lbbdta.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930012/swanhill_plain_5ft_14i35_bhrwnx.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930011/swanhill_line_5ft_14i35_x25wz9.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930012/cornell_buttoned_5ft_14i35_jajxaw.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930011/cornell_plain_5ft_14i35_opopaj.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930012/cornell_lined_5ft_14i35_cvwypz.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930012/dudley_plain_5ft_14i35_my1t1h.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930012/dudley_lined_5ft_14i35_sey4k6.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930014/dudley_buttoned_5ft_14i35_gwyute.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930272/everest_plain_5ft_14i35_zeqsvq.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619930271/everest_lined_5ft_14i35_mrtsyw.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930270/everest_buttoned_5ft_14i35_alzepc.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930270/florence_plain_5ft_14i35_uewrjc.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930270/florence_lined_5ft_14i35_hrslsd.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930270/florence_buttoned_5ft_14i35_vfkz8x.webp',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930271/victor_plain_5ft_14i35_qh8kaf.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930271/victor_lined_5ft_14i35_efc0f5.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930271/victor_buttoned_5ft_14i35_bii84g.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930831/ankara_plain_6ft_14i35_w6ytsp.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/ankara_lined_6ft_14i35_mm2wba.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930831/ankara_buttoned_6ft_14i35_kkjcwa.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/swanhill_buttoned_6ft_14i35_czvjbe.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/swanhill_plain_6ft_14i35_hthkiu.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930831/swanhill_line_6ft_14i35_bma6r5.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/cornell_buttoned_6ft_14i35_zkabfd.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/cornell_plain_6ft_14i35_cinlnk.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/cornell_lined_6ft_14i35_kchy4k.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930833/dudley_plain_6ft_14i35_ewkjkl.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619930832/dudley_lined_6ft_14i35_jg3ary.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619930833/dudley_buttoned_6ft_14i35_lpiane.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619931123/everest_plain_6ft_14i35_tslazb.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619931121/everest_lined_6ft_14i35_epwwnp.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619931122/everest_buttoned_6ft_14i35_stvjwl.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619931124/florence_plain_6ft_14i35_qjxlvc.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619931123/florence_lined_6ft_14i35_qahgfe.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931122/florence_buttoned_6ft_14i35_w8iusn.webp',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931122/victor_plain_6ft_14i35_khujki.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931123/victor_lined_6ft_14i35_oggql4.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931123/victor_buttoned_6ft_14i35_e1xy5r.png',
        
        }


    },
	deggb: {
        feet2: {
           sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619962396/ankara_plain_3ft_14i36_ugogaz.png',
           sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962395/ankara_lined_3ft_14i36_zutdxj.png',
           sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962396/ankara_buttoned_3ft_14i36_vwn4jt.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962396/swanhill_buttoned_3ft_14i36_tqzoop.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619962397/swanhill_plain_3ft_14i36_w5mgkn.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962396/swanhill_line_3ft_14i36_jhmrsm.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962399/cornell_buttoned_3ft_14i36_zybuna.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619962396/cornell_plain_3ft_14i36_usbiyx.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962398/cornell_lined_3ft_14i36_yey9mu.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619962401/dudley_plain_3ft_14i36_y6naph.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619962399/dudley_lined_3ft_14i36_ohgeyo.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962397/dudley_buttoned_3ft_14i36_rwiavu.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619962677/everest_plain_3ft_14i36_sev0uy.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619962679/everest_lined_3ft_14i36_f75iwy.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619962678/everest_buttoned_3ft_14i36_ksk3cw.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619962680/florence_plain_3ft_14i36_lckdaw.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619962679/florence_lined_3ft_14i36_hdmzot.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962683/florence_buttoned_3ft_14i36_zhq2f6.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619962682/victor_plain_3ft_14i36_cznjca.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619962682/victor_lined_3ft_14i36_dkjyli.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619962680/victor_buttoned_3ft_14i36_vstodj.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963043/ankara_plain_4ft6_14i36_hwdcnw.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963044/ankara_lined_4ft6_14i36_hedlso.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963043/ankara_buttoned_4ft6_14i36_awvvzz.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963045/swanhill_buttoned_4ft6_14i36_syibgs.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963044/swanhill_plain_4ft6_14i36_xxamj4.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963047/swanhill_line_4ft6_14i36_ioh6yf.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963047/cornell_buttoned_4ft6_14i36_cbfn55.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963045/cornell_plain_4ft6_14i36_jp0qnv.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963046/cornell_lined_4ft6_14i36_kvvxsk.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963047/dudley_plain_4ft6_14i36_zzi1a5.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963050/dudley_lined_4ft6_14i36_bcorw2.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963048/dudley_buttoned_4ft6_14i36_yxkgtv.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963389/everest_plain_4ft6_14i36_rtmy1d.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619963392/everest_lined_4ft6_14i36_crxxyk.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963394/everest_buttoned_4ft6_14i36_euqy3t.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963393/florence_plain_4ft6_14i36_yckved.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963395/florence_lined_4ft6_14i36_r7cwis.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963394/florence_buttoned_4ft6_14i36_qzak7p.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963395/victor_plain_4ft6_14i36_j9b5ei.webp',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963395/victor_lined_4ft6_14i36_mh0fdj.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963395/victor_buttoned_4ft6_14i36_j3sgdu.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963702/ankara_plain_5ft_14i36_aogfpo.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963703/ankara_lined_5ft_14i36_vtlznu.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963703/ankara_buttoned_5ft_14i36_erza3a.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963709/swanhill_buttoned_5ft_14i36_jka59h.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963701/swanhill_plain_5ft_14i36_kdpp1c.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963702/swanhill_line_5ft_14i36_lljdrn.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963707/cornell_buttoned_5ft_14i36_ol8tku.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619963703/cornell_plain_5ft_14i36_p2xjlk.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963703/cornell_lined_5ft_14i36_jap2xe.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963707/dudley_plain_5ft_14i36_m29bwx.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619963706/dudley_lined_5ft_14i36_gp8nl4.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619963705/dudley_buttoned_5ft_14i36_d2yrhd.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619964166/everest_plain_5ft_14i36_w2qdbz.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619964171/everest_lined_5ft_14i36_c8d4rm.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619964169/everest_buttoned_5ft_14i36_gpbrlu.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619964169/florence_plain_5ft_14i36_k0l6rf.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619964166/florence_lined_5ft_14i36_fsw47g.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964167/florence_buttoned_5ft_14i36_slopl6.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619964169/victor_plain_5ft_14i36_f4nu1l.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964169/victor_lined_5ft_14i36_y6sbdo.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619964171/victor_buttoned_5ft_14i36_p2q1tg.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619964834/ankara_plain_6ft_14i36_qcuz1r.webp',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964836/ankara_lined_6ft_14i36_m9f434.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964837/ankara_buttoned_6ft_14i36_wzubny.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964834/swanhill_buttoned_6ft_14i36_mwdyeq.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619964837/swanhill_plain_6ft_14i36_cq35p6.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964837/swanhill_line_6ft_14i36_azdrbd.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964838/cornell_buttoned_6ft_14i36_nduiu2.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619964836/cornell_plain_6ft_14i36_ok3pgw.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964836/cornell_lined_6ft_14i36_xay5ig.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619964839/dudley_plain_6ft_14i36_h24zfp.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619964839/dudley_lined_6ft_14i36_oinh84.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619964841/dudley_buttoned_6ft_14i36_td2yjc.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619965151/everest_plain_6ft_14i36_kn5pao.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619965158/everest_lined_6ft_14i36_pxpeci.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619965155/everest_buttoned_6ft_14i36_zwr8wg.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619965151/florence_plain_6ft_14i36_vikqrp.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619965150/florence_lined_6ft_14i36_uzkr1w.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619965158/florence_buttoned_6ft_14i36_yeozww.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619965151/florence_plain_6ft_14i36_vikqrp.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619965154/victor_lined_6ft_14i36_xoaqu5.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619965154/victor_buttoned_6ft_14i36_bsvej5.png',
        
        }


    },
	silver: {
        feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/ankara_plain_3ft_14i30_okbfma.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/ankara_lined_3ft_14i30_w1jhe3.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/ankara_buttoned_3ft_14i30_f2yx0x.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/swanhill_buttoned_3ft_14i30_vhn3l5.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/swanhill_plain_3ft_14i30_repr0s.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/swanhill_line_3ft_14i30_bawqxo.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/cornell_buttoned_3ft_14i30_yvvzxm.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/cornell_plain_3ft_14i30_qqikdr.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012209/cornell_lined_3ft_14i30_qjipi1.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/dudley_plain_3ft_14i30_lawao6.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/dudley_lined_3ft_14i30_ggbrrl.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/dudley_buttoned_3ft_14i30_xeait4.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/everest_plain_3ft_14i30_w2ppfu.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/everest_lined_3ft_14i30_zzaaoi.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/everest_buttoned_3ft_14i30_joh16g.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/florence_plain_3ft_14i30_sjqh4t.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/florence_lined_3ft_14i30_h3u1dp.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012210/florence_buttoned_3ft_14i30_zmafes.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/victor_plain_3ft_14i30_meg8x1.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/victor_lined_3ft_14i30_tducmb.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012211/victor_buttoned_3ft_14i30_bwlrxg.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620013227/ankara_plain_4ft6_14i30_suyjzh.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013228/ankara_lined_4ft6_14i30_uebtr1.png',
        sapex1b:
            
           /*Ankara Buttoned */ 		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620013227/ankara_buttoned_4ft6_14i30_rajuz1.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013232/swanhill_buttoned_4ft6_14i30_yo4ibk.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620013232/swanhill_plain_4ft6_14i30_vmctyw.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013230/swanhill_line_4ft6_14i30_h6gmlz.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619765040/aeozfgllkhdumjjvmbdi.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620013228/cornell_plain_4ft6_14i30_np7yk2.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013228/cornell_lined_4ft6_14i30_mpdjyl.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620013228/dudley_plain_4ft6_14i30_donh7s.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620013228/dudley_lined_4ft6_14i30_a0agtr.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013229/dudley_buttoned_4ft6_14i30_l4hdc8.png',
        sapex5:
            
            /*Everest plain */   ' https://res.cloudinary.com/furniturebuild/image/upload/v1620013231/everest_plain_4ft6_14i30_ocexqa.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620013230/everest_lined_4ft6_14i30_y3xxdv.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620013231/everest_buttoned_4ft6_14i30_swhkof.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620013230/florence_plain_4ft6_14i30_frpck1.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620013229/florence_lined_4ft6_14i30_mzp1yp.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013229/florence_buttoned_4ft6_14i30_xweujz.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620013232/victor_plain_4ft6_14i30_ydzwmv.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620013231/victor_lined_4ft6_14i30_za8wxs.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620013231/victor_buttoned_4ft6_14i30_gl8a1i.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619799727/ankara_plain_5ft_14i30_dk3cnh.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799727/ankara_lined_5ft_14i30_dxuf5n.png',
        sapex1b:
            
           /*Ankara Buttoned */  		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619799726/ankara_buttoned_5ft_14i30_t1n5pv.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799729/swanhill_buttoned_5ft_14i30_er3r3f.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619799726/swanhill_plain_5ft_14i30_dwwjdr.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799728/swanhill_line_5ft_14i30_xftsvi.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799723/cornell_buttoned_5ft_14i30_ahbsn0.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619799721/cornell_plain_5ft_14i30_o3idjy.webp',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799724/cornell_lined_5ft_14i30_nm2pjs.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619799724/dudley_plain_5ft_14i30_oi9ami.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619799724/dudley_lined_5ft_14i30_n5wuh9.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619799724/dudley_buttoned_5ft_14i30_gclbai.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619799724/everest_plain_5ft_14i30_bltncj.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619799728/everest_lined_5ft_14i30_rvhpcv.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619799726/everest_buttoned_5ft_14i30_irywul.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800184/florence_plain_5ft_14i30_okivkv.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800185/florence_lined_5ft_14i30_nmhspp.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800187/florence_buttoned_5ft_14i30_svlg8i.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800188/victor_plain_5ft_14i30_qmzbpq.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800189/victor_lined_5ft_14i30_nsr0fi.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800188/victor_buttoned_5ft_14i30_ettgnx.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800462/ankara_plain_6ft_14i30_rnn7ej.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800465/ankara_lined_6ft_14i30_lci3mh.png',
        sapex1b:
            
           /*Ankara Buttoned */  		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800467/ankara_buttoned_6ft_14i30_szhhoo.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800465/swanhill_buttoned_6ft_14i30_eaunkk.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800466/swanhill_plain_6ft_14i30_x8fivn.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800466/swanhill_line_6ft_14i30_qstmpe.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800470/cornell_buttoned_6ft_14i30_1_moy2pz.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800468/cornell_buttoned_6ft_14i30_d1bibw.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800467/cornell_lined_6ft_14i30_bhejme.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800812/dudley_plain_6ft_14i30_olgye2.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800811/dudley_lined_6ft_14i30_q1fqk6.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800814/dudley_buttoned_6ft_14i30_vfixvh.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800813/everest_plain_6ft_14i30_kbi7uo.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619800812/everest_lined_6ft_14i30_wulmhh.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800811/everest_buttoned_6ft_14i30_mxz2v9.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800813/florence_plain_6ft_14i30_zvlntp.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619800815/florence_lined_6ft_14i30_yku2zd.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800815/florence_buttoned_6ft_14i30_zlkpqs.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800814/victor_plain_6ft_14i30_omidq7.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619800815/victor_lined_6ft_14i30_qymutu.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619800815/victor_buttoned_6ft_14i30_jnwkhf.png',
        
        }
    },
    silgry: {
        feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620057896/ankara_plain_3ft_14i29_vjrhyh.webp',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057896/ankara_lined_3ft_14i29_dri0ck.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047072/ankara_buttoned_3ft_14i29_vddpf8.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057899/swanhill_buttoned_3ft_14i29_t9evow.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620057898/swanhill_plain_3ft_14i29_ca8yxt.webp',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057898/swanhill_line_3ft_14i29_nepakg.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057897/cornell_buttoned_3ft_14i29_dacvq2.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620057896/cornell_plain_3ft_14i29_gxenrq.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057896/cornell_lined_3ft_14i29_mlg5zu.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620057897/dudley_plain_3ft_14i29_fwasf7.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620057897/dudley_lined_3ft_14i29_wihkco.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057896/dudley_buttoned_3ft_14i29_iangbz.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620057897/everest_plain_3ft_14i29_h1a0xx.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620057897/everest_lined_3ft_14i29_otievs.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058135/everest_buttoned_3ft_14i29_rh4bgp.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620057898/florence_plain_3ft_14i29_mfxlfr.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620057898/florence_lined_3ft_14i29_l4yfqo.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057897/florence_buttoned_3ft_14i29_j857mt.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620057900/victor_plain_3ft_14i29_gwhjbs.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620057900/victor_lined_3ft_14i29_l8k5m9.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620057898/victor_buttoned_3ft_14i29_lm2oqh.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058366/ankara_plain_4ft6_14i29_pv5ndl.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058363/ankara_lined_4ft6_14i29_oyhhyb.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047116/ankara_buttoned_4ft6_14i29_pn3n7d.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058369/swanhill_buttoned_4ft6_14i29_f4b9yk.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058370/swanhill_plain_4ft6_14i29_lmiduh.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058372/swanhill_line_4ft6_14i29_motljm.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058365/cornell_buttoned_4ft6_14i29_cppb6e.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058365/cornell_plain_4ft6_14i29_yiddjh.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058365/cornell_lined_4ft6_14i29_dm01jl.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058366/dudley_plain_4ft6_14i29_xsvuym.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058364/dudley_lined_4ft6_14i29_rvpw7f.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058365/dudley_buttoned_4ft6_14i29_bkrfgp.png',
        sapex5:
            
            /*Everest plain */   ' https://res.cloudinary.com/furniturebuild/image/upload/v1620058366/everest_plain_4ft6_14i29_p9ta9y.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620058366/everest_lined_4ft6_14i29_fcbtbe.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058366/everest_buttoned_4ft6_14i29_wka0o1.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058367/florence_plain_4ft6_14i29_ptps0p.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058367/florence_lined_4ft6_14i29_pnwpm5.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058367/florence_buttoned_4ft6_14i29_invxb6.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058368/victor_plain_4ft6_14i29_bdh9y2.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058369/victor_lined_4ft6_14i29_chlkkc.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058367/victor_buttoned_4ft6_14i29_kzoajc.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058663/ankara_plain_5ft_14i29_aosgsc.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058663/ankara_lined_5ft_14i29_jtxtcg.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047162/ankara_buttoned_5ft_14i29_kpljdm.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058666/swanhill_buttoned_5ft_14i29_ned98u.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058668/swanhill_plain_5ft_14i29_q8w0pm.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058666/swanhill_line_5ft_14i29_mvthfm.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058664/cornell_buttoned_5ft_14i29_k235xo.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058662/cornell_plain_5ft_14i29_hgdbrn.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058665/cornell_lined_5ft_14i29_vxuei0.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058664/dudley_plain_5ft_14i29_wicqwj.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058663/dudley_lined_5ft_14i29_fnbmqy.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058664/dudley_buttoned_5ft_14i29_ow012o.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058665/everest_plain_5ft_14i29_ijuycv.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620058664/everest_lined_5ft_14i29_y2nxrf.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058664/everest_buttoned_5ft_14i29_tzn9cw.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058668/florence_plain_5ft_14i29_q8dxq6.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620058668/florence_lined_5ft_14i29_atmzfg.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058666/florence_buttoned_5ft_14i29_ne7c5z.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058668/victor_plain_5ft_14i29_i2kt9k.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620058667/victor_lined_5ft_14i29_vlhpgy.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620058668/victor_buttoned_5ft_14i29_dgzbyf.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059089/ankara_plain_6ft_14i29_je3zlp.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059090/ankara_lined_6ft_14i29_qognmw.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047219/ankara_buttoned_6ft_14i29_zpvbtl.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059100/swanhill_buttoned_6ft_14i29_nlu4lp.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059104/swanhill_plain_6ft_14i29_unl81l.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059105/swanhill_line_6ft_14i29_xv0yqj.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059090/cornell_buttoned_6ft_14i29_nvnhey.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059091/cornell_plain_6ft_14i29_scu0hj.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059090/cornell_lined_6ft_14i29_yucshr.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059095/dudley_plain_6ft_14i29_v6qvjh.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059096/dudley_lined_6ft_14i29_natkej.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059092/dudley_buttoned_6ft_14i29_xgpejn.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059097/everest_plain_6ft_14i29_dvxrjn.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620059095/everest_lined_6ft_14i29_r9tjlj.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059094/everest_buttoned_6ft_14i29_gtch3f.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059102/florence_plain_6ft_14i29_vs45fv.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059097/florence_lined_6ft_14i29_huj3fo.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059099/florence_buttoned_6ft_14i29_kt4ssf.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059103/victor_plain_6ft_14i29_uzumdq.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059103/victor_lined_6ft_14i29_s1dtpw.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059100/victor_buttoned_6ft_14i29_padnrt.png',
        
        }
    },
	cream: {
        feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620085811/ankara_plain_3ft_14i3_o96ube.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085811/ankara_lined_3ft_14i3_daulbc.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085381/ankara_buttoned_3ft_14i3_he5xyh.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085814/swanhill_buttoned_3ft_14i3_xnuk9l.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620085813/swanhill_plain_3ft_14i3_bpb1or.webp',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085817/swanhill_line_3ft_14i3_snzcaw.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085812/cornell_buttoned_3ft_14i3_znzau3.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620085811/cornell_plain_3ft_14i3_qaqyhr.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085811/cornell_lined_3ft_14i3_bzu6uh.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620085812/dudley_plain_3ft_14i3_bu7e5j.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620085812/dudley_lined_3ft_14i3_mewle2.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085811/dudley_buttoned_3ft_14i3_watyo9.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620085812/everest_plain_3ft_14i3_bzhmcf.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620085812/everest_lined_3ft_14i3_ooxjwl.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620085812/everest_buttoned_3ft_14i3_lljej2.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620085813/florence_plain_3ft_14i3_pun8rp.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620085813/florence_lined_3ft_14i3_hohhcu.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085814/florence_buttoned_3ft_14i3_jgipk0.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620085814/victor_plain_3ft_14i3_aonrrh.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085814/victor_lined_3ft_14i3_qtpnu4.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620085813/victor_buttoned_3ft_14i3_hx2fch.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086137/ankara_plain_4ft6_14i3_gvrm3t.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086137/ankara_lined_4ft6_14i3_puivgt.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085412/ankara_buttoned_4ft6_14i3_zv15ii.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086140/swanhill_buttoned_4ft6_14i3_aifqe5.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086141/swanhill_plain_4ft6_14i3_rygnpg.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086147/swanhill_line_4ft6_14i3_egxk22.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086137/cornell_buttoned_4ft6_14i3_oxg8fv.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086137/cornell_plain_4ft6_14i3_iepy8s.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086137/cornell_lined_4ft6_14i3_sqblea.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086138/dudley_plain_4ft6_14i3_ot4sh9.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086138/dudley_lined_4ft6_14i3_qkre3w.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086137/dudley_buttoned_4ft6_14i3_evuaxz.png',
        sapex5:
            
            /*Everest plain */   ' https://res.cloudinary.com/furniturebuild/image/upload/v1620086140/everest_plain_4ft6_14i3_kf47xf.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620086140/everest_lined_4ft6_14i3_tgpayr.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086138/everest_buttoned_4ft6_14i3_uclabo.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086140/florence_plain_4ft6_14i3_ealuti.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086139/florence_lined_4ft6_14i3_dx4fju.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086147/florence_buttoned_4ft6_14i3_afcqru.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086142/victor_plain_4ft6_14i3_hhymmx.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086141/victor_lined_4ft6_14i3_ccnauc.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086142/victor_buttoned_4ft6_14i3_nn6el1.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086523/ankara_plain_5ft_14i3_bbfgzu.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086523/ankara_lined_5ft_14i3_h2v3fd.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085436/ankara_buttoned_5ft_14i3_uyt86r.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086529/swanhill_buttoned_5ft_14i3_zkad4a.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086526/swanhill_plain_5ft_14i3_bifntj.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086529/swanhill_line_5ft_14i3_elkhkf.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086523/cornell_buttoned_5ft_14i3_ylmoba.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086524/cornell_plain_5ft_14i3_rqna3i.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086523/cornell_lined_5ft_14i3_mhjimw.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086524/dudley_plain_5ft_14i3_a4milb.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086524/dudley_lined_5ft_14i3_ojmlu7.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086523/dudley_buttoned_5ft_14i3_y8tbus.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086525/everest_plain_5ft_14i3_ssr156.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620086524/everest_lined_5ft_14i3_ffyg6m.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086524/everest_buttoned_5ft_14i3_kchjp4.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086530/florence_plain_5ft_14i3_vax4hk.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086527/florence_lined_5ft_14i3_ryzmgx.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086525/florence_buttoned_5ft_14i3_azwxfw.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086528/victor_plain_5ft_14i3_g92vke.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086527/victor_lined_5ft_14i3_xjyumt.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086527/victor_buttoned_5ft_14i3_njy4xw.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086935/ankara_plain_6ft_14i3_lz4tav.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086935/ankara_lined_6ft_14i3_awjvau.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085463/ankara_buttoned_6ft_14i3_xcwwsx.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086941/swanhill_buttoned_6ft_14i3_ycjpfb.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086943/swanhill_plain_6ft_14i3_nlzzuw.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086951/swanhill_line_6ft_14i3_r4znbk.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086936/cornell_buttoned_6ft_14i3_ktvmip.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086936/cornell_plain_6ft_14i3_riktgi.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086936/cornell_lined_6ft_14i3_myahyl.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086936/dudley_plain_6ft_14i3_t2fa1d.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086936/dudley_lined_6ft_14i3_zetk0n.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086940/dudley_buttoned_6ft_14i3_vukrnv.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086938/everest_plain_6ft_14i3_k93mkf.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620086941/everest_lined_6ft_14i3_ohogcc.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086936/everest_buttoned_6ft_14i3_j1uco7.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086938/florence_plain_6ft_14i3_b7pbsn.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620086938/florence_lined_6ft_14i3_wovjdd.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086938/florence_buttoned_6ft_14i3_qb8tqa.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086942/victor_plain_6ft_14i3_xiidbh.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620086943/victor_lined_6ft_14i3_o5msvy.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620086945/victor_buttoned_6ft_14i3_ca25uu.png',
        
        }
    },
    chocolate:{
        feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097667/ankara_plain_3ft_14i2_nivod6.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097667/ankara_lined_3ft_14i2_ez1ysl.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096829/ankara_buttoned_3ft_14i2_bb5wdv.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097670/swanhill_buttoned_3ft_14i2_zqluob.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097669/swanhill_plain_3ft_14i2_araay4.webp',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097673/swanhill_line_3ft_14i2_cbdab6.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097667/cornell_buttoned_3ft_14i2_syvo30.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/cornell_plain_3ft_14i2_jvue3k.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097667/cornell_lined_3ft_14i2_wd1uaw.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/dudley_plain_3ft_14i2_xa3ekq.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097667/dudley_lined_3ft_14i2_sqz3ss.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097667/dudley_buttoned_3ft_14i2_fugq92.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097670/everest_plain_3ft_14i2_xvlmwr.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/everest_lined_3ft_14i2_zzxtvh.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/everest_buttoned_3ft_14i2_phnmrh.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/florence_plain_3ft_14i2_nix8sf.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/florence_lined_3ft_14i2_z44rfv.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097668/florence_buttoned_3ft_14i2_b7mvw7.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097670/victor_plain_3ft_14i2_mq933e.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097671/victor_lined_3ft_14i2_y7yh38.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097670/victor_buttoned_3ft_14i2_mrnwpy.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098622/ankara_plain_4ft6_14i2_zu04hq.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098622/ankara_lined_4ft6_14i2_q7d8u2.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096878/ankara_buttoned_4ft6_14i2_va1uhv.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098626/swanhill_buttoned_4ft6_14i2_jvyrad.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098629/swanhill_plain_4ft6_14i2_hvzfq7.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098628/swanhill_line_4ft6_14i2_dw8il4.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098622/cornell_buttoned_4ft6_14i2_yhvjpl.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098622/cornell_plain_4ft6_14i2_tsurik.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098622/cornell_lined_4ft6_14i2_nljhx1.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098623/dudley_plain_4ft6_14i2_mgjexr.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098625/dudley_lined_4ft6_14i2_pccysg.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098622/dudley_buttoned_4ft6_14i2_tdbbch.png',
        sapex5:
            
            /*Everest plain */   ' https://res.cloudinary.com/furniturebuild/image/upload/v1620098627/everest_plain_4ft6_14i2_rmsqtv.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620098626/everest_lined_4ft6_14i2_wwjmwk.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098623/everest_buttoned_4ft6_14i2_ngpz3a.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098626/florence_plain_4ft6_14i2_q3wxoz.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098624/florence_lined_4ft6_14i2_lviksf.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098627/florence_buttoned_4ft6_14i2_khiq3f.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098628/victor_plain_4ft6_14i2_nssech.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098627/victor_lined_4ft6_14i2_ffqarn.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098628/victor_buttoned_4ft6_14i2_yhyqwj.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099041/ankara_plain_5ft_14i2_i04rl1.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099040/ankara_lined_5ft_14i2_eighyl.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096926/ankara_buttoned_5ft_14i2_u51w9d.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099047/swanhill_buttoned_5ft_14i2_zidlcy.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099046/swanhill_plain_5ft_14i2_r4lrv0.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099047/swanhill_line_5ft_14i2_fho0pp.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099040/cornell_buttoned_5ft_14i2_m8ektt.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099041/cornell_plain_5ft_14i2_yzesgo.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099040/cornell_lined_5ft_14i2_eiu4zy.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099042/dudley_plain_5ft_14i2_t3g9x4.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099042/dudley_plain_5ft_14i2_t3g9x4.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099041/dudley_buttoned_5ft_14i2_b5sjhq.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099050/everest_plain_5ft_14i2_c3luvr.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620099048/everest_lined_5ft_14i2_qq2itd.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099042/everest_buttoned_5ft_14i2_gw6wh5.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099042/florence_plain_5ft_14i2_scqe33.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099042/florence_lined_5ft_14i2_wf8czf.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099050/florence_buttoned_5ft_14i2_oscc0r.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099048/victor_plain_5ft_14i2_d3h3ig.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099048/victor_lined_5ft_14i2_n5edcd.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099047/victor_buttoned_5ft_14i2_qtjoky.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099873/ankara_plain_6ft_14i2_bsc8is.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099873/ankara_lined_6ft_14i2_kf5toy.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096971/ankara_buttoned_6ft_14i2_u9mwrj.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099877/swanhill_buttoned_6ft_14i2_yyglss.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099882/swanhill_plain_6ft_14i2_yhtl6d.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099883/swanhill_line_6ft_14i2_bfnbbo.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099873/cornell_buttoned_6ft_14i2_p92ea8.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099873/cornell_plain_6ft_14i2_ighmkz.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099874/cornell_lined_6ft_14i2_cqgbsd.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099874/dudley_plain_6ft_14i2_tbagxc.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099874/dudley_lined_6ft_14i2_exuu4p.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099879/dudley_buttoned_6ft_14i2_bqoale.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099878/everest_plain_6ft_14i2_hfmmqa.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620099876/everest_lined_6ft_14i2_twjwqg.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099877/everest_buttoned_6ft_14i2_tijovv.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099878/florence_plain_6ft_14i2_qegkvs.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620099875/florence_lined_6ft_14i2_kqnl3w.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099875/florence_buttoned_6ft_14i2_wifgmg.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099879/victor_plain_6ft_14i2_zfoixs.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099880/victor_lined_6ft_14i2_gy3lfr.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099879/victor_buttoned_6ft_14i2_ee4b4r.png',
        
        }
    },
    pink: {
        feet2: {
           sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972155/ankara_plain_3ft_14i37_x0c1pa.png',
          sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/ankara_lined_3ft_14i37_by6hv9.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/ankara_buttoned_3ft_14i37_mypgqm.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972160/swanhill_buttoned_3ft_14i37_n1a9yl.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/swanhill_plain_3ft_14i37_uxqnk7.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/swanhill_line_3ft_14i37_i46shb.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972157/cornell_buttoned_3ft_14i37_iqg2pf.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/cornell_plain_3ft_14i37_hopr95.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972156/cornell_lined_3ft_14i37_qgn5bm.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972159/dudley_plain_3ft_14i37_yzqbmg.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972158/dudley_lined_3ft_14i37_kdgcjj.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972160/dudley_buttoned_3ft_14i37_alazqb.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972490/everest_plain_3ft_14i37_ogzl1m.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619972491/everest_lined_3ft_14i37_qybexi.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972492/everest_buttoned_3ft_14i37_pkcy43.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972493/florence_plain_3ft_14i37_d1gx8a.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972492/florence_lined_3ft_14i37_jzma75.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972491/florence_buttoned_3ft_14i37_u3cnt4.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972491/victor_plain_3ft_14i37_wsvr96.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972492/victor_lined_3ft_14i37_jowzi2.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972493/victor_buttoned_3ft_14i37_cw9vpi.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972902/ankara_plain_4ft6_14i37_rzfaih.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972908/ankara_lined_4ft6_14i37_llzm2l.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972903/ankara_buttoned_4ft6_14i37_fsrilr.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972901/swanhill_buttoned_4ft6_14i37_g0u6fk.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972901/swanhill_plain_4ft6_14i37_ymjdoz.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972903/swanhill_line_4ft6_14i37_utdf7c.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972903/cornell_buttoned_4ft6_14i37_nab4xt.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619972909/cornell_plain_4ft6_14i37_pj2po8.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972906/cornell_lined_4ft6_14i37_orv9ha.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972907/dudley_plain_4ft6_14i37_wwj7x2.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619972905/dudley_lined_4ft6_14i37_rznr3p.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619972908/dudley_buttoned_4ft6_14i37_z1urtx.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619973752/everest_plain_4ft6_14i37_jmjq89.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619973751/everest_lined_4ft6_14i37_xxvsma.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619973752/everest_buttoned_4ft6_14i37_btj0b3.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619973753/florence_plain_4ft6_14i37_c6hw1t.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619973753/florence_lined_4ft6_14i37_kzht4l.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619973753/florence_buttoned_4ft6_14i37_slzf6i.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619973756/victor_plain_4ft6_14i37_ipevsx.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619973756/victor_lined_4ft6_14i37_gdvl1z.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619973754/victor_buttoned_4ft6_14i37_z25suw.webp',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974066/ankara_plain_5ft_14i37_yyxshb.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974067/ankara_lined_5ft_14i37_bawtj7.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974063/ankara_buttoned_5ft_14i37_pwr7qh.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974063/swanhill_buttoned_5ft_14i37_hcrghl.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974061/swanhill_plain_5ft_14i37_koezr1.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974064/swanhill_line_5ft_14i37_tsylgc.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974065/cornell_buttoned_5ft_14i37_fhsvzq.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974064/cornell_plain_5ft_14i37_rnjtml.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974066/cornell_lined_5ft_14i37_igjxx3.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974067/dudley_plain_5ft_14i37_pl26n8.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974068/dudley_lined_5ft_14i37_g8cas8.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974068/dudley_buttoned_5ft_14i37_ctyqx6.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974454/everest_plain_5ft_14i37_vcfpbc.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619974454/everest_lined_5ft_14i37_jurevs.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974459/everest_buttoned_5ft_14i37_kxse6g.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974453/florence_plain_5ft_14i37_ihfq0i.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974453/florence_lined_5ft_14i37_quhsdb.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974455/florence_buttoned_5ft_14i37_ijatdb.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974458/victor_plain_5ft_14i37_s1j9gp.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974461/victor_lined_5ft_14i37_td2zi2.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974456/victor_buttoned_5ft_14i37_iuy2eb.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974830/ankara_plain_6ft_14i37_d7ybrr.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974828/ankara_lined_6ft_14i37_esocox.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974829/ankara_buttoned_6ft_14i37_rt3b9g.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974828/swanhill_buttoned_6ft_14i37_dnwn6a.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974827/swanhill_plain_6ft_14i37_v2qvn0.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974829/swanhill_line_6ft_14i37_eyqjb5.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974831/cornell_buttoned_6ft_14i37_kjlv2b.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619974831/cornell_plain_6ft_14i37_ng2api.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974830/cornell_lined_6ft_14i37_it42g4.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974831/dudley_plain_6ft_14i37_gbsgpj.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619974836/dudley_lined_6ft_14i37_u6q946.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619974832/dudley_buttoned_6ft_14i37_sulp8f.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975203/everest_plain_6ft_14i37_quumkg.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1619975197/everest_lined_6ft_14i37_yabnkv.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975199/everest_buttoned_6ft_14i37_arswdw.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975201/florence_plain_6ft_14i37_ftg8n4.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1619975200/florence_lined_6ft_14i37_tbefy5.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975200/florence_buttoned_6ft_14i37_cvoqej.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975204/victor_plain_6ft_14i37_pxjzak.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1619975203/victor_lined_6ft_14i37_covgsk.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619975203/victor_buttoned_6ft_14i37_tpnrfa.webp',
        
    }


  },
    asphalt: {
       feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620019876/ankara_plain_3ft_14i31_fd9jud.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019876/ankara_lined_3ft_14i31_msn3wu.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019876/ankara_buttoned_3ft_14i31_ibehgm.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019877/swanhill_buttoned_3ft_14i31_jrayjo.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620019876/swanhill_plain_3ft_14i31_vqip5f.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019877/swanhill_line_3ft_14i31_f8uowh.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019877/cornell_buttoned_3ft_14i31_bxlhle.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620019878/cornell_plain_3ft_14i31_logdfp.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019877/cornell_lined_3ft_14i31_kgcczx.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620019877/dudley_plain_3ft_14i31_dc6nkx.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620019878/dudley_lined_3ft_14i31_ysvy9k.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620019877/dudley_buttoned_3ft_14i31_wdvgxl.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020176/everest_plain_3ft_14i31_bx7a55.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620020176/everest_lined_3ft_14i31_dd69bw.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020177/everest_buttoned_3ft_14i31_syfxiy.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020179/florence_plain_3ft_14i31_yzh22z.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020176/florence_lined_3ft_14i31_f9kqzc.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020177/florence_buttoned_3ft_14i31_qpuitj.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620020177/victor_plain_3ft_14i31_dntdqa.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020177/victor_lined_3ft_14i31_wlcxcs.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620020177/victor_buttoned_3ft_14i31_cx93d3.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620020748/ankara_plain_4ft6_14i31_vbmvof.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020749/ankara_lined_4ft6_14i31_bfdcz2.png',
        sapex1b:
            
           /*Ankara Buttoned */
  		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020747/ankara_buttoned_4ft6_14i31_e09dsx.webp',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020748/swanhill_buttoned_4ft6_14i31_cmwhki.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620020750/swanhill_plain_4ft6_14i31_fxrqkv.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020748/swanhill_line_4ft6_14i31_nxck2s.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020749/cornell_buttoned_4ft6_14i31_hdx0ze.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620020748/cornell_plain_4ft6_14i31_hpdolu.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020748/cornell_lined_4ft6_14i31_ytfanx.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020749/dudley_plain_4ft6_14i31_hpz6jd.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620020749/dudley_lined_4ft6_14i31_yorn5s.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620020749/dudley_buttoned_4ft6_14i31_yhnhb8.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021071/everest_plain_4ft6_14i31_mcsdoe.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620021071/everest_lined_4ft6_14i31_alzjbr.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021072/everest_buttoned_4ft6_14i31_pukpwy.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021071/florence_plain_4ft6_14i31_hpcbgm.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021071/florence_lined_4ft6_14i31_dbo7ib.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021072/florence_buttoned_4ft6_14i31_cui1pp.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021072/victor_plain_4ft6_14i31_faoioh.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021072/victor_lined_4ft6_14i31_fwwaur.png',
        sapex7b:          
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021073/victor_buttoned_4ft6_14i31_qo8hj5.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021370/ankara_plain_5ft_14i31_ctwjhg.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/ankara_lined_5ft_14i31_li0fve.png',
        sapex1b:
            
           /*Ankara Buttoned */  
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/ankara_buttoned_5ft_14i31_czq2gk.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021370/swanhill_buttoned_5ft_14i31_yvus9p.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/swanhill_plain_5ft_14i31_lnsndl.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/swanhill_line_5ft_14i31_cv4bbv.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021372/cornell_buttoned_5ft_14i31_qvztww.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/cornell_plain_5ft_14i31_jlx3sh.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021371/cornell_lined_5ft_14i31_krphs5.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021373/dudley_plain_5ft_14i31_bdrhhl.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021372/dudley_lined_5ft_14i31_scfm19.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021373/dudley_buttoned_5ft_14i31_vixjn8.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021842/everest_plain_5ft_14i31_np5401.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620021841/everest_lined_5ft_14i31_hnk4be.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021841/everest_buttoned_5ft_14i31_t92zw7.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021841/florence_plain_5ft_14i31_lwspws.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620021841/florence_lined_5ft_14i31_xvyixz.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021842/florence_buttoned_5ft_14i31_znjy37.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021842/victor_plain_5ft_14i31_uik7f5.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620021842/victor_lined_5ft_14i31_owserj.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620021842/victor_buttoned_5ft_14i31_hm3lha.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620022464/ankara_plain_6ft_14i31_atoakl.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022465/ankara_lined_6ft_14i31_-_Copy_cfukih.png',
        sapex1b:
            
           /*Ankara Buttoned */ 
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022466/ankara_buttoned_6ft_14i31_b8pbgd.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022469/swanhill_buttoned_6ft_14i31_lji6s1.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620022466/swanhill_plain_6ft_14i31_-_Copy_uvpqxe.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022466/swanhill_line_6ft_14i31_khjtoq.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022467/cornell_buttoned_6ft_14i31_ra6jn5.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620022468/cornell_plain_6ft_14i31_sgrl4m.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022466/cornell_lined_6ft_14i31_ssfwhy.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022468/dudley_plain_6ft_14i31_bc7znx.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022467/dudley_lined_6ft_14i31_vxbnwz.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022470/dudley_buttoned_6ft_14i31_glvgjj.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022885/everest_plain_6ft_14i31_emlmz0.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620022883/everest_lined_6ft_14i31_amqxwz.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022885/everest_buttoned_6ft_14i31_nkbgko.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022883/florence_plain_6ft_14i31_kzexm3.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620022883/florence_lined_6ft_14i31_mvijin.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022884/florence_buttoned_6ft_14i31_saiu9s.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620022884/victor_plain_6ft_14i31_ysmkeg.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620022884/victor_lined_6ft_14i31_prjqta.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620022885/victor_buttoned_6ft_14i31_umxfqt.png',
        
    }


  },
  beige: {
    feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620038289/ankara_plain_3ft_14i38_glnaaa.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038289/ankara_lined_3ft_14i38_l95xdd.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038290/ankara_buttoned_3ft_14i38_wvo37p.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038289/swanhill_buttoned_3ft_14i38_lv4wxe.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620038289/swanhill_plain_3ft_14i38_vpc6nf.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038290/swanhill_line_3ft_14i38_srud9e.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038290/cornell_buttoned_3ft_14i38_gqan8j.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620038290/cornell_plain_3ft_14i38_bmlyg4.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038290/cornell_lined_3ft_14i38_o50ahu.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620038291/dudley_plain_3ft_14i38_ysew8g.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620038292/dudley_lined_3ft_14i38_dqyhtt.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038291/dudley_buttoned_3ft_14i38_nahhti.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620038623/everest_plain_3ft_14i38_kyy4lp.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620038624/victor_lined_3ft_14i38_sobldh.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620038623/everest_buttoned_3ft_14i38_e1fkp2.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620038624/florence_plain_3ft_14i38_xadvsv.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620038623/florence_lined_3ft_14i38_peljwa.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038623/florence_buttoned_3ft_14i38_eotgql.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620038624/victor_plain_3ft_14i38_u5cktj.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620038624/victor_lined_3ft_14i38_sobldh.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620038624/victor_buttoned_3ft_14i38_azpwuj.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039019/ankara_plain_4ft6_14i38_v1iiii.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039020/ankara_lined_4ft6_14i38_vhovsn.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039019/ankara_buttoned_4ft6_14i38_rgbbgb.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039019/swanhill_buttoned_4ft6_14i38_umv4ou.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039019/swanhill_plain_4ft6_14i38_l3cgyi.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039021/swanhill_line_4ft6_14i38_syxhoc.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039021/cornell_buttoned_4ft6_14i38_c7gd6a.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039020/cornell_plain_4ft6_14i38_px1xia.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039021/cornell_lined_4ft6_14i38_o4nzwd.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039023/dudley_plain_4ft6_14i38_l3abp5.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039021/dudley_lined_4ft6_14i38_l9tmqj.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039022/dudley_buttoned_4ft6_14i38_apwnkr.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039291/everest_plain_4ft6_14i38_iadd9v.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620039291/everest_lined_4ft6_14i38_rqauht.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039290/everest_buttoned_4ft6_14i38_num51f.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039291/florence_plain_4ft6_14i38_mwgdxo.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039290/florence_lined_4ft6_14i38_fiuk2c.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039296/florence_buttoned_4ft6_14i38_wrswxz.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039291/victor_plain_4ft6_14i38_sxjz7q.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039291/victor_lined_4ft6_14i38_vqije3.png',
        sapex7b:          
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039293/victor_buttoned_4ft6_14i38_homnvs.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039723/ankara_plain_5ft_14i38_gfcgc8.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039721/ankara_lined_5ft_14i38_zfeqjj.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039721/ankara_buttoned_5ft_14i38_o7o60u.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039722/swanhill_buttoned_5ft_14i38_rsuwjt.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039724/swanhill_plain_5ft_14i38_civv6j.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039723/swanhill_line_5ft_14i38_wbmss3.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039724/cornell_buttoned_5ft_14i38_lbhdys.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620039722/cornell_plain_5ft_14i38_jsckdr.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039722/cornell_lined_5ft_14i38_zmlsj5.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039724/dudley_plain_5ft_14i38_fx6srr.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620039726/dudley_lined_5ft_14i38_fpmf3a.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620039727/dudley_buttoned_5ft_14i38_qdbtsq.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620040105/everest_plain_5ft_14i38_kmihqf.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620040107/everest_lined_5ft_14i38_p41paw.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620040106/everest_buttoned_5ft_14i38_j6xalc.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620040109/florence_plain_5ft_14i38_y5qxll.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620040107/florence_lined_5ft_14i38_kmrrsx.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040107/florence_buttoned_5ft_14i38_b9iawr.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620040106/victor_plain_5ft_14i38_cgl9yp.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040108/victor_lined_5ft_14i38_rxu83s.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620040107/victor_buttoned_5ft_14i38_e03k6q.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620040467/ankara_plain_6ft_14i38_lkisuf.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040469/ankara_lined_6ft_14i38_wutwpu.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040470/ankara_buttoned_6ft_14i38_bl9qpt.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040467/swanhill_buttoned_6ft_14i38_irui0y.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620040467/swanhill_plain_6ft_14i38_twmrpu.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040467/swanhill_line_6ft_14i38_vyio08.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040468/cornell_buttoned_6ft_14i38_r1hoj6.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620040468/cornell_plain_6ft_14i38_wqtu2e.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040468/cornell_lined_6ft_14i38_ed6ehi.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620040469/dudley_plain_6ft_14i38_zrnxfa.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620040469/dudley_lined_6ft_14i38_xy036m.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620040469/dudley_buttoned_6ft_14i38_cbiipo.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620041089/everest_plain_6ft_14i38_f9p8za.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620041090/everest_lined_6ft_14i38_mxqnj0.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620041090/everest_buttoned_6ft_14i38_pwtpfl.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620041092/florence_plain_6ft_14i38_ql28gc.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620041094/florence_lined_6ft_14i38_glau1d.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620041092/florence_buttoned_6ft_14i38_tet1h1.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620041091/victor_plain_6ft_14i38_yjbpzp.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620041092/victor_lined_6ft_14i38_ddcfzw.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620041095/victor_buttoned_6ft_14i38_y33xg3.png',
        
        }
    },
	mustard: {
    feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054095/ankara_plain_3ft_14i39_vbl67y.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054095/ankara_lined_3ft_14i39_q11vvo.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054095/ankara_buttoned_3ft_14i39_iyt7aa.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054095/swanhill_buttoned_3ft_14i39_p8shdx.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054097/swanhill_plain_3ft_14i39_nhwtzt.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054095/swanhill_line_3ft_14i39_lksxx1.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054098/cornell_buttoned_3ft_14i39_y2cz84.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054096/cornell_plain_3ft_14i39_lcii22.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054096/cornell_lined_3ft_14i39_sjoah1.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054097/dudley_plain_3ft_14i39_qj1veu.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054098/dudley_lined_3ft_14i39_o33fwm.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054097/dudley_buttoned_3ft_14i39_kapuro.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054440/everest_plain_3ft_14i39_nnv971.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620054440/everest_lined_3ft_14i39_gvk0on.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054440/everest_buttoned_3ft_14i39_li4sa5.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054440/florence_plain_3ft_14i39_co2nli.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054443/florence_lined_3ft_14i39_ipjtci.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054444/florence_buttoned_3ft_14i39_gfenak.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054441/victor_plain_3ft_14i39_e2y9yg.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054443/victor_lined_3ft_14i39_bkvaa3.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054442/victor_buttoned_3ft_14i39_rgpvxc.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054762/ankara_plain_4ft6_14i39_bui3av.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054763/ankara_lined_4ft6_14i39_qvjtsp.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054763/ankara_buttoned_4ft6_14i39_htewol.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054764/swanhill_buttoned_4ft6_14i39_j9u0lj.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054763/swanhill_plain_4ft6_14i39_by5o1z.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054764/swanhill_line_4ft6_14i39_kkubto.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054766/cornell_buttoned_4ft6_14i39_ftfi96.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620054764/cornell_plain_4ft6_14i39_tyfc4d.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054766/cornell_lined_4ft6_14i39_loqcnv.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054765/dudley_plain_4ft6_14i39_eurhja.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620054766/dudley_lined_4ft6_14i39_wwtl2k.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620054767/dudley_buttoned_4ft6_14i39_uxzpuq.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055137/everest_plain_4ft6_14i39_ir6lc5.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620055138/everest_lined_4ft6_14i39_tkl8xm.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055139/everest_buttoned_4ft6_14i39_tiuqcz.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055139/florence_plain_4ft6_14i39_fcp3bm.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055139/florence_lined_4ft6_14i39_cfrscf.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055139/florence_buttoned_4ft6_14i39_jvljc6.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055140/victor_plain_4ft6_14i39_lbao8i.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055141/victor_lined_4ft6_14i39_zysnhl.png',
        sapex7b:          
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055141/victor_buttoned_4ft6_14i39_sss0q3.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055470/ankara_plain_5ft_14i39_ddchf5.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055475/ankara_lined_5ft_14i39_m49wtd.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055471/ankara_buttoned_5ft_14i39_vzwoiq.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055471/swanhill_buttoned_5ft_14i39_f5qcnv.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055470/swanhill_plain_5ft_14i39_ng2qbc.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055472/swanhill_line_5ft_14i39_vc9vjl.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055474/cornell_buttoned_5ft_14i39_gkg3zb.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055474/cornell_plain_5ft_14i39_fsfbl5.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055471/cornell_lined_5ft_14i39_s04mlh.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055473/dudley_plain_5ft_14i39_vvxufi.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055474/dudley_lined_5ft_14i39_nbub9l.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055476/dudley_buttoned_5ft_14i39_egqpx9.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055798/everest_plain_5ft_14i39_ufh6bd.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620055801/everest_lined_5ft_14i39_jzfqnd.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055798/everest_buttoned_5ft_14i39_rdebw9.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055801/florence_plain_5ft_14i39_kmdoo4.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620055801/florence_lined_5ft_14i39_put7yq.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055797/florence_buttoned_5ft_14i39_xitm4q.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055799/victor_plain_5ft_14i39_enu1x4.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620055800/victor_lined_5ft_14i39_qrmznb.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620055803/victor_buttoned_5ft_14i39_pkuerx.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059697/ankara_plain_6ft_14i39_wxq7zk.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059697/ankara_lined_6ft_14i39_j9hqts.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059698/ankara_buttoned_6ft_14i39_zyjnia.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059699/swanhill_buttoned_6ft_14i39_vc4n77.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059699/swanhill_plain_6ft_14i39_dgfvzh.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059700/swanhill_line_6ft_14i39_rj1whd.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059700/cornell_buttoned_6ft_14i39_ku9rly.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059703/cornell_plain_6ft_14i39_uxdtyn.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059702/cornell_lined_6ft_14i39_etkusz.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059697/dudley_plain_6ft_14i39_jrx6ro.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059701/dudley_lined_6ft_14i39_dhjkqd.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059699/dudley_buttoned_6ft_14i39_qtj9no.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059993/everest_plain_6ft_14i39_nt3prl.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620059994/everest_lined_6ft_14i39_xahwvs.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059997/everest_buttoned_6ft_14i39_lfyox5.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059994/florence_plain_6ft_14i39_e9uhns.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620059995/florence_lined_6ft_14i39_juttvz.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059993/florence_buttoned_6ft_14i39_zv3ppr.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620059995/victor_plain_6ft_14i39_alpabj.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620059997/victor_lined_6ft_14i39_rxwbdy.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620060000/victor_buttoned_6ft_14i39_vp6r5x.png',
        
        }


    },
	bpvelvet: {
    feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095994/ankara_plain_3ft_14i33_tjhpty.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095997/ankara_lined_3ft_14i33_kt72l4.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095995/ankara_buttoned_3ft_14i33_wgksdl.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095996/swanhill_buttoned_3ft_14i33_s1jzgi.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095995/swanhill_plain_3ft_14i33_tgpb3a.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095995/swanhill_line_3ft_14i33_tszawm.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095996/cornell_buttoned_3ft_14i33_d4ags3.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095996/cornell_plain_3ft_14i33_urvv2w.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095996/cornell_lined_3ft_14i33_j5saen.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620095996/dudley_plain_3ft_14i33_kjkfr1.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620095997/dudley_lined_3ft_14i33_ldd1d8.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095997/dudley_buttoned_3ft_14i33_gw8ifu.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096357/everest_plain_3ft_14i33_hfhnae.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620096357/everest_lined_3ft_14i33_n9p1rs.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096357/everest_buttoned_3ft_14i33_jdhqix.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096358/florence_plain_3ft_14i33_m9vuii.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096359/florence_lined_3ft_14i33_fhx58i.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096358/florence_buttoned_3ft_14i33_w1upld.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096359/victor_plain_3ft_14i33_p9hbkr.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096359/victor_lined_3ft_14i33_te3yfu.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096359/victor_buttoned_3ft_14i33_stery5.png',
        
    },
    feet4: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096629/ankara_plain_4ft6_14i33_sbfjcf.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096630/ankara_lined_4ft6_14i33_v42sco.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096630/ankara_buttoned_4ft6_14i33_lzisc6.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096630/swanhill_buttoned_4ft6_14i33_wckezi.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096630/swanhill_plain_4ft6_14i33_mxlzhl.pngg',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096631/swanhill_line_4ft6_14i33_rw7kaq.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096634/cornell_buttoned_4ft6_14i33_x5wksy.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096631/cornell_plain_4ft6_14i33_gtm6r3.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096631/cornell_lined_4ft6_14i33_mrbik1.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096632/dudley_plain_4ft6_14i33_gucea8.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096632/dudley_lined_4ft6_14i33_lwesel.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096633/dudley_buttoned_4ft6_14i33_pbbziz.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096885/everest_plain_4ft6_14i33_mzcgu0.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620096886/everest_lined_4ft6_14i33_tzgjsr.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096887/everest_buttoned_4ft6_14i33_devhw9.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096889/florence_plain_4ft6_14i33_dblsy1.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620096885/florence_lined_4ft6_14i33_vl351n.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096885/florence_buttoned_4ft6_14i33_b1jquz.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096886/victor_plain_4ft6_14i33_g2ydje.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096887/victor_lined_4ft6_14i33_qglfxs.png',
        sapex7b:          
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620096887/victor_buttoned_4ft6_14i33_gjgmzo.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097147/ankara_plain_5ft_14i33_qpc4or.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097151/ankara_lined_5ft_14i33_c5hhog.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097147/ankara_buttoned_5ft_14i33_bitkhj.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097148/swanhill_buttoned_5ft_14i33_zcqol3.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097146/swanhill_plain_5ft_14i33_qwtoti.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097150/swanhill_line_5ft_14i33_s0hmhk.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097151/cornell_buttoned_5ft_14i33_dtj5nf.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097152/cornell_plain_5ft_14i33_znqakw.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097149/cornell_lined_5ft_14i33_xbbxju.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097152/dudley_plain_5ft_14i33_s2l4u8.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097153/dudley_lined_5ft_14i33_bnssdp.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097153/dudley_buttoned_5ft_14i33_fm8vmj.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097426/everest_plain_5ft_14i33_idqprz.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620097428/everest_lined_5ft_14i33_qtzfne.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097427/everest_buttoned_5ft_14i33_qnz21t.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097430/florence_plain_5ft_14i33_kpwf6e.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097429/florence_lined_5ft_14i33_lrpimq.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097428/florence_buttoned_5ft_14i33_nycggc.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097428/victor_plain_5ft_14i33_ij4qjm.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097429/victor_lined_5ft_14i33_fnx91l.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097431/victor_buttoned_5ft_14i33_gqu0ep.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097829/ankara_plain_6ft_14i33_z27kng.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097833/ankara_lined_6ft_14i33_kvvvhh.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097831/ankara_buttoned_6ft_14i33_wznkzo.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097831/swanhill_buttoned_6ft_14i33_fc3l2l.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097836/swanhill_plain_6ft_14i33_iqdg1t.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097829/swanhill_line_6ft_14i33_eghcge.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097833/cornell_buttoned_6ft_14i33_wtjx3l.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620097833/cornell_plain_6ft_14i33_wspl45.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097833/cornell_lined_6ft_14i33_uj1cgp.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097833/dudley_plain_6ft_14i33_zp6hqn.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620097838/dudley_lined_6ft_14i33_hnwzbb.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620097835/dudley_buttoned_6ft_14i33_jeowj8.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098267/everest_plain_6ft_14i33_atkk84.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620098265/everest_lined_6ft_14i33_yiz9u8.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098267/everest_buttoned_6ft_14i33_eaq0n8.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098269/florence_plain_6ft_14i33_jbxj1p.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620098270/florence_lined_6ft_14i33_u5ucbu.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098266/florence_buttoned_6ft_14i33_szohip.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098267/victor_plain_6ft_14i33_pbhapf.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098268/victor_lined_6ft_14i33_up9u3b.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098270/victor_buttoned_6ft_14i33_cgtd0t.png',
        
        }


   },
   plum: {
    feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133113/ankara_plain_3ft_14i9_f0yumh.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133113/ankara_lined_3ft_14i9_uu3dpt.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133114/ankara_buttoned_3ft_14i9_era8rr.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133122/swanhill_buttoned_3ft_14i9_gcgvoi.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133116/swanhill_plain_3ft_14i9_dfhiuw.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133115/swanhill_line_3ft_14i9_ciozl5.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133126/cornell_buttoned_3ft_14i9_m87cti.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133115/cornell_plain_3ft_14i9_iyneb4.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133117/cornell_lined_3ft_14i9_ghqalu.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133116/dudley_plain_3ft_14i9_tz6n6z.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133118/dudley_lined_3ft_14i9_dhxqyd.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133118/dudley_buttoned_3ft_14i9_teavm6.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133443/everest_plain_3ft_14i9_kdsjfu.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620133444/everest_lined_3ft_14i9_jszdek.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133444/everest_buttoned_3ft_14i9_ca3lic.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133445/florence_plain_3ft_14i9_d1voxe.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133452/florence_lined_3ft_14i9_uknvxn.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133447/florence_buttoned_3ft_14i9_ndbfqe.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133448/victor_plain_3ft_14i9_vqqc2d.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133446/victor_lined_3ft_14i9_qxgofu.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133448/victor_buttoned_3ft_14i9_gml68r.png',
        
    },
    feet4: {
        sapex1:
  
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133815/ankara_plain_4ft6_14i9_ceeqwx.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133815/ankara_lined_4ft6_14i9_nomdtk.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133816/ankara_buttoned_4ft6_14i9_vzwvch.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133831/swanhill_buttoned_4ft6_14i9_pbvn2r.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133822/swanhill_plain_4ft6_14i9_rxolwa.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133826/swanhill_line_4ft6_14i9_kakh25.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133831/cornell_buttoned_4ft6_14i9_x1udng.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620133827/cornell_plain_4ft6_14i9_r9vfky.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133823/cornell_lined_4ft6_14i9_xsk0tz.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133824/dudley_plain_4ft6_14i9_o6n5lx.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620133828/dudley_lined_4ft6_14i9_na5egr.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620133827/dudley_buttoned_4ft6_14i9_xraboa.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620134187/everest_plain_4ft6_14i9_ucubur.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620134193/everest_lined_4ft6_14i9_pbte4x.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620134185/everest_buttoned_4ft6_14i9_gjheiu.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620134195/florence_plain_4ft6_14i9_nbaar8.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620134193/florence_lined_4ft6_14i9_iluijs.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134216/florence_buttoned_4ft6_14i9_zmhp6p.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620134187/victor_plain_4ft6_14i9_ci3zko.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134191/victor_lined_4ft6_14i9_j7vosi.png',
        sapex7b:          
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620134197/victor_buttoned_4ft6_14i9_nnfx6g.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620134587/ankara_plain_5ft_14i9_nyzjcd.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134589/ankara_lined_5ft_14i9_j5xjb8.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134589/ankara_buttoned_5ft_14i9_skknag.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134607/swanhill_buttoned_5ft_14i9_otsnvf.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620134602/swanhill_plain_5ft_14i9_cdiek1.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134596/swanhill_line_5ft_14i9_rh40hg.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134604/cornell_buttoned_5ft_14i9_cab70l.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620134600/cornell_plain_5ft_14i9_zyj3zy.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134603/cornell_lined_5ft_14i9_jgl706.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620134611/dudley_plain_5ft_14i9_avma6w.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620134608/dudley_lined_5ft_14i9_pb2qqe.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620134608/dudley_buttoned_5ft_14i9_zt0kgi.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620135004/everest_plain_5ft_14i9_b90uom.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620135012/everest_lined_5ft_14i9_jayfg4.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620135003/everest_buttoned_5ft_14i9_pbxpcu.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620135007/florence_plain_5ft_14i9_lyuunq.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620135006/florence_lined_5ft_14i9_sdl1be.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135008/florence_buttoned_5ft_14i9_tyjt94.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620135011/victor_plain_5ft_14i9_d5bqy0.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135009/victor_lined_5ft_14i9_vhqxxz.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620135011/victor_buttoned_5ft_14i9_h7xyhg.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620135378/ankara_plain_6ft_14i9_o9ymab.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135389/ankara_lined_6ft_14i9_lntxik.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135384/ankara_buttoned_6ft_14i9_num39s.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135384/swanhill_buttoned_6ft_14i9_a3dddt.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620135434/swanhill_plain_6ft_14i9_vlx9ga.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135429/swanhill_line_6ft_14i9_ddsymz.webp',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135482/cornell_buttoned_6ft_14i9_filwtw.webp',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620135483/cornell_plain_6ft_14i9_crwybp.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135386/cornell_lined_6ft_14i9_he3oul.webp',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620135392/dudley_plain_6ft_14i9_ndkzkn.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620135391/dudley_lined_6ft_14i9_ne6j0p.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620135387/dudley_buttoned_6ft_14i9_rd45wj.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620136424/everest_plain_6ft_14i9_hbpl3p.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620136427/everest_lined_6ft_14i9_aat7dx.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620136429/everest_buttoned_6ft_14i9_txub1d.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620136425/florence_plain_6ft_14i9_z7wgtj.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620136433/florence_lined_6ft_14i9_ef0pyd.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620136430/florence_buttoned_6ft_14i9_uwrzw1.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620136426/victor_plain_6ft_14i9_lsdn7t.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620136430/victor_lined_6ft_14i9_lechnv.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620136430/victor_buttoned_6ft_14i9_nqvhp9.png',
        
       }
    },
	charcoal: {
    feet2: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137830/ankara_plain_3ft_14i1_e1ngek.webp',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137832/ankara_lined_3ft_14i1_holkhs.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137831/ankara_buttoned_3ft_14i1_xqfsab.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137839/swanhill_buttoned_3ft_14i1_juyuu9.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137835/swanhill_plain_3ft_14i1_nbtfur.webp',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137839/swanhill_line_3ft_14i1_oiymnk.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137836/cornell_buttoned_3ft_14i1_ijwtcf.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137839/cornell_plain_3ft_14i1_iafdoi.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137833/cornell_lined_3ft_14i1_gdgruj.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620137835/dudley_plain_3ft_14i1_pi1ipf.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620137836/dudley_lined_3ft_14i1_owhgd7.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137839/dudley_buttoned_3ft_14i1_yxtse7.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620138200/everest_plain_3ft_14i1_eowrey.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620138202/everest_lined_3ft_14i1_uolhgp.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620138202/everest_buttoned_3ft_14i1_omueef.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620138203/florence_plain_3ft_14i1_n98kkp.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620138201/florence_lined_3ft_14i1_hbcp8b.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138200/florence_buttoned_3ft_14i1_wve62p.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620138201/victor_plain_3ft_14i1_sxw2ww.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138202/victor_lined_3ft_14i1_rclxin.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620138201/victor_buttoned_3ft_14i1_ijm3an.webp',
        
    },
    feet4: {
        sapex1:
  
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620138533/ankara_plain_4ft6_14i1_udasmq.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138535/ankara_lined_4ft6_14i1_jfssxd.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138533/ankara_buttoned_4ft6_14i1_yu3hrm.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138535/swanhill_buttoned_4ft6_14i1_ptprx7.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620138537/swanhill_plain_4ft6_14i1_lvbdsn.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138544/swanhill_line_4ft6_14i1_rxgvnr.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138536/cornell_buttoned_4ft6_14i1_hpbpr4.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620138540/cornell_plain_4ft6_14i1_qntqte.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138535/cornell_lined_4ft6_14i1_ejhhe0.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620138539/dudley_plain_4ft6_14i1_xptxl5.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620138537/dudley_lined_4ft6_14i1_xloboz.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620138538/dudley_buttoned_4ft6_14i1_mwda34.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620139084/everest_plain_4ft6_14i1_whucct.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620139088/everest_lined_4ft6_14i1_a2bwde.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620139087/everest_buttoned_4ft6_14i1_zkkzht.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620139085/florence_plain_4ft6_14i1_pjd9b0.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620139085/florence_lined_4ft6_14i1_sdn2vo.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139087/florence_buttoned_4ft6_14i1_myto3x.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620139086/victor_plain_4ft6_14i1_aovzl1.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139088/victor_lined_4ft6_14i1_qvwjji.png',
        sapex7b:          
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620139088/victor_buttoned_4ft6_14i1_b1hbs1.png',
        
    },
    feet5: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620139500/ankara_plain_5ft_14i1_qzjvzl.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139501/ankara_lined_5ft_14i1_dct6ga.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139501/ankara_buttoned_5ft_14i1_m5apag.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139509/swanhill_buttoned_5ft_14i1_n7x5lb.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620139501/swanhill_plain_5ft_14i1_dbg1r3.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139504/swanhill_line_5ft_14i1_adcvle.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139506/cornell_buttoned_5ft_14i1_bx2cmo.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620139502/cornell_plain_5ft_14i1_yf01sl.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139504/cornell_lined_5ft_14i1_idyvq6.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620139504/dudley_plain_5ft_14i1_pwkows.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620139505/dudley_lined_5ft_14i1_xkmego.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620139507/dudley_buttoned_5ft_14i1_ijj08s.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620140073/everest_plain_5ft_14i1_d2q7qp.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620140075/everest_lined_5ft_14i1_ekcz0z.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620140074/everest_buttoned_5ft_14i1_nc7ldl.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620140074/florence_plain_5ft_14i1_zkwpgh.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620140074/florence_lined_5ft_14i1_kwdigs.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620140076/florence_buttoned_5ft_14i1_dig3eo.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620140076/victor_plain_5ft_14i1_pkcv5x.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620140076/victor_lined_5ft_14i1_xguapo.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620140076/victor_buttoned_5ft_14i1_pqyxpo.png',
        
    },
    feet6: {
        sapex1:
            
           /*Ankara plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620159896/ankara_plain_6ft_14i1_pxmlep.png',
        sapex1a:
           /*Ankara lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159896/ankara_lined_6ft_14i1_ipit6f.png',
        sapex1b:
            
           /*Ankara Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159896/ankara_buttoned_6ft_14i1_d1ayr4.png',
        
        sapex2:
           /*Swanhill Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159901/swanhill_buttoned_6ft_14i1_mgjm7b.png',
         
        sapex2a:
             /*Swanhill plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620159901/swanhill_plain_6ft_14i1_dx7lgy.png',
           
        sapex2b:
             /*Swanhill lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159902/swanhill_line_6ft_14i1_affegk.png',
           
        
        sapex3:
            /*Cornell Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159896/cornell_buttoned_6ft_14i1_rfyxon.png',
        sapex3a:
            /*Cornell plain */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620159897/cornell_plain_6ft_14i1_xcjplu.png',
        sapex3b:
            /*Cornell lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159896/cornell_lined_6ft_14i1_sms03g.png',
        sapex4:
            
           /*Dudley plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620159899/dudley_plain_6ft_14i1_xq9cby.png',
        sapex4a:
            
           /*Dudley lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620159897/dudley_lined_6ft_14i1_ana1ge.png',
        sapex4b:
            /*Dudley Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159899/dudley_buttoned_6ft_14i1_wy9jng.png',
        sapex5:
            
            /*Everest plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620159898/everest_plain_6ft_14i1_wnetee.png',
        sapex5a:
            
           /*Everest lined */    'https://res.cloudinary.com/furniturebuild/image/upload/v1620159898/everest_lined_6ft_14i1_nfuylk.png',
        sapex5b:
            
           /*Everest Buttoned */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620159899/everest_buttoned_6ft_14i1_hsdouw.png',
        sapex6:
             /*Florence plain */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620159899/florence_plain_6ft_14i1_lwjjvy.png',
        sapex6a:
            /*Florence lined */   'https://res.cloudinary.com/furniturebuild/image/upload/v1620159899/florence_lined_6ft_14i1_glx29y.png',
        sapex6b:
           /*Florence Buttoned */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159899/florence_buttoned_6ft_14i1_sc8c0m.png',
        sapex7:
            
           /*Victor plain*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620159901/victor_plain_6ft_14i1_bkakqx.png',
        sapex7a:
           /*Victor lined */  'https://res.cloudinary.com/furniturebuild/image/upload/v1620159901/victor_lined_6ft_14i1_xaw8ep.png',
        sapex7b:
            
           /*Victor Buttoned */ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620159902/victor_buttoned_6ft_14i1_qw0vba.webp',
        
    }
}

    
}





















const alldepth = {
    gray: {
       feet2: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618339643/bed6_qaynaw.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618341597/bed10_plfnkr.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618205418/2_ahcg84.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619372034/tome_3ft_14i_13_khj34x.webp'



       },
       feet4: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618689079/6graybed_yufkgk.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618689117/10graybed_u1tfjc.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618684840/4_kzwrqg.webp',
               storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619372290/tome_4ft6_14i_13_gocztv.webp'


       },
       
       
       feet5: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618339688/bed6_nokf9h.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618341632/bed10_volo6j.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618206431/5_xaizhz.webp',
               storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619373499/tome_5ft_14i_13_v12mss.webp'



       },
       feet6: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618339731/bed6_bzhtfe.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618341681/bed10_hrcpaf.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618238196/6_yp1ycv.png',

               storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619373722/tome_6ft_14i_13_nublpl.webp'

       }


   },
    black: {
       feet2: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618339766/black6_igfuqx.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618341911/black10_noolvy.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618206886/black_quirgp.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619372164/tome_3ft_14i_0_prxiuh.webp'


       },
       feet4: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618689437/6blackbed_zpplfr.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618689461/10blackbed_gb7xbx.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618686176/black_sft75g.png',
               storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619372287/tome_4ft6_14i_0_hronmn.webp'


       },
       feet5: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618339811/black6_afgrc9.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618341925/black10_y8sdch.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618207121/black_uzhq2r.png',
               storageOttoman  :'https://res.cloudinary.com/furniturebuild/image/upload/v1619373499/tome_5ft_14i_0_ius1qs.webp'

              
       },
       feet6: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618339845/blac6_zbvlle.webp',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618341943/black10_kpexak.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618248275/black_jpok9i.png',
               storageOttoman  :' https://res.cloudinary.com/furniturebuild/image/upload/v1619373709/tome_6ft_14i_0_ku9ttf.webp'


       }


   },
    blue: {
       feet2: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618354333/blue6_uyrb8f.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618354392/blue10_pscoxn.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618257443/blue_kzs7fr.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619372165/tome_3ft_14i_7_wcnqsy.webp'



       },
       feet4: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618689622/6bluebed_eo8jvb.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618689645/10bluekbed_ckwjzt.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618686418/blue7_wqj4ba.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619372287/tome_4ft6_14i_7_awibf9.webp'



       },
       feet5: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618354499/blue6_ipe6q0.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618354533/blue10_lxiage.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618257666/blue_gtdd4s.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619373500/tome_5ft_14i_7_tawxie.webp'



       },
       feet6: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618354589/blue6_cwapgn.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618354630/blue10_gxg9pc.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618257954/blue_bmbdqw.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619373708/tome_6ft_14i_7_exlvh9.webp'


       }
    

   },
    red: {
       feet2: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619375115/bedbase_3ft_6i_11_rfk7pw.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619375115/bedbase_3ft_10i_11_heglsf.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619375115/bedbase_3ft_14i_11_ci2wyk.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619379303/tome_3ft_14i_11_usv5e7.webp'



       },
       feet4: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619375531/bedbase_4ft6_6i_11_il1bzo.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619375531/bedbase_4ft6_10i_11_cggmrs.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619375532/bedbase_4ft6_14i_11_hlbllu.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619379378/tome_4ft6_14i_11_yaw9cm.png'



       },
       feet5: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619384818/bedbase_5ft_6i_11_uqmpcn.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619384818/bedbase_5ft_10i_11_dejnzv.webp',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619384819/bedbase_5ft_14i_11_sn2xrm.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619384823/tome_5ft_14i_11_dchgo2.webp'



       },
       feet6: {
           depthx1:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619433445/bedbase_6ft_6i_11_alhq2j.png',
           depthx2:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619433444/bedbase_6ft_10i_11_lj2gpl.png',
           depthx3:
               'https://res.cloudinary.com/furniturebuild/image/upload/v1619433448/bedbase_6ft_14i_11_rx0biq.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619433452/tome_6ft_14i_11_zvengx.png'


       }
    

   },
    white: {
       feet2: {
           depthx1:
               
			  /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619477310/bedbase_3ft_6i_14_sa485z.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477311/bedbase_3ft_10i_14_faz8ss.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476267/bedbase_3ft_14i_14_g3wwkf.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619477311/tome_3ft_14i_14_ncbke4.png'



       },
       feet4: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477429/bedbase_4ft6_6i_14_eb0efx.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477430/bedbase_4ft6_10i_14_qgwzhi.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476281/bedbase_4ft6_14i_14_hrvegr.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619477430/tome_4ft6_14i_14_ds5n7n.png'



       },
       feet5: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477497/bedbase_5ft_6i_14_ybrcsf.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477497/bedbase_5ft_10i_14_xww8nm.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476298/bedbase_5ft_14i_14_fc7b3s.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619477497/tome_5ft_14i_14_xmlmnd.png'



       },
       feet6: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477561/bedbase_6ft_6i_14_ntxofh.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619477560/bedbase_6ft_10i_14_whkacl.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619476313/bedbase_6ft_14i_14_ujc6e0.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619477561/tome_6ft_14i_14_tugp16.png'


       }
    

   },
    lime: {
       feet2: {
           depthx1:
               
			  /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619898996/bedbase_3ft_6i_6_tbmx8p.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898997/bedbase_3ft_10i_6_xtwlb9.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898324/bedbase_3ft_14i_6_djjcsl.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619898998/tome_3ft_14i_6_jrg6ht.png'



       },
       feet4: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899019/bedbase_4ft6_6i_6_e2ut7y.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899019/bedbase_4ft6_10i_6_ewjxdf.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898347/bedbase_4ft6_14i_6_afihtc.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899020/tome_4ft6_14i_6_d0sp1z.png'



       },
       feet5: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899039/bedbase_5ft_6i_6_vgtqqa.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899038/bedbase_5ft_10i_6_tavqqg.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898375/bedbase_5ft_14i_6_kmjxxc.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899041/tome_5ft_14i_6_yof2e1.png'



       },
       feet6: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899058/bedbase_6ft_6i_6_mvol2s.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619899059/bedbase_6ft_10i_6_zdkcyo.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619898402/bedbase_6ft_14i_6_v1ydhx.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619899060/tome_6ft_14i_6_ydeqvw.png'


       }
    

   },
    duck: {
       feet2: {
           depthx1:
               
			  /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619915774/bedbase_3ft_6i_4_lqrdlw.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915776/bedbase_3ft_10i_4_b4gjl1.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914876/bedbase_3ft_14i_4_kvd1tk.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619915775/tome_3ft_14i_4_sg5z21.png'



       },
       feet4: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915819/bedbase_4ft6_6i_4_rfhayt.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915819/bedbase_4ft6_10i_4_zjchjo.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914918/bedbase_4ft6_14i_4_yf1ien.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619915822/tome_4ft6_14i_4_kudbo0.png'



       },
       feet5: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915849/bedbase_5ft_6i_4_fpg2dr.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915849/bedbase_5ft_10i_4_qm0jho.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914946/bedbase_5ft_14i_4_myb9pn.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619915852/tome_5ft_14i_4_uc6gju.png'



       },
       feet6: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915878/bedbase_6ft_6i_4_pnefqk.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619915879/bedbase_6ft_10i_4_vywity.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619914994/bedbase_6ft_14i_4_xp2srm.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619915881/tome_6ft_14i_4_bwaey4.png'


       }
    

   },
    orchid: {
       feet2: {
           depthx1:
               
			  /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619986976/bedbase_3ft_6i_8_gspsrw.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619986975/bedbase_3ft_10i_8_g4aswj.webp',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971872/bedbase_3ft_14i_8_zwrziu.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619986976/tome_3ft_14i_8_yrzqbf.png'



       },
       feet4: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619987083/bedbase_4ft6_6i_8_c3qqmj.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619987083/bedbase_4ft6_10i_8_hvvvfg.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971895/bedbase_4ft6_14i_8_shmeaa.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619987084/tome_4ft6_14i_8_ocmv98.png'



       },
       feet5: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619987131/bedbase_5ft_6i_8_pvvvuj.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619987131/bedbase_5ft_10i_8_xnkm0a.png',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971915/bedbase_5ft_14i_8_gpbqwn.webp',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619987133/tome_5ft_14i_8_kxvxgi.png'



       },
       feet6: {
           depthx1:
              /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619987179/bedbase_6ft_6i_8_ys7i55.png',
           depthx2:
              /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619987180/bedbase_6ft_10i_8_kp4ci2.webp',
           depthx3:
              /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619971948/bedbase_6ft_14i_8_ujbrlu.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619987181/tome_6ft_14i_8_xjxtbh.png'


       }
    

    },
	graphite: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619840175/bedbase_3ft_6i_32_mjvsxx.png',
          depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840169/bedbase_3ft_10i_32_ftbfsh.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840168/bedbase_3ft_14i_32_hfj8ze.png',
          storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619840462/tome_3ft_14i_32_z7hep3.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840561/bedbase_4ft6_6i_32_o5cfu7.png',
        depthx2:
           /*10*/  
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619840562/bedbase_4ft6_10i_32_uwn6av.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840571/bedbase_4ft6_14i_32_n5zrv5.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619840625/tome_4ft6_14i_32_fm0dg3.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840706/bedbase_5ft_6i_32_udh8fb.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840705/bedbase_5ft_10i_32_bssl20.png',
        depthx3:
           /*14*/  
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619840701/bedbase_5ft_14i_32_zvf3rg.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619840707/tome_5ft_14i_32_gpvrgx.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840871/bedbase_6ft_6i_32_ktorqp.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619840874/bedbase_6ft_10i_32_jiajez.png',
        depthx3:
           /*14*/  
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619840870/bedbase_6ft_14i_32_yifkaz.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619840889/tome_6ft_14i_32_l3i1dt.png'


        }
 

    },
	marine: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919009/bedbase_3ft_6i_34_dsc6ad.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919009/bedbase_3ft_10i_34_sgy7yo.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919010/bedbase_3ft_14i_34_ygucye.png',
          storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919041/tome_3ft_14i_34_rzi21v.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919240/bedbase_4ft6_6i_34_ykowj1.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919242/bedbase_4ft6_10i_34_i4zsk0.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919243/bedbase_4ft6_14i_34_zfkxbz.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919244/tome_4ft6_14i_34_hrrygr.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919307/bedbase_5ft_6i_34_ykmhov.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919304/bedbase_5ft_10i_34_co933v.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919304/bedbase_5ft_14i_34_wu50vl.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919310/tome_5ft_14i_34_zhgnyj.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919385/bedbase_6ft_6i_34_j050d3.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919385/bedbase_6ft_10i_34_vctiav.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919389/tome_6ft_14i_34_ie28gx.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919393/tome_6ft_14i_34_1_tyg0pn.png'


        }
    },
	emerald: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619924987/bedbase_3ft_6i_35_ni6kn7.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619924990/bedbase_3ft_10i_35_ouzvi1.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619924984/bedbase_3ft_14i_35_vtqvfm.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619924993/tome_3ft_14i_35_gdakbl.png'
    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925113/bedbase_4ft6_6i_35_o7eo3p.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925113/bedbase_4ft6_10i_35_rs6ams.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925108/bedbase_4ft6_14i_35_hi23vj.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619925111/tome_4ft6_14i_35_kpr2pb.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925253/bedbase_5ft_6i_35_mzt7kd.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925256/bedbase_5ft_10i_35_z270vp.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925253/bedbase_5ft_14i_35_mc3vsg.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619925256/tome_5ft_14i_35_mqy6o6.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925273/bedbase_6ft_6i_35_fhmkag.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925271/bedbase_6ft_10i_35_ppw5ql.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619925269/bedbase_6ft_14i_35_mlkers.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619925273/tome_6ft_14i_35_hvky1y.png'


        }
 

   },
    deggb: {
        feet2: {
            depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949335/bedbase_3ft_6i_36_o0umcg.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949334/bedbase_3ft_10i_36_groa2q.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949335/bedbase_3ft_14i_36_xuntxa.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949339/tome_3ft_14i_36_xhafm3.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949428/bedbase_4ft6_6i_36_wp9bgd.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949428/bedbase_4ft6_10i_36_hwpyiv.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949428/bedbase_4ft6_14i_36_xu63f0.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949439/tome_4ft6_14i_36_mjud1k.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949505/bedbase_5ft_6i_36_ytgkqn.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949505/bedbase_5ft_10i_36_cbw5fq.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949505/bedbase_5ft_14i_36_iib6ox.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949505/tome_5ft_14i_36_eioxys.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949581/bedbase_6ft_6i_36_crpvq0.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949584/bedbase_6ft_10i_36_g4egei.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949582/bedbase_6ft_14i_36_p91y9l.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949580/tome_6ft_14i_36_iv1zvo.png'


        }
 

    },
	silver: {
        feet2: {
            depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619665861/bedbase_3ft_6i_30_rxh9en.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619665858/bedbase_3ft_10i_30_ptf7io.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619665861/bedbase_3ft_14i_30_krhmkj.png',
           storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619665859/tome_3ft_14i_30_uwqeqo.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754597/bedbase_4ft6_6i_30_wgitir.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754595/bedbase_4ft6_10i_30_uwoabr.png',
        depthx3:
           /*14*/  		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619754598/bedbase_4ft6_14i_30_vmmd8m.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619754600/tome_4ft6_14i_30_prmeam.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754747/bedbase_5ft_6i_30_fssvi7.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754747/bedbase_5ft_10i_30_uyec0h.png',
        depthx3:
           /*14*/  		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619754747/bedbase_5ft_14i_30_agfk4o.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619754755/tome_5ft_14i_30_dcpgfg.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754874/bedbase_6ft_6i_30_clg7zu.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619754874/bedbase_6ft_10i_30_yn8awg.png',
        depthx3:
           /*14*/ 		   'https://res.cloudinary.com/furniturebuild/image/upload/v1619754877/bedbase_6ft_14i_30_evjhnr.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1619754879/tome_6ft_14i_30_tgm5wt.png'


        }
 

    },
    silgry: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620047906/bedbase_3ft_6i_29_qlefdj.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047906/bedbase_3ft_10i_29_ctaiwt.webp',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047042/bedbase_3ft_14i_29_blh6mk.webp',
          storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620047906/tome_3ft_14i_29_ibryl7.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047943/bedbase_4ft6_6i_29_xesyem.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047943/bedbase_4ft6_10i_29_u3eibq.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047108/bedbase_4ft6_14i_29_chpgwj.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620047944/tome_4ft6_14i_29_kaw6ck.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048068/bedbase_5ft_6i_29_xvejb3.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048069/bedbase_5ft_10i_29_rdbqgw.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047149/bedbase_5ft_14i_29_zijjcg.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048070/tome_5ft_14i_29_gxy8yo.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048125/bedbase_6ft_6i_29_usbqoa.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048126/bedbase_6ft_10i_29_oqbeg7.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620047199/bedbase_6ft_14i_29_wmg4cy.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048128/tome_6ft_14i_29_cweqts.png'


        }
 

   },
    cream: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620087350/bedbase_3ft_6i_3_f6g58d.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087350/bedbase_3ft_10i_3_xpmmbn.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085370/bedbase_3ft_14i_3_gh8kdv.webp',
          storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620087350/tome_3ft_14i_3_vqcbyv.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087403/bedbase_4ft6_6i_3_giuw4r.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087403/bedbase_4ft6_10i_3_fdt5nj.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085401/bedbase_4ft6_14i_3_gkxefi.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620087406/tome_4ft6_14i_3_iasyv0.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087463/bedbase_5ft_6i_3_tpsiu9.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087463/bedbase_5ft_10i_3_rzic16.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085425/bedbase_5ft_14i_3_hsqhco.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620087464/tome_5ft_14i_3_ukbgbb.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087510/bedbase_6ft_6i_3_ujmjgp.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620087510/bedbase_6ft_10i_3_g2sgfl.webp',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620085453/bedbase_6ft_14i_3_xsitrt.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620087512/tome_6ft_14i_3_cbicoj.png'


        }
 

    },
    chocolate: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100212/bedbase_3ft_6i_2_wlgm5c.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100213/bedbase_3ft_10i_2_xlblrs.png',
           depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096787/bedbase_3ft_14i_2_tmi61c.webp',
          storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100213/tome_3ft_14i_2_utzytt.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100328/bedbase_4ft6_6i_2_krmcep.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100328/bedbase_4ft6_10i_2_plwtzs.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096859/bedbase_4ft6_14i_2_hpgxeb.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100327/tome_4ft6_14i_2_fcihve.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100376/bedbase_5ft_6i_2_fec5fh.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100378/bedbase_5ft_10i_2_kuocxt.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096911/bedbase_5ft_14i_2_kkj7kt.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100376/tome_5ft_14i_2_lcsztn.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100426/bedbase_6ft_6i_2_asy8kk.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100426/bedbase_6ft_10i_2_eeheuy.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620096959/bedbase_6ft_14i_2_jmnnxf.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100426/tome_6ft_14i_2_gkrbhh.png'


        }
 

   },
    pink: {
        feet2: {
           depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620008704/bedbase_3ft_6i_37_p0lfs4.png',
           depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620008703/bedbase_3ft_10i_37_bseodm.png',
          depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620008703/bedbase_3ft_14i_37_pfklml.webp',
          storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620008712/tome_3ft_14i_37_e48m1v.png'



         },
       feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009349/bedbase_4ft6_6i_37_rbiikv.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009348/bedbase_4ft6_10i_37_nxbf9u.png',
        depthx3:
           /*14*/ 
		   
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620009351/bedbase_4ft6_14i_37_aylwa1.webp',
		   
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620009352/tome_4ft6_14i_37_l5y7lz.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009603/bedbase_5ft_6i_37_dzlf4t.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009604/bedbase_5ft_10i_37_rdh0xj.png',
        depthx3:
           /*14*/  
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620009598/bedbase_5ft_14i_37_hnplsu.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620009600/tome_5ft_14i_37_xyqnzc.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009892/bedbase_6ft_6i_37_b4xrrq.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620009891/bedbase_6ft_10i_37_wnptk7.webp',
        depthx3:
           /*14*/  
		   'https://res.cloudinary.com/furniturebuild/image/upload/v1620009900/bedbase_6ft_14i_37_ljaqxa.webp',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620009894/tome_6ft_14i_37_p7zvxj.png'


        }
 

   },
    asphalt: {
        feet2: {
        depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620015731/bedbase_3ft_6i_31_ofe2yt.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015728/bedbase_3ft_10i_31_k6w9le.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015727/bedbase_3ft_14i_31_ydtk6z.webp',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620015733/tome_3ft_14i_31_vrdout.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015739/bedbase_4ft6_6i_31_blkqjp.webp',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015738/bedbase_4ft6_10i_31_tlk7cc.webp',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015737/bedbase_4ft6_14i_31_kwo4tt.webp',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620015740/tome_4ft6_14i_31_xxvssw.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015759/bedbase_5ft_6i_31_jbuddg.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015760/bedbase_5ft_10i_31_xccumo.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015760/bedbase_5ft_14i_31_fbndi5.webp',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620015760/tome_5ft_14i_31_mrh2jh.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015793/bedbase_6ft_6i_31_nmcyse.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015791/bedbase_6ft_10i_31_jtbu8f.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620015799/bedbase_6ft_14i_31_dg3jj9.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620015800/tome_6ft_14i_31_fxnajq.png'


    }
 

  },
  beige: {
    feet2: {
        depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620037458/bedbase_3ft_6i_38_jcta52.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037458/bedbase_3ft_10i_38_i7hrkt.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037460/bedbase_3ft_14i_38_vrphif.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620037464/tome_3ft_14i_38_xq5kls.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037664/bedbase_4ft6_6i_38_h4vblq.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037662/bedbase_4ft6_10i_38_cfn4qc.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037662/bedbase_4ft6_14i_38_g1ssu7.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620037662/tome_4ft6_14i_38_djlqh1.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037826/bedbase_5ft_6i_38_dwsgru.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037829/bedbase_5ft_10i_38_yqhx39.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037826/bedbase_5ft_14i_38_ljcb9b.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620037827/tome_5ft_14i_38_ftqytk.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037894/bedbase_6ft_6i_38_vuax7l.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037894/bedbase_6ft_10i_38_mv0bsu.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620037896/bedbase_6ft_14i_38_i4kb7q.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620037900/tome_6ft_14i_38_glqm9m.png'


    }
 

},
mustard: {
    feet2: {
        depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620051768/bedbase_3ft_6i_39_nrqkmp.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620051770/bedbase_3ft_10i_39_easkbx.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620051768/bedbase_3ft_14i_39_stuzf8.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620051774/tome_3ft_14i_39_jwkrud.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620052831/bedbase_4ft6_6i_39_aeqafq.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620052832/bedbase_4ft6_10i_39_k2kkcj.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620052834/bedbase_4ft6_14i_39_tyi8yi.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620052836/tome_4ft6_14i_39_nwcjpu.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620053189/bedbase_5ft_6i_39_cq5dmo.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620053187/bedbase_5ft_10i_39_twkyer.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620053188/bedbase_5ft_14i_39_zrpzfx.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620053192/tome_5ft_14i_39_kqld7s.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620053520/bedbase_6ft_6i_39_iytryp.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620053522/bedbase_6ft_10i_39_gt28ql.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620053517/bedbase_6ft_14i_39_s9gjwx.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620053534/tome_6ft_14i_39_jkcyyu.png'


    }
 

  },
  bpvelvet: {
    feet2: {
        depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095379/bedbase_3ft_6i_33_i9ctyo.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095377/bedbase_3ft_10i_33_drnuxh.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095378/bedbase_3ft_14i_33_zli4s4.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095385/tome_3ft_14i_33_kjdkdw.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095497/bedbase_4ft6_6i_33_t17ane.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095500/bedbase_4ft6_10i_33_plsxtx.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095498/bedbase_4ft6_14i_33_q6waom.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095501/tome_4ft6_14i_33_axxznm.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095569/bedbase_5ft_6i_33_clfljf.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095565/bedbase_5ft_10i_33_scihss.webp',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095564/bedbase_5ft_14i_33_mh6wpq.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095571/tome_5ft_14i_33_oiz8ou.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095672/bedbase_6ft_6i_33_spjdpy.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095674/bedbase_6ft_10i_33_sudnrx.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620095674/bedbase_6ft_14i_33_qxadzb.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620095676/tome_6ft_14i_33_lqneab.png'


      }
 

    },
	plum: {
    feet2: {
        depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620115358/bedbase_3ft_6i_9_g3j3ku.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115358/bedbase_3ft_10i_9_qwmbju.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115358/bedbase_3ft_14i_9_fg3eub.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620115361/tome_3ft_14i_9_dxx3vk.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115414/bedbase_4ft6_6i_9_lwq3fa.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115411/bedbase_4ft6_10i_9_melwcx.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620115410/bedbase_4ft6_14i_9_pb9wzf.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620115411/tome_4ft6_14i_9_zlslhy.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119809/bedbase_5ft_6i_9_gxgtne.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119809/bedbase_5ft_10i_9_vswpmf.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119809/bedbase_5ft_14i_9_oz9kvk.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120018/tome_5ft_14i_9_l7q7ae.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119828/bedbase_6ft_6i_9_f8scpa.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119828/bedbase_6ft_10i_9_rqxnrv.webp',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620119836/bedbase_6ft_14i_9_r9n4ya.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620119837/tome_6ft_14i_9_g4xbtd.webp'


         }
 

    },
	charcoal: {
    feet2: {
        depthx1:
            
           /*6*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137024/bedbase_3ft_6i_1_fzqekq.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137022/bedbase_3ft_10i_1_dnn4fk.webp',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137024/bedbase_3ft_14i_1_vpyuw1.webp',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137026/tome_3ft_14i_1_dfwyvk.png'



    },
    feet4: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137252/bedbase_4ft6_6i_1_ajmqpm.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137252/bedbase_4ft6_10i_1_pt7mor.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137250/bedbase_4ft6_14i_1_twosr6.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137254/tome_4ft6_14i_1_uhlhwv.png'



    },
    feet5: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162521/bedbase_5ft_6i_1_1_xw83nd.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137484/bedbase_5ft_10i_1_d4ozpo.png',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137322/bedbase_5ft_14i_1_m7ilbq.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137323/tome_5ft_14i_1_zmtk1p.png'



    },
    feet6: {
        depthx1:
           /*6*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137395/bedbase_6ft_6i_1_xxbfex.png',
        depthx2:
           /*10*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137395/bedbase_6ft_10i_1_lbck4t.webp',
        depthx3:
           /*14*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620137396/bedbase_6ft_14i_1_hcytlv.png',
        storageOttoman: 'https://res.cloudinary.com/furniturebuild/image/upload/v1620137397/tome_6ft_14i_1_jitnmr.png'


      }
 

   }
   

}





























const allstorage = {
   
    gray: {
       feet2:{
           depthx3:{
               storagex6:
                   [
                       "https://res.cloudinary.com/furniturebuild/image/upload/v1618690890/reference_drawer_normalright_tnfijp.png",
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618743710/garybig_qwjiv2.png'
               ]
               
           }
       },
       feet4: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618690023/graydrawer_jumbo_u99sgx.png",
               storagex2:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690132/graydrawer_mini_ksuwx5.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690023/graydrawer_jumbo_u99sgx.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690429/leftgraydrawer_mini_rc4y9z.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618690392/rightgraydrawer_mini_r3chto.png'
                       
               ],
               storagex4:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690429/leftgraydrawer_mini_rc4y9z.png' ,
                         'https://res.cloudinary.com/furniturebuild/image/upload/v1618690132/graydrawer_mini_ksuwx5.png',	'https://res.cloudinary.com/furniturebuild/image/upload/v1618690392/rightgraydrawer_mini_r3chto.png'
                       
               ],
               storagex5:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690023/graydrawer_jumbo_u99sgx.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618742947/garybig_kcsdei.png'
               ],
               storagex6:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690392/rightgraydrawer_mini_r3chto.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618742947/garybig_kcsdei.png'
               ],
               storagex7:
                   [
                       
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618690429/leftgraydrawer_mini_rc4y9z.png',	'https://res.cloudinary.com/furniturebuild/image/upload/v1618690392/rightgraydrawer_mini_r3chto.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618742947/garybig_kcsdei.png'
               ]
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618690726/grayreference_drawer_srszti.png",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618690726/grayreference_drawer_srszti.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618690787/reference_drawer_miniright_odzqun.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618690902/reference_drawer_normalleft_poeqbn.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618690890/reference_drawer_normalright_tnfijp.png'
                       
               ],
               storagex4:
                   [
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618690902/reference_drawer_normalleft_poeqbn.png',     
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618690787/reference_drawer_miniright_odzqun.png',	'https://res.cloudinary.com/furniturebuild/image/upload/v1618690890/reference_drawer_normalright_tnfijp.png'
                       
               ],
           storagex5:
                   [
                       "https://res.cloudinary.com/furniturebuild/image/upload/v1618690726/grayreference_drawer_srszti.png",
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618743710/garybig_qwjiv2.png'
               ],
           storagex6:
                   [
                       "https://res.cloudinary.com/furniturebuild/image/upload/v1618690890/reference_drawer_normalright_tnfijp.png",
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618743710/garybig_qwjiv2.png'
               ],
           storagex7:
                   [
                       
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618690902/reference_drawer_normalleft_poeqbn.png',	"https://res.cloudinary.com/furniturebuild/image/upload/v1618690890/reference_drawer_normalright_tnfijp.png",
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618743710/garybig_qwjiv2.png'
               ]
           
           }
       },
    
       feet5: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618440607/graybox14_hfxg62.png",
               storagex2:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618442013/box2_vijtrj.webp',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618440607/graybox14_hfxg62.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618515299/grayboxr14_ptsdms.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618523644/grayboxl14_wrbgqw.png'
                       
               ],
               storagex4:
                   [
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618515299/grayboxr14_ptsdms.png',     
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618442013/box2_vijtrj.webp',	'https://res.cloudinary.com/furniturebuild/image/upload/v1618523644/grayboxl14_wrbgqw.png'
                       
               ],
               storagex5:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618440607/graybox14_hfxg62.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618744230/5tttttfetgray_zbd3uu.png'
               ],
             storagex6:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618523644/grayboxl14_wrbgqw.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618744230/5tttttfetgray_zbd3uu.png'
               ],
               storagex7:
                   [
                       
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618515299/grayboxr14_ptsdms.png',	'https://res.cloudinary.com/furniturebuild/image/upload/v1618523644/grayboxl14_wrbgqw.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618744230/5tttttfetgray_zbd3uu.png'
               ]
               
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618494682/10gray_z06m6u.webp",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618494682/10gray_z06m6u.webp',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618494731/10boxside_huj8yu.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618581116/10boxsiderl_bga99z.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618581261/10drawerminiri_phavvc.png'
                       
               ],
               storagex4:
                   [
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618581116/10boxsiderl_bga99z.png',     
                   'https://res.cloudinary.com/furniturebuild/image/upload/v1618494731/10boxside_huj8yu.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618581261/10drawerminiri_phavvc.png'
                       
               ],
               storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618494682/10gray_z06m6u.webp',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618744584/105garybig_v3vvuv.png'
               ],
               storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618581261/10drawerminiri_phavvc.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618744584/105garybig_v3vvuv.png'
               ],
               storagex7:
                [
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618581116/10boxsiderl_bga99z.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618581261/10drawerminiri_phavvc.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618744584/105garybig_v3vvuv.png'
               ]
               
           }
       },
    
      feet6: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618440607/graybox14_hfxg62.png",
               storagex2:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618585286/14gray_ksfxie.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618440607/graybox14_hfxg62.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618586538/14grayri_pmw4s4.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618586652/14drawer_normal_front_fgzkga.png'
                       
               ],
               storagex4:
                   [
                     'https://res.cloudinary.com/furniturebuild/image/upload/v1618586538/14grayri_pmw4s4.png', 
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618585286/14gray_ksfxie.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618586652/14drawer_normal_front_fgzkga.png'
                       
               ],
               storagex5:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618440607/graybox14_hfxg62.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618744923/6fetgray_hzjtpd.png'
               ],
               storagex6:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618586652/14drawer_normal_front_fgzkga.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618744923/6fetgray_hzjtpd.png'
               ],
                storagex7:
                   [
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618586538/14grayri_pmw4s4.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618586652/14drawer_normal_front_fgzkga.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618744923/6fetgray_hzjtpd.png'
               ]
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618494682/10gray_z06m6u.webp",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618494682/10gray_z06m6u.webp',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618598479/graydrawer_normal_frontrlefti_n078fu.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618598231/graydrawer_normal_front_plmt6w.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618598303/graydrawer_normal_frontri_p6ecg1.png'
                       
               ],
               storagex4:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618598231/graydrawer_normal_front_plmt6w.png',  
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618598479/graydrawer_normal_frontrlefti_n078fu.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618598303/graydrawer_normal_frontri_p6ecg1.png'
                       
               ],
                storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618494682/10gray_z06m6u.webp',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618745006/6-10garybig_evz4oj.png'
               ],
               storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618598303/graydrawer_normal_frontri_p6ecg1.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618745006/6-10garybig_evz4oj.png'
               ],
                storagex7:
                [
                
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618598231/graydrawer_normal_front_plmt6w.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618598303/graydrawer_normal_frontri_p6ecg1.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618745006/6-10garybig_evz4oj.png'
               ]
               
           }
       }
       
       
       
   },
    black: {
       feet4: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618691258/blackdrawer_jumbo_bbzzbh.png",
               storagex2:
                   [
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618691258/blackdrawer_jumbo_bbzzbh.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618691294/blackdrawer_mini_tbw80r.png'
                       
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618691306/leftblackdrawer_mini_nfvtg0.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618691319/rightblackdrawer_mini_j3lbqf.png'
                       
               ],
               storagex4:
                   [
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618691306/leftblackdrawer_mini_nfvtg0.png',     
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618691294/blackdrawer_mini_tbw80r.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618691319/rightblackdrawer_mini_j3lbqf.png'
                       
               ],
           storagex5:[
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618691258/blackdrawer_jumbo_bbzzbh.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618745565/4black_yxzd3k.png'
                       
               ],
           storagex6:[
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618691319/rightblackdrawer_mini_j3lbqf.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618745565/4black_yxzd3k.png'
                       
               ],
             storagex7:[
                     'https://res.cloudinary.com/furniturebuild/image/upload/v1618691306/leftblackdrawer_mini_nfvtg0.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618691319/rightblackdrawer_mini_j3lbqf.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618745565/4black_yxzd3k.png'
                       
               ]
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618691714/blackreference_drawer_vmdlmf.png",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618691714/blackreference_drawer_vmdlmf.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618691830/rightblackreference_drawer_mini_gqh7g7.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618691795/blackreference_drawer_normalleft_nnocly.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618696900/rightminirrblackreference_drawer_mini_zdypan.png'
                       
               ],
               storagex4:
                   [
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618691795/blackreference_drawer_normalleft_nnocly.png',  
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618691830/rightblackreference_drawer_mini_gqh7g7.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618696900/rightminirrblackreference_drawer_mini_zdypan.png'
                       
               ],
               storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618691714/blackreference_drawer_vmdlmf.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618745728/10black_y4enf4.png'
               ],
           storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618696900/rightminirrblackreference_drawer_mini_zdypan.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618745728/10black_y4enf4.png'
               ],
               storagex7:
                [
                
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618691795/blackreference_drawer_normalleft_nnocly.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618696900/rightminirrblackreference_drawer_mini_zdypan.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618745728/10black_y4enf4.png'
               ]
               
           }
       },
       feet5: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618495084/black14_lfzbzq.png",
               storagex2:
                   ["https://res.cloudinary.com/furniturebuild/image/upload/v1618495084/black14_lfzbzq.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618495205/blackdrawermini14_tdyxrl.png"],
               storagex3:
                   ["https://res.cloudinary.com/furniturebuild/image/upload/v1618581639/blackdrawermini14ri_moda2r.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618581741/blackboxl14_jdvt40.png"],
               storagex4:
                   [
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618581639/blackdrawermini14ri_moda2r.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618495205/blackdrawermini14_tdyxrl.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618581741/blackboxl14_jdvt40.png"],
                    
               storagex5:
                   ["https://res.cloudinary.com/furniturebuild/image/upload/v1618495084/black14_lfzbzq.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618745911/14black_kh7uxz.png"],
               storagex6:
                   ["https://res.cloudinary.com/furniturebuild/image/upload/v1618581741/blackboxl14_jdvt40.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618745911/14black_kh7uxz.png"],
               storagex7:
                   [
               "https://res.cloudinary.com/furniturebuild/image/upload/v1618581639/blackdrawermini14ri_moda2r.png",	"https://res.cloudinary.com/furniturebuild/image/upload/v1618581741/blackboxl14_jdvt40.png",
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618745911/14black_kh7uxz.png"]
               
           },
           depthx2: {
               storagex1:
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618495399/10boxsideblack_f0wa9s.png",
               storagex2:
                    ["https://res.cloudinary.com/furniturebuild/image/upload/v1618495399/10boxsideblack_f0wa9s.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618495453/10drawermini_pig9k7.png"
               ],
               storagex3:
                   ["https://res.cloudinary.com/furniturebuild/image/upload/v1618581924/black10boxsiderl_iydvpq.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618581967/blackdrawerminiri_mtx1xm.png"
               ],
               storagex4:
                   [
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618581924/black10boxsiderl_iydvpq.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618495453/10drawermini_pig9k7.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618581967/blackdrawerminiri_mtx1xm.png"
               ],
               storagex5:
                    ["https://res.cloudinary.com/furniturebuild/image/upload/v1618495399/10boxsideblack_f0wa9s.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618746182/10-5black_r2xvjh.png"
               ],
               storagex6:
                    ["https://res.cloudinary.com/furniturebuild/image/upload/v1618581967/blackdrawerminiri_mtx1xm.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618746182/10-5black_r2xvjh.png"
               ],
               storagex7:
                    [
                    
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618581924/black10boxsiderl_iydvpq.png", "https://res.cloudinary.com/furniturebuild/image/upload/v1618581967/blackdrawerminiri_mtx1xm.png",
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618746182/10-5black_r2xvjh.png"
               ]
               
           }
       },
       feet6: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618495084/black14_lfzbzq.png",
               storagex2:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618495084/black14_lfzbzq.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618600279/14blackri_w5bqux.png'
                       
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618601097/14blackleft_omsi7b.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618601034/14blackfrond_nm3pee.png'
                       
               ],
               storagex4:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618601097/14blackleft_omsi7b.png',            
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618600279/14blackri_w5bqux.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618601034/14blackfrond_nm3pee.png'
                       
               ],
           storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618495084/black14_lfzbzq.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751430/10-6black_jhfnay.png'
               ],
             storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618601034/14blackfrond_nm3pee.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751430/10-6black_jhfnay.png'
               ],
           storagex7:
                [
                
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618601097/14blackleft_omsi7b.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618601034/14blackfrond_nm3pee.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751430/10-6black_jhfnay.png'
               ]
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618495399/10boxsideblack_f0wa9s.png",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618495399/10boxsideblack_f0wa9s.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618600902/blackdrawer_normal_frontrlefti_ulq50z.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618601205/blackdrawer_normal_front_ldnxcx.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618601260/blackdrawer_normal_frontleft_bcxwsw.png'
                       
               ],
               storagex4:
                   [
                    
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618601205/blackdrawer_normal_front_ldnxcx.png',
                    'https://res.cloudinary.com/furniturebuild/image/upload/v1618600902/blackdrawer_normal_frontrlefti_ulq50z.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618601260/blackdrawer_normal_frontleft_bcxwsw.png'
                       
               ],
               storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618495399/10boxsideblack_f0wa9s.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751563/10-6blacsmalllk_dszywh.png'
               ],
            storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618601260/blackdrawer_normal_frontleft_bcxwsw.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751563/10-6blacsmalllk_dszywh.png'
               ],
             storagex7:
                [
                
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618601205/blackdrawer_normal_front_ldnxcx.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618601260/blackdrawer_normal_frontleft_bcxwsw.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751563/10-6blacsmalllk_dszywh.png'
               ]
               
           }
       }
       
   },
    blue: {
       feet4: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618697234/bluedrawer_jumbo_cavdl5.png",
               storagex2:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697234/bluedrawer_jumbo_cavdl5.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697265/bluedrawer_mini_seuqxr.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697345/leftbluedrawer_mini_lijt3u.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618697331/rightblueedrawer_mini_zibncg.png'
                       
               ],
               storagex4:
                   [
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618697345/leftbluedrawer_mini_lijt3u.png',             
                     'https://res.cloudinary.com/furniturebuild/image/upload/v1618697265/bluedrawer_mini_seuqxr.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618697331/rightblueedrawer_mini_zibncg.png'
                       
               ],
           storagex5:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697234/bluedrawer_jumbo_cavdl5.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618751716/4blue_pzme35.png'
               ],
           storagex6:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697331/rightblueedrawer_mini_zibncg.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618751716/4blue_pzme35.png'
               ],
               storagex7:
                   [
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618697345/leftbluedrawer_mini_lijt3u.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618697331/rightblueedrawer_mini_zibncg.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618751716/4blue_pzme35.png'
               ]
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618697485/blueeference_drawer_qejkjx.png",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618697485/blueeference_drawer_qejkjx.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618697517/rightbluereference_drawer_mini_fxzpg2.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697611/blueeereference_drawer_normalleft_hz5bxw.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618697666/rightminirrblueereference_drawer_mini_ooau6o.png'
                       
               ],
               storagex4:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697611/blueeereference_drawer_normalleft_hz5bxw.png',     
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618697517/rightbluereference_drawer_mini_fxzpg2.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618697666/rightminirrblueereference_drawer_mini_ooau6o.png'
                       
               ],
           storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618697485/blueeference_drawer_qejkjx.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751832/10blueeference_drawer_sinlbd.png'
               ],
              storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618697666/rightminirrblueereference_drawer_mini_ooau6o.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751832/10blueeference_drawer_sinlbd.png'
               ],
               storagex7:
                [
                
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618697611/blueeereference_drawer_normalleft_hz5bxw.png', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618697666/rightminirrblueereference_drawer_mini_ooau6o.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618751832/10blueeference_drawer_sinlbd.png'
               ]
               
           }
       },
       feet5: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618508772/bluebox14_wrwegh.png",
               storagex2:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618508772/bluebox14_wrwegh.png",  
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618508972/bluedrawermini14_pfw1ow.png"],
                  
               storagex3:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618583009/bluedrawermini14ri_dbfwcs.png",  
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618583104/blueboxl14right_rknldn.png"],
               storagex4:[
                   
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618583009/bluedrawermini14ri_dbfwcs.png", 	"https://res.cloudinary.com/furniturebuild/image/upload/v1618508972/bluedrawermini14_pfw1ow.png",  
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618583104/blueboxl14right_rknldn.png"],
                   storagex5:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618508772/bluebox14_wrwegh.png",  
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618753996/5-14_j4r71c.png"],
                  storagex6:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618583104/blueboxl14right_rknldn.png",  
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618753996/5-14_j4r71c.png"],
                  storagex7:[
                   
               "https://res.cloudinary.com/furniturebuild/image/upload/v1618583009/bluedrawermini14ri_dbfwcs.png",  	"https://res.cloudinary.com/furniturebuild/image/upload/v1618583104/blueboxl14right_rknldn.png",  
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618753996/5-14_j4r71c.png"]
                  
                  

           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618511930/10blueboxside_hno2bw.png",
               storagex2:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618511930/10blueboxside_hno2bw.png",
                      "https://res.cloudinary.com/furniturebuild/image/upload/v1618511957/10bluedrawermini_n8cpw2.png"],
               storagex3:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618583244/blue10boxsiderl_elc06v.png",
                      "https://res.cloudinary.com/furniturebuild/image/upload/v1618583321/bluedrawerminiri_qtvbwh.png"],
               storagex4:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618583244/blue10boxsiderl_elc06v.png",                   
                  "https://res.cloudinary.com/furniturebuild/image/upload/v1618511957/10bluedrawermini_n8cpw2.png",
                      "https://res.cloudinary.com/furniturebuild/image/upload/v1618583321/bluedrawerminiri_qtvbwh.png"],
                storagex5:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618511930/10blueboxside_hno2bw.png",
                      "https://res.cloudinary.com/furniturebuild/image/upload/v1618754118/5-10blue_crlxri.png"],
               storagex6:[
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618583321/bluedrawerminiri_qtvbwh.png",
                      "https://res.cloudinary.com/furniturebuild/image/upload/v1618754118/5-10blue_crlxri.png"],
                storagex7:[
                   
               "https://res.cloudinary.com/furniturebuild/image/upload/v1618583244/blue10boxsiderl_elc06v.png",	"https://res.cloudinary.com/furniturebuild/image/upload/v1618583321/bluedrawerminiri_qtvbwh.png",
                      "https://res.cloudinary.com/furniturebuild/image/upload/v1618754118/5-10blue_crlxri.png"]
               
           },

       },
       feet6: {
           depthx3: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618508772/bluebox14_wrwegh.png",
               storagex2:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618508772/bluebox14_wrwegh.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618665773/14blueri_vbc1d3.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618666484/bluereference_drawerright_sblm9n.webp','https://res.cloudinary.com/furniturebuild/image/upload/v1618666381/bluereference_drawerleft_zf9v6f.webp'
                       
               ],
               storagex4:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618666484/bluereference_drawerright_sblm9n.webp',  
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618665773/14blueri_vbc1d3.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618666381/bluereference_drawerleft_zf9v6f.webp'
                       
               ],
               storagex5:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618508772/bluebox14_wrwegh.png',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618754286/6-14blue_mwe8wd.png'
               ],
               storagex6:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618666381/bluereference_drawerleft_zf9v6f.webp',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618754286/6-14blue_mwe8wd.png'
               ],
               storagex7:
                   [
                      'https://res.cloudinary.com/furniturebuild/image/upload/v1618666484/bluereference_drawerright_sblm9n.webp', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618666381/bluereference_drawerleft_zf9v6f.webp',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618754286/6-14blue_mwe8wd.png'
               ]
               
               
           },
           depthx2: {
               storagex1:
                   "https://res.cloudinary.com/furniturebuild/image/upload/v1618511930/10blueboxside_hno2bw.png",
               storagex2:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618511930/10blueboxside_hno2bw.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618666745/bluedrawer_normal_frontri_bsevu3.png'
               ],
               storagex3:
                   [
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618666860/bluereference_drawerleft__nvrwij.webp','https://res.cloudinary.com/furniturebuild/image/upload/v1618666928/bluereference_drawerright__u3atj4.webp'
                       
               ],
               storagex4:
                   [
                       
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618666860/bluereference_drawerleft__nvrwij.webp',
                       'https://res.cloudinary.com/furniturebuild/image/upload/v1618666745/bluedrawer_normal_frontri_bsevu3.png','https://res.cloudinary.com/furniturebuild/image/upload/v1618666928/bluereference_drawerright__u3atj4.webp'
                       
               ],
               storagex5:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618511930/10blueboxside_hno2bw.png',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618754397/6-10blue_10i7_wtas0f.png'
               ],
               storagex6:
                ['https://res.cloudinary.com/furniturebuild/image/upload/v1618666928/bluereference_drawerright__u3atj4.webp',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618754397/6-10blue_10i7_wtas0f.png'
               ],
               storagex7:
                [
                
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618666860/bluereference_drawerleft__nvrwij.webp', 'https://res.cloudinary.com/furniturebuild/image/upload/v1618666928/bluereference_drawerright__u3atj4.webp',
               'https://res.cloudinary.com/furniturebuild/image/upload/v1618754397/6-10blue_10i7_wtas0f.png'
               ]
               
           }
       }
   },
    red: {
       feet4: {
           depthx3: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_jumbo_190_drawer_jumbo_front_14i11_lqcvpj.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_jumbo_190_drawer_jumbo_front_14i11_lqcvpj.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_mini_190_4ft6_drawer_mini_front_14i11_svqv6p.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i11_obcwq6.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i11_zufliv.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i11_obcwq6.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_mini_190_4ft6_drawer_mini_front_14i11_svqv6p.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i11_zufliv.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_jumbo_190_drawer_jumbo_front_14i11_lqcvpj.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i11_xootkm.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i11_zufliv.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i11_xootkm.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i11_obcwq6.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619459483/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i11_zufliv.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619459482/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i11_xootkm.png',
               ]
               
           },
           depthx2: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_jumbo_190_drawer_jumbo_front_10i11_x3vxeh.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_jumbo_190_drawer_jumbo_front_10i11_x3vxeh.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_mini_190_4ft6_drawer_mini_front_10i11_aty1jt.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i11_svaau8.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i11_z7zmxl.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i11_svaau8.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_mini_190_4ft6_drawer_mini_front_10i11_aty1jt.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i11_z7zmxl.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_jumbo_190_drawer_jumbo_front_10i11_x3vxeh.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i11_xrn5v4.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i11_z7zmxl.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i11_xrn5v4.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i11_svaau8.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i11_z7zmxl.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619462318/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i11_xrn5v4.png',
               ]
               
           }
	   },
       feet5: {
           depthx3: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_jumbo_200_drawer_jumbo_front_14i11_fndotu.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_jumbo_200_drawer_jumbo_front_14i11_fndotu.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463250/reference_drawer_mini_200_5ft_drawer_mini_front_14i11_hz2rt8.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463250/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i11_gj9wa8.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i11_m5jne1.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463250/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i11_gj9wa8.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463250/reference_drawer_mini_200_5ft_drawer_mini_front_14i11_hz2rt8.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i11_m5jne1.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_jumbo_200_drawer_jumbo_front_14i11_fndotu.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i11_xmhfb1.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i11_m5jne1.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i11_xmhfb1.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619463250/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i11_gj9wa8.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i11_m5jne1.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619463251/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i11_xmhfb1.png',
               ]
                 
                  

           },
           depthx2: {
                /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_jumbo_200_drawer_jumbo_front_10i11_otcfio.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_jumbo_200_drawer_jumbo_front_10i11_otcfio.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465245/reference_drawer_mini_200_5ft_drawer_mini_front_10i11_ovffzn.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465245/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i11_vccfni.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i11_br0015.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465245/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i11_vccfni.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465245/reference_drawer_mini_200_5ft_drawer_mini_front_10i11_ovffzn.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i11_br0015.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_jumbo_200_drawer_jumbo_front_10i11_otcfio.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i11_gtjeat.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i11_br0015.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i11_gtjeat.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619465245/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i11_vccfni.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i11_br0015.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619465246/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i11_gtjeat.png',
               ]
                
               
           },

       },
       feet6: {
           depthx3: {
              /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619474250/reference_drawer_jumbo_200_drawer_jumbo_front_14i11_jxhiyj.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474250/reference_drawer_jumbo_200_drawer_jumbo_front_14i11_jxhiyj.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_mini_200_6ft_drawer_mini_front_14i11_ail6sg.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i11_qajdd2.webp',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i11_i3cgl1.webp'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i11_qajdd2.webp',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_mini_200_6ft_drawer_mini_front_14i11_ail6sg.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i11_i3cgl1.webp',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619474250/reference_drawer_jumbo_200_drawer_jumbo_front_14i11_jxhiyj.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i11_k6jgde.webp'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i11_i3cgl1.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i11_k6jgde.webp',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i11_qajdd2.webp',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i11_i3cgl1.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619473942/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i11_k6jgde.webp',
               ]
                
               
               
           },
           depthx2: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619474672/reference_drawer_jumbo_200_drawer_jumbo_front_10i11_cycbv9.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474672/reference_drawer_jumbo_200_drawer_jumbo_front_10i11_cycbv9.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_mini_200_6ft_drawer_mini_front_10i11_a7ykcw.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i11_uejopz.webp',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i11_opo0ts.webp'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i11_uejopz.webp',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_mini_200_6ft_drawer_mini_front_10i11_a7ykcw.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i11_opo0ts.webp',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619474672/reference_drawer_jumbo_200_drawer_jumbo_front_10i11_cycbv9.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i11_lwke67.webp'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i11_opo0ts.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i11_lwke67.webp',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i11_uejopz.webp',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i11_opo0ts.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619474671/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i11_lwke67.webp',
               ]
               
           }
       }
    },
    white: {
       feet4: {
           depthx3: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_jumbo_190_drawer_jumbo_front_14i14_elvykq.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_jumbo_190_drawer_jumbo_front_14i14_elvykq.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_mini_190_4ft6_drawer_mini_front_14i14_zlbqjn.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483640/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i14_dfq5eo.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i14_cxblad.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483640/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i14_dfq5eo.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_mini_190_4ft6_drawer_mini_front_14i14_zlbqjn.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i14_cxblad.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_jumbo_190_drawer_jumbo_front_14i14_elvykq.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i14_pv0o7q.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i14_cxblad.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i14_pv0o7q.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619483640/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i14_dfq5eo.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i14_cxblad.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619483641/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i14_pv0o7q.png',
               ]
               
           },
           depthx2: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_jumbo_190_drawer_jumbo_front_10i14_qxy8c1.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_jumbo_190_drawer_jumbo_front_10i14_qxy8c1.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484173/reference_drawer_mini_190_4ft6_drawer_mini_front_10i14_hjl2sz.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484173/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i14_ptjcqc.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i14_z6lygt.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484173/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i14_ptjcqc.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484173/reference_drawer_mini_190_4ft6_drawer_mini_front_10i14_hjl2sz.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i14_z6lygt.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_jumbo_190_drawer_jumbo_front_10i14_qxy8c1.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i14_qbpown.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i14_z6lygt.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i14_qbpown.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484173/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i14_ptjcqc.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i14_z6lygt.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484174/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i14_qbpown.png',
               ]
               
           }
	   },
       feet5: {
           depthx3: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_jumbo_200_drawer_jumbo_front_14i14_xmi7pg.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_jumbo_200_drawer_jumbo_front_14i14_xmi7pg.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484663/reference_drawer_mini_200_5ft_drawer_mini_front_14i14_imgilc.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484663/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i14_ns0cvv.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i14_ltdzg7.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484663/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i14_ns0cvv.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484663/reference_drawer_mini_200_5ft_drawer_mini_front_14i14_imgilc.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i14_ltdzg7.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_jumbo_200_drawer_jumbo_front_14i14_xmi7pg.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i14_wqnckp.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i14_ltdzg7.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i14_wqnckp.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619484663/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i14_ns0cvv.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i14_ltdzg7.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i14_wqnckp.png',
               ]
                 
                  

           },
           depthx2: {
                /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_jumbo_200_drawer_jumbo_front_10i14_gkntdx.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_jumbo_200_drawer_jumbo_front_10i14_gkntdx.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_mini_200_5ft_drawer_mini_front_10i14_dhd8ct.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i14_arl32b.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i14_jrk8wu.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i14_arl32b.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_mini_200_5ft_drawer_mini_front_10i14_dhd8ct.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i14_jrk8wu.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                       /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_jumbo_200_drawer_jumbo_front_10i14_gkntdx.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i14_biybef.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i14_jrk8wu.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i14_biybef.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i14_arl32b.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i14_jrk8wu.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i14_biybef.png',
               ]
                
               
           },

       },
       feet6: {
           depthx3: {
              /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_jumbo_200_drawer_jumbo_front_14i14_xmi7pg.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_jumbo_200_drawer_jumbo_front_14i14_xmi7pg.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_mini_200_6ft_drawer_mini_front_14i14_y7ut0o.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
				     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486157/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i14_aetkdd.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i14_x9abzl.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486157/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i14_aetkdd.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_mini_200_6ft_drawer_mini_front_14i14_y7ut0o.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i14_x9abzl.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619484664/reference_drawer_jumbo_200_drawer_jumbo_front_14i14_xmi7pg.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i14_kxilq8.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i14_x9abzl.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i14_kxilq8.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486157/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i14_aetkdd.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i14_x9abzl.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486156/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i14_kxilq8.png',
               ]
                
               
               
           },
           depthx2: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_jumbo_200_drawer_jumbo_front_10i14_gkntdx.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_jumbo_200_drawer_jumbo_front_10i14_gkntdx.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_mini_200_6ft_drawer_mini_front_10i14_mfmm9o.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i14_kna5gv.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i14_pb0tha.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i14_kna5gv.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_mini_200_6ft_drawer_mini_front_10i14_mfmm9o.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i14_pb0tha.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619485116/reference_drawer_jumbo_200_drawer_jumbo_front_10i14_gkntdx.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i14_ashklw.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i14_pb0tha.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i14_ashklw.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i14_kna5gv.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i14_pb0tha.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619486600/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i14_ashklw.png',
               ]
               
           }
       }
    },
    lime: {
       feet4: {
           depthx3: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_jumbo_190_drawer_jumbo_front_14i6_opcnqs.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_jumbo_190_drawer_jumbo_front_14i6_opcnqs.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910502/reference_drawer_mini_190_4ft6_drawer_mini_front_14i6_nulcrm.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910502/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i6_mpic5k.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i6_ppupt7.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910502/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i6_mpic5k.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910502/reference_drawer_mini_190_4ft6_drawer_mini_front_14i6_nulcrm.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i6_ppupt7.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_jumbo_190_drawer_jumbo_front_14i6_opcnqs.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619910900/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i6_cemoz7.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i6_ppupt7.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619910900/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i6_cemoz7.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619910502/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i6_mpic5k.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619910503/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i6_ppupt7.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619910900/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i6_cemoz7.png',
               ]
               
           },
           depthx2: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_jumbo_190_drawer_jumbo_front_10i6_kckszr.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_jumbo_190_drawer_jumbo_front_10i6_kckszr.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_mini_190_4ft6_drawer_mini_front_10i6_fokg1i.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i6_n1zp6y.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i6_ocujvn.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i6_n1zp6y.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_mini_190_4ft6_drawer_mini_front_10i6_fokg1i.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i6_ocujvn.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_jumbo_190_drawer_jumbo_front_10i6_kckszr.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i6_ei17vs.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i6_ocujvn.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i6_ei17vs.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i6_n1zp6y.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i6_ocujvn.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911205/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i6_ei17vs.png',
               ]
               
           }
	   },
       feet5: {
           depthx3: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_jumbo_200_drawer_jumbo_front_14i6_wrjhda.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_jumbo_200_drawer_jumbo_front_14i6_wrjhda.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_mini_200_5ft_drawer_mini_front_14i6_qtfyum.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i6_urh4sz.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i6_smmmwr.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i6_urh4sz.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_mini_200_5ft_drawer_mini_front_14i6_qtfyum.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i6_smmmwr.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_jumbo_200_drawer_jumbo_front_14i6_wrjhda.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i6_vjcxts.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i6_smmmwr.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i6_vjcxts.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i6_urh4sz.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i6_smmmwr.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619911665/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i6_vjcxts.png',
               ]
                 
                  

           },
           depthx2: {
                /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619912095/reference_drawer_jumbo_200_drawer_jumbo_front_10i6_xa3xsk.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912095/reference_drawer_jumbo_200_drawer_jumbo_front_10i6_xa3xsk.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_mini_200_5ft_drawer_mini_front_10i6_mf11yh.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i6_zhfob6.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i6_ge3low.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i6_zhfob6.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_mini_200_5ft_drawer_mini_front_10i6_mf11yh.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i6_ge3low.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                       /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619912095/reference_drawer_jumbo_200_drawer_jumbo_front_10i6_xa3xsk.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i6_xtpuxu.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i6_ge3low.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i6_xtpuxu.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i6_zhfob6.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i6_ge3low.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912094/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i6_xtpuxu.png',
               ]
                
               
           },

       },
       feet6: {
           depthx3: {
              /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_jumbo_200_drawer_jumbo_front_14i6_hufoet.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_jumbo_200_drawer_jumbo_front_14i6_hufoet.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_mini_200_6ft_drawer_mini_front_14i6_lquelh.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
				     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i6_ljk04q.webp',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i6_safidb.webp'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i6_ljk04q.webp',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_mini_200_6ft_drawer_mini_front_14i6_lquelh.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i6_safidb.webp',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_jumbo_200_drawer_jumbo_front_14i6_hufoet.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i6_hpyukx.webp'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i6_safidb.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i6_hpyukx.webp',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i6_ljk04q.webp',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i6_safidb.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912578/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i6_hpyukx.webp',
               ]
                
               
               
           },
           depthx2: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619912095/reference_drawer_jumbo_200_drawer_jumbo_front_10i6_xa3xsk.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619912095/reference_drawer_jumbo_200_drawer_jumbo_front_10i6_xa3xsk.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_mini_200_6ft_drawer_mini_front_10i6_zx94of.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i6_tnavr2.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i6_drmg4q.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i6_tnavr2.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_mini_200_6ft_drawer_mini_front_10i6_zx94of.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i6_drmg4q.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619912095/reference_drawer_jumbo_200_drawer_jumbo_front_10i6_xa3xsk.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i6_hihiu3.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i6_drmg4q.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i6_hihiu3.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i6_tnavr2.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i6_drmg4q.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619913015/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i6_hihiu3.png',
               ]
               
           }
       }
    },
    duck: {
       feet4: {
           depthx3: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_jumbo_190_drawer_jumbo_front_14i4_umfita.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_jumbo_190_drawer_jumbo_front_14i4_umfita.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_mini_190_4ft6_drawer_mini_front_14i4_ypvsum.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i4_mkzs0o.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i4_vqrkaa.webp'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i4_mkzs0o.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_mini_190_4ft6_drawer_mini_front_14i4_ypvsum.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i4_vqrkaa.webp',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_jumbo_190_drawer_jumbo_front_14i4_umfita.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i4_l21pbs.webp'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i4_vqrkaa.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i4_l21pbs.webp',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i4_mkzs0o.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i4_vqrkaa.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921260/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i4_l21pbs.webp',
               ]
               
           },
           depthx2: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_jumbo_190_drawer_jumbo_front_10i4_bv6zwa.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_jumbo_190_drawer_jumbo_front_10i4_bv6zwa.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_mini_190_4ft6_drawer_mini_front_10i4_qtvj9y.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922013/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i4_y6kia2.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i4_ipsnb8.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922013/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i4_y6kia2.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_mini_190_4ft6_drawer_mini_front_10i4_qtvj9y.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i4_ipsnb8.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_jumbo_190_drawer_jumbo_front_10i4_bv6zwa.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i4_x5iwjw.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i4_ipsnb8.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i4_x5iwjw.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922013/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i4_y6kia2.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i4_ipsnb8.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922014/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i4_x5iwjw.png',
               ]
               
           }
	   },
       feet5: {
           depthx3: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_jumbo_200_drawer_jumbo_front_14i4_uohx70.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_jumbo_200_drawer_jumbo_front_14i4_uohx70.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922658/reference_drawer_mini_200_5ft_drawer_mini_front_14i4_tc9pko.webp'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i4_azge4l.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i4_t5rkuv.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i4_azge4l.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922658/reference_drawer_mini_200_5ft_drawer_mini_front_14i4_tc9pko.webp',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i4_t5rkuv.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_jumbo_200_drawer_jumbo_front_14i4_uohx70.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i4_ffxclv.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i4_t5rkuv.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i4_ffxclv.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i4_azge4l.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i4_t5rkuv.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i4_ffxclv.png',
               ]
                 
                  

           },
           depthx2: {
                /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619931306/reference_drawer_jumbo_200_drawer_jumbo_front_10i4_msrpbe.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931306/reference_drawer_jumbo_200_drawer_jumbo_front_10i4_msrpbe.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_mini_200_5ft_drawer_mini_front_10i4_lbacxx.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i4_ldeqt7.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i4_xub8eu.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i4_ldeqt7.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_mini_200_5ft_drawer_mini_front_10i4_lbacxx.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i4_xub8eu.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                       /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619931306/reference_drawer_jumbo_200_drawer_jumbo_front_10i4_msrpbe.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i4_ezztnp.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i4_xub8eu.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i4_ezztnp.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i4_ldeqt7.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i4_xub8eu.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931305/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i4_ezztnp.png',
               ]
                
               
           },

       },
       feet6: {
           depthx3: {
              /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_jumbo_200_drawer_jumbo_front_14i4_uohx70.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_jumbo_200_drawer_jumbo_front_14i4_uohx70.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931808/reference_drawer_mini_200_6ft_drawer_mini_front_14i4_upaktz.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
				     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931775/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i4_btvzr6.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i4_pukndc.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931775/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i4_btvzr6.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931808/reference_drawer_mini_200_6ft_drawer_mini_front_14i4_upaktz.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i4_pukndc.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619922659/reference_drawer_jumbo_200_drawer_jumbo_front_14i4_uohx70.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i4_nd0o3f.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i4_pukndc.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i4_nd0o3f.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619931775/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i4_btvzr6.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i4_pukndc.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931776/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i4_nd0o3f.png',
               ]
                
               
               
           },
           depthx2: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619931306/reference_drawer_jumbo_200_drawer_jumbo_front_10i4_msrpbe.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619931306/reference_drawer_jumbo_200_drawer_jumbo_front_10i4_msrpbe.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_mini_200_6ft_drawer_mini_front_10i4_zqphkx.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i4_s06enf.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i4_ytjqgr.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i4_s06enf.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_mini_200_6ft_drawer_mini_front_10i4_zqphkx.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i4_ytjqgr.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619931306/reference_drawer_jumbo_200_drawer_jumbo_front_10i4_msrpbe.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i4_cigkmd.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i4_ytjqgr.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i4_cigkmd.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i4_s06enf.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i4_ytjqgr.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619932135/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i4_cigkmd.png',
               ]
               
           }
       }
    },
    orchid: {
       feet4: {
           depthx3: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_jumbo_190_drawer_jumbo_front_14i8_k0lkib.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_jumbo_190_drawer_jumbo_front_14i8_k0lkib.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_mini_190_4ft6_drawer_mini_front_14i8_zgijkj.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i8_mzggzo.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i8_dua1mi.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i8_mzggzo.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_mini_190_4ft6_drawer_mini_front_14i8_zgijkj.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i8_dua1mi.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_jumbo_190_drawer_jumbo_front_14i8_k0lkib.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i8_a56mkr.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i8_dua1mi.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i8_a56mkr.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i8_mzggzo.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988519/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i8_dua1mi.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988518/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i8_a56mkr.png',
               ]
               
           },
           depthx2: {
			   /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_jumbo_190_drawer_jumbo_front_10i8_q3zvdt.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_jumbo_190_drawer_jumbo_front_10i8_q3zvdt.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_mini_190_4ft6_drawer_mini_front_10i8_qlczie.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i8_uwzwri.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i8_nakbq4.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i8_uwzwri.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_mini_190_4ft6_drawer_mini_front_10i8_qlczie.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i8_nakbq4.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_jumbo_190_drawer_jumbo_front_10i8_q3zvdt.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i8_ilex4a.webp'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i8_nakbq4.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i8_ilex4a.webp',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i8_uwzwri.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988833/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i8_nakbq4.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619988832/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i8_ilex4a.webp',
               ]
               
           }
	   },
       feet5: {
           depthx3: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_jumbo_200_drawer_jumbo_front_14i8_otrsq6.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_jumbo_200_drawer_jumbo_front_14i8_otrsq6.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_mini_200_5ft_drawer_mini_front_14i8_ttzuvr.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i8_fpgslf.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i8_s7ckzz.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i8_fpgslf.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_mini_200_5ft_drawer_mini_front_14i8_ttzuvr.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i8_s7ckzz.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_jumbo_200_drawer_jumbo_front_14i8_otrsq6.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i8_lvhbmx.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i8_s7ckzz.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i8_lvhbmx.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i8_fpgslf.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i8_s7ckzz.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i8_lvhbmx.png',
               ]
                 
                  

           },
           depthx2: {
                /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_jumbo_200_drawer_jumbo_front_10i8_uzsl10.webp",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_jumbo_200_drawer_jumbo_front_10i8_uzsl10.webp',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_mini_200_5ft_drawer_mini_front_10i8_gyedqz.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i8_bxshh8.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i8_fkfify.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i8_bxshh8.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_mini_200_5ft_drawer_mini_front_10i8_gyedqz.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i8_fkfify.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                       /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_jumbo_200_drawer_jumbo_front_10i8_uzsl10.webp",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i8_qbuuyd.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i8_fkfify.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i8_qbuuyd.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i8_bxshh8.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i8_fkfify.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i8_qbuuyd.png',
               ]
                
               
           },

       },
       feet6: {
           depthx3: {
              /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_jumbo_200_drawer_jumbo_front_14i8_otrsq6.png",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_jumbo_200_drawer_jumbo_front_14i8_otrsq6.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_mini_200_6ft_drawer_mini_front_14i8_sksfzk.png'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
				     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i8_tc1hib.webp',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i8_f6miez.webp'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i8_tc1hib.webp',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_mini_200_6ft_drawer_mini_front_14i8_sksfzk.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i8_f6miez.webp',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619989641/reference_drawer_jumbo_200_drawer_jumbo_front_14i8_otrsq6.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i8_sxq8zc.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i8_f6miez.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i8_sxq8zc.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i8_tc1hib.webp',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i8_f6miez.webp',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619994835/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i8_sxq8zc.png',
               ]
                
               
               
           },
           depthx2: {
               /*end Drawers*/
               storagex1:
                   
				  /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_jumbo_200_drawer_jumbo_front_10i8_uzsl10.webp",
               /*End Drawer with 2 Mini Drawers*/
			   storagex2:
                   [
                       
					  /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_jumbo_200_drawer_jumbo_front_10i8_uzsl10.webp',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_mini_200_6ft_drawer_mini_front_10i8_gbovdb.webp'
               ],
			   /*2 Drawers*/
               storagex3:
                   [
                       
					  /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i8_zixplk.png',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i8_nlgfwt.png'
                       
               ],
			   /* 2 Drawers with 2 Mini Drawers*/ 
               storagex4:
                   [
                     /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i8_zixplk.png',             
                     /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_mini_200_6ft_drawer_mini_front_10i8_gbovdb.webp',
					 /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i8_nlgfwt.png',
                       
               ],
			/*2 Drawers with End Drawers*/  
            storagex5:
                   [
                        /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619991404/reference_drawer_jumbo_200_drawer_jumbo_front_10i8_uzsl10.webp",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i8_qdqtoe.png'
               ],
			/*2 Drawers Same Side*/  
            storagex6:
                   [
                      
                      /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i8_nlgfwt.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i8_qdqtoe.png',
                      
               ],
			   /*4 Drawers*/  
               storagex7:
                   [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i8_zixplk.png',
					  /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i8_nlgfwt.png',
					  /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619995314/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i8_qdqtoe.png',
               ]
               
           }
       }
    },
	graphite: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619842322/reference_drawer_jumbo_190_drawer_jumbo_front_14i32_ultnqx.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842322/reference_drawer_jumbo_190_drawer_jumbo_front_14i32_ultnqx.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_mini_190_4ft6_drawer_mini_front_14i32_vswb5d.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i32_db5tqe.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i32_hrzwnj.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i32_db5tqe.webp',             
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_mini_190_4ft6_drawer_mini_front_14i32_vswb5d.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i32_hrzwnj.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842322/reference_drawer_jumbo_190_drawer_jumbo_front_14i32_ultnqx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842466/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i32_vpoong.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i32_hrzwnj.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842466/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i32_vpoong.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i32_db5tqe.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842321/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i32_hrzwnj.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842466/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i32_vpoong.webp'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619842684/reference_drawer_jumbo_190_drawer_jumbo_front_10i32_wmcry5.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619842684/reference_drawer_jumbo_190_drawer_jumbo_front_10i32_wmcry5.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842687/reference_drawer_mini_190_4ft6_drawer_mini_front_10i32_jgnmfk.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842685/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i32_gpf8mc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842686/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i32_zsqlmc.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842685/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i32_gpf8mc.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842687/reference_drawer_mini_190_4ft6_drawer_mini_front_10i32_jgnmfk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842686/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i32_zsqlmc.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619842684/reference_drawer_jumbo_190_drawer_jumbo_front_10i32_wmcry5.png",
                        /*right bro dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842886/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i32_gjirwy.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842686/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i32_zsqlmc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842886/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i32_gjirwy.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842685/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i32_gpf8mc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619842686/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i32_zsqlmc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619842886/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i32_gjirwy.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_jumbo_200_drawer_jumbo_front_14i32_etcywy.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_jumbo_200_drawer_jumbo_front_14i32_etcywy.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_mini_200_5ft_drawer_mini_front_14i32_srewiv.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843027/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i32_qp3p66.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i32_mbqvpr.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843027/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i32_qp3p66.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_mini_200_5ft_drawer_mini_front_14i32_srewiv.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i32_mbqvpr.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_jumbo_200_drawer_jumbo_front_14i32_etcywy.png",
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843176/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i32_eikbiv.png'
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i32_mbqvpr.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619843176/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i32_eikbiv.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843027/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i32_qp3p66.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843028/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i32_mbqvpr.png',
                        /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619843176/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i32_eikbiv.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619843428/reference_drawer_jumbo_200_drawer_jumbo_front_10i32_cv29br.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619843428/reference_drawer_jumbo_200_drawer_jumbo_front_10i32_cv29br.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_mini_200_5ft_drawer_mini_front_10i32_mgknpc.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843428/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i32_tl1sbl.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i32_kij1y3.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843428/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i32_tl1sbl.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_mini_200_5ft_drawer_mini_front_10i32_mgknpc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i32_kij1y3.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619843428/reference_drawer_jumbo_200_drawer_jumbo_front_10i32_cv29br.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i32_yigtjd.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i32_kij1y3.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i32_yigtjd.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843428/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i32_tl1sbl.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i32_kij1y3.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619843429/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i32_yigtjd.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619887363/reference_drawer_jumbo_200_drawer_jumbo_front_14i32_byuhws.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619887363/reference_drawer_jumbo_200_drawer_jumbo_front_14i32_byuhws.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887363/reference_drawer_mini_200_6ft_drawer_mini_front_14i32_dmzv32.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i32_w7lef3.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i32_xvafhp.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i32_w7lef3.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887363/reference_drawer_mini_200_6ft_drawer_mini_front_14i32_dmzv32.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i32_xvafhp.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619887363/reference_drawer_jumbo_200_drawer_jumbo_front_14i32_byuhws.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i32_oqegvi.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i32_xvafhp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i32_oqegvi.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i32_w7lef3.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i32_xvafhp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619887362/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i32_oqegvi.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_jumbo_200_drawer_jumbo_front_10i32_dxtdwg.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_jumbo_200_drawer_jumbo_front_10i32_dxtdwg.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_mini_200_6ft_drawer_mini_front_10i32_1_e5cpnv.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i32_1_ptvuln.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888056/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i32_1_h1lulp.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i32_1_ptvuln.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_mini_200_6ft_drawer_mini_front_10i32_1_e5cpnv.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888056/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i32_1_h1lulp.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_jumbo_200_drawer_jumbo_front_10i32_dxtdwg.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i32_1_ru6rdu.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888056/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i32_1_h1lulp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i32_1_ru6rdu.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i32_1_ptvuln.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619888056/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i32_1_h1lulp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619888054/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i32_1_ru6rdu.png'
                    ]
                
            }
        }
    },
	marine: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_jumbo_190_drawer_jumbo_front_14i34_mj2akm.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_jumbo_190_drawer_jumbo_front_14i34_mj2akm.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_mini_190_4ft6_drawer_mini_front_14i34_zbcjha.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i34_zpxhbf.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i34_bpj123.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i34_zpxhbf.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_mini_190_4ft6_drawer_mini_front_14i34_zbcjha.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i34_bpj123.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_jumbo_190_drawer_jumbo_front_14i34_mj2akm.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i34_isp4kk.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i34_bpj123.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i34_isp4kk.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i34_zpxhbf.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619919678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i34_bpj123.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619919679/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i34_isp4kk.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_jumbo_190_drawer_jumbo_front_10i34_dm7j7x.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_jumbo_190_drawer_jumbo_front_10i34_dm7j7x.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920056/reference_drawer_mini_190_4ft6_drawer_mini_front_10i34_kpxgfc.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920054/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i34_pk3auz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i34_y7iigj.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920054/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i34_pk3auz.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920056/reference_drawer_mini_190_4ft6_drawer_mini_front_10i34_kpxgfc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i34_y7iigj.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_jumbo_190_drawer_jumbo_front_10i34_dm7j7x.png",
                        /*right boro dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i34_xo1qrl.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i34_y7iigj.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i34_xo1qrl.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920054/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i34_pk3auz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i34_y7iigj.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920055/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i34_xo1qrl.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920318/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_po3wps.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920318/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_po3wps.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_mini_200_5ft_drawer_mini_front_14i34_pgb69j.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i34_jqltvw.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920315/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i34_qgymjp.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i34_jqltvw.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_mini_200_5ft_drawer_mini_front_14i34_pgb69j.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920315/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i34_qgymjp.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920318/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_po3wps.png",
                      /*right boro dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_mini_190_4ft6_drawer_mini_front_14i14_a1bsgq.png'
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920315/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i34_qgymjp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_mini_190_4ft6_drawer_mini_front_14i14_a1bsgq.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i34_jqltvw.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920315/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i34_qgymjp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920314/reference_drawer_mini_190_4ft6_drawer_mini_front_14i14_a1bsgq.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920589/reference_drawer_jumbo_200_drawer_jumbo_front_10i34_xhmrx1.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920589/reference_drawer_jumbo_200_drawer_jumbo_front_10i34_xhmrx1.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_mini_200_5ft_drawer_mini_front_10i34_ovkoio.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i34_bk7ysz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i34_aym9va.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i34_bk7ysz.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_mini_200_5ft_drawer_mini_front_10i34_ovkoio.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i34_aym9va.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920589/reference_drawer_jumbo_200_drawer_jumbo_front_10i34_xhmrx1.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i34_lnvbhr.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i34_aym9va.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i34_lnvbhr.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i34_bk7ysz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i34_aym9va.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920587/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i34_lnvbhr.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_azpkol.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_azpkol.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_mini_200_6ft_drawer_mini_front_14i34_l0bbdf.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i34_m5f5lh.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i34_l2f7ck.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i34_m5f5lh.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_mini_200_6ft_drawer_mini_front_14i34_l0bbdf.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i34_l2f7ck.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_azpkol.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_cvjgyb.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i34_l2f7ck.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_cvjgyb.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i34_m5f5lh.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619920893/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i34_l2f7ck.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619920891/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_cvjgyb.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619921181/reference_drawer_jumbo_200_drawer_jumbo_front_10i34_wqq6nr.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619921181/reference_drawer_jumbo_200_drawer_jumbo_front_10i34_wqq6nr.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921180/reference_drawer_mini_200_6ft_drawer_mini_front_10i34_othfrk.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i34_zvckpk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i34_uyxbpl.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i34_zvckpk.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921180/reference_drawer_mini_200_6ft_drawer_mini_front_10i34_othfrk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i34_uyxbpl.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619921181/reference_drawer_jumbo_200_drawer_jumbo_front_10i34_wqq6nr.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921180/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i34_qnipls.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i34_uyxbpl.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921180/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i34_qnipls.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i34_zvckpk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619921179/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i34_uyxbpl.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619921180/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i34_qnipls.png'
                    ]
                
            }
        }
    },
	emerald: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926170/reference_drawer_jumbo_190_drawer_jumbo_front_14i35_rzhcym.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926170/reference_drawer_jumbo_190_drawer_jumbo_front_14i35_rzhcym.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_mini_190_4ft6_drawer_mini_front_14i35_z25wch.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i35_vgxgv5.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i35_xo9tuk.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i35_vgxgv5.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_mini_190_4ft6_drawer_mini_front_14i35_z25wch.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i35_xo9tuk.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926170/reference_drawer_jumbo_190_drawer_jumbo_front_14i35_rzhcym.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926172/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i35_xzufia.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i35_xo9tuk.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926172/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i35_xzufia.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i35_vgxgv5.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926169/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i35_xo9tuk.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926172/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i35_xzufia.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926401/reference_drawer_jumbo_190_drawer_jumbo_front_10i35_m5bsgm.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926401/reference_drawer_jumbo_190_drawer_jumbo_front_10i35_m5bsgm.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926399/reference_drawer_mini_190_4ft6_drawer_mini_front_10i35_gj2lfw.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i35_addyji.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i35_lqqxxi.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i35_addyji.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926399/reference_drawer_mini_190_4ft6_drawer_mini_front_10i35_gj2lfw.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i35_lqqxxi.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926401/reference_drawer_jumbo_190_drawer_jumbo_front_10i35_m5bsgm.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926399/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i35_ghsy6k.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i35_lqqxxi.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926399/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i35_ghsy6k.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i35_addyji.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926398/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i35_lqqxxi.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926399/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i35_ghsy6k.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_jumbo_200_drawer_jumbo_front_14i35_dwwapv.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_jumbo_200_drawer_jumbo_front_14i35_dwwapv.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_mini_200_5ft_drawer_mini_front_14i35_fpvwib.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i35_x8cu0r.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i35_zqu61l.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i35_x8cu0r.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_mini_200_5ft_drawer_mini_front_14i35_fpvwib.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i35_zqu61l.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_jumbo_200_drawer_jumbo_front_14i35_dwwapv.png",
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i35_dfsd4k.png'
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i35_zqu61l.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i35_dfsd4k.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i35_x8cu0r.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926639/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i35_zqu61l.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926637/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i35_dfsd4k.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926858/reference_drawer_jumbo_200_drawer_jumbo_front_10i35_yvuegv.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926858/reference_drawer_jumbo_200_drawer_jumbo_front_10i35_yvuegv.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_mini_200_5ft_drawer_mini_front_10i35_qdqlaa.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i35_yldaf9.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i35_fydnzi.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i35_yldaf9.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_mini_200_5ft_drawer_mini_front_10i35_qdqlaa.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i35_fydnzi.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619926858/reference_drawer_jumbo_200_drawer_jumbo_front_10i35_yvuegv.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i35_u1ajhm.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i35_fydnzi.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i35_u1ajhm.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i35_yldaf9.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i35_fydnzi.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619926856/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i35_u1ajhm.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_jumbo_200_drawer_jumbo_front_14i35_kxks1p.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_jumbo_200_drawer_jumbo_front_14i35_kxks1p.webp",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_mini_200_6ft_drawer_mini_front_14i35_jvl12e.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i35_gktikp.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i35_clssas.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i35_gktikp.png',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_mini_200_6ft_drawer_mini_front_14i35_jvl12e.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i35_clssas.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_jumbo_200_drawer_jumbo_front_14i35_kxks1p.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928226/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i35_mj5o2q.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i35_clssas.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928226/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i35_mj5o2q.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i35_gktikp.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928225/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i35_clssas.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928226/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i35_mj5o2q.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_jumbo_200_drawer_jumbo_front_10i35_stdran.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_jumbo_200_drawer_jumbo_front_10i35_stdran.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_mini_200_6ft_drawer_mini_front_10i35_trm672.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i35_zsbteq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i35_txxykx.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i35_zsbteq.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_mini_200_6ft_drawer_mini_front_10i35_trm672.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i35_txxykx.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_jumbo_200_drawer_jumbo_front_10i35_stdran.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i35_veepsd.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i35_txxykx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i35_veepsd.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i35_zsbteq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i35_txxykx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619928483/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i35_veepsd.png'
                    ]
                
            }
        }
    },
	deggb: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619949909/reference_drawer_jumbo_190_drawer_jumbo_front_14i36_nilzpy.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949909/reference_drawer_jumbo_190_drawer_jumbo_front_14i36_nilzpy.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_mini_190_4ft6_drawer_mini_front_14i36_po7itt.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i36_qzptr1.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i36_osmo2w.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i36_qzptr1.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_mini_190_4ft6_drawer_mini_front_14i36_po7itt.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i36_osmo2w.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949909/reference_drawer_jumbo_190_drawer_jumbo_front_14i36_nilzpy.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949909/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i36_gvswar.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i36_osmo2w.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949909/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i36_gvswar.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i36_qzptr1.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619949908/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i36_osmo2w.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619949909/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i36_gvswar.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619950369/reference_drawer_jumbo_190_drawer_jumbo_front_10i36_uslwbk.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619950369/reference_drawer_jumbo_190_drawer_jumbo_front_10i36_uslwbk.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950367/reference_drawer_mini_190_4ft6_drawer_mini_front_10i36_e9dxen.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950367/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i36_rh8k9q.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i36_luogtp.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950367/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i36_rh8k9q.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950367/reference_drawer_mini_190_4ft6_drawer_mini_front_10i36_e9dxen.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i36_luogtp.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619950369/reference_drawer_jumbo_190_drawer_jumbo_front_10i36_uslwbk.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i36_z38amc.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i36_luogtp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i36_z38amc.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950367/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i36_rh8k9q.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i36_luogtp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619950368/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i36_z38amc.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_jumbo_200_drawer_jumbo_front_14i36_fevqv2.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_jumbo_200_drawer_jumbo_front_14i36_fevqv2.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950772/reference_drawer_mini_200_5ft_drawer_mini_front_14i36_d8uchw.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950772/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i36_xybf4g.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i36_gdtbt5.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950772/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i36_xybf4g.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950772/reference_drawer_mini_200_5ft_drawer_mini_front_14i36_d8uchw.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i36_gdtbt5.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_jumbo_200_drawer_jumbo_front_14i36_fevqv2.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i36_aupolm.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i36_gdtbt5.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i36_aupolm.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950772/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i36_xybf4g.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i36_gdtbt5.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619950773/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i36_aupolm.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619951191/reference_drawer_jumbo_200_drawer_jumbo_front_10i36_omfdjs.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619951191/reference_drawer_jumbo_200_drawer_jumbo_front_10i36_omfdjs.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_mini_200_5ft_drawer_mini_front_10i36_hj0iel.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i36_iuzpgp.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i36_caadfc.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i36_iuzpgp.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_mini_200_5ft_drawer_mini_front_10i36_hj0iel.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i36_caadfc.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619951191/reference_drawer_jumbo_200_drawer_jumbo_front_10i36_omfdjs.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i36_gnvbnl.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i36_caadfc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i36_gnvbnl.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i36_iuzpgp.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i36_caadfc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619951190/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i36_gnvbnl.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_jumbo_200_drawer_jumbo_front_14i36_rxm6hv.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_jumbo_200_drawer_jumbo_front_14i36_rxm6hv.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_mini_200_6ft_drawer_mini_front_14i36_b8wqac.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i36_mwawl8.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i36_tc3ndy.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i36_mwawl8.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_mini_200_6ft_drawer_mini_front_14i36_b8wqac.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i36_tc3ndy.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_jumbo_200_drawer_jumbo_front_14i36_rxm6hv.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i36_tcwyfv.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i36_tc3ndy.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i36_tcwyfv.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i36_mwawl8.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619951595/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i36_tc3ndy.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619951596/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i36_tcwyfv.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_jumbo_200_drawer_jumbo_front_10i36_fo0p3f.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_jumbo_200_drawer_jumbo_front_10i36_fo0p3f.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952198/reference_drawer_mini_200_6ft_drawer_mini_front_10i36_hb1s7p.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952198/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i36_kmkycs.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i36_esu6if.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952198/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i36_kmkycs.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952198/reference_drawer_mini_200_6ft_drawer_mini_front_10i36_hb1s7p.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i36_esu6if.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_jumbo_200_drawer_jumbo_front_10i36_fo0p3f.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i36_xosxxp.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i36_esu6if.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i36_xosxxp.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952198/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i36_kmkycs.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i36_esu6if.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619952199/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i36_xosxxp.png'
                    ]
                
            }
        }
    },
	silver: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619755242/reference_drawer_jumbo_190_drawer_jumbo_front_14i30_tqvwar.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619755242/reference_drawer_jumbo_190_drawer_jumbo_front_14i30_tqvwar.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619755242/reference_drawer_mini_190_4ft6_drawer_mini_front_14i30_exccsd.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619755935/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i30_jfphs7.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619755936/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i30_bhxdfy.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619755935/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i30_jfphs7.png',             
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756136/reference_drawer_mini_190_4ft6_drawer_mini_front_14i30_1_qfoq80.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619755936/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i30_bhxdfy.png',
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                         /*big dawrer*/"https://res.cloudinary.com/furniturebuild/image/upload/v1619755242/reference_drawer_jumbo_190_drawer_jumbo_front_14i30_tqvwar.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756264/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i30_hvgtin.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                       /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619755936/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i30_bhxdfy.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756264/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i30_hvgtin.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                        /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619755935/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i30_jfphs7.png',
                        /*right boro dawrer samne*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619755936/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i30_bhxdfy.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756264/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i30_hvgtin.png',
                ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619756536/reference_drawer_jumbo_190_drawer_jumbo_front_10i30_1_u6bb36.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756536/reference_drawer_jumbo_190_drawer_jumbo_front_10i30_1_u6bb36.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014434/reference_drawer_mini_190_4ft6_drawer_mini_front_10i30_mcn2da.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756634/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i30_byu04s.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756666/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i30_ppkmft.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756634/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i30_byu04s.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014434/reference_drawer_mini_190_4ft6_drawer_mini_front_10i30_mcn2da.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756666/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i30_ppkmft.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756536/reference_drawer_jumbo_190_drawer_jumbo_front_10i30_1_u6bb36.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756790/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i30_djaw23.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756666/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i30_ppkmft.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756790/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i30_djaw23.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756634/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i30_byu04s.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756666/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i30_ppkmft.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619756790/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i30_djaw23.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619756935/reference_drawer_jumbo_200_drawer_jumbo_front_14i30_ne21sw.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619756935/reference_drawer_jumbo_200_drawer_jumbo_front_14i30_ne21sw.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756933/reference_drawer_mini_200_5ft_drawer_mini_front_14i30_f8nww2.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757009/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i30_f62vpc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757007/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i30_g63yec.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757009/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i30_f62vpc.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619756933/reference_drawer_mini_200_5ft_drawer_mini_front_14i30_f8nww2.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757007/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i30_g63yec.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619756935/reference_drawer_jumbo_200_drawer_jumbo_front_14i30_ne21sw.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619757205/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i30_laxht2.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757007/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i30_g63yec.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619757205/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i30_laxht2.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757009/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i30_f62vpc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757007/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i30_g63yec.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619757205/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i30_laxht2.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619757371/reference_drawer_jumbo_200_drawer_jumbo_front_10i30_-_Copy_ondqr9.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619757371/reference_drawer_jumbo_200_drawer_jumbo_front_10i30_-_Copy_ondqr9.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757370/reference_drawer_mini_200_5ft_drawer_mini_front_10i30_kqpblx.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757811/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i30_jbbdth.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757738/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i30_zmloj0.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757811/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i30_jbbdth.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757370/reference_drawer_mini_200_5ft_drawer_mini_front_10i30_kqpblx.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757738/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i30_zmloj0.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619757371/reference_drawer_jumbo_200_drawer_jumbo_front_10i30_-_Copy_ondqr9.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619757965/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i30_euammp.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757738/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i30_zmloj0.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619757965/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i30_euammp.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757811/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i30_jbbdth.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619757738/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i30_zmloj0.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619757965/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i30_euammp.png'
                    ]
                 
                
            },
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619758274/reference_drawer_jumbo_200_drawer_jumbo_front_14i30_1_aitmeh.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619758274/reference_drawer_jumbo_200_drawer_jumbo_front_14i30_1_aitmeh.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_mini_200_6ft_drawer_mini_front_14i30_sbbfwf.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i30_b7lpri.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i30_ye2hbc.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i30_b7lpri.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_mini_200_6ft_drawer_mini_front_14i30_sbbfwf.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i30_ye2hbc.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619758274/reference_drawer_jumbo_200_drawer_jumbo_front_14i30_1_aitmeh.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619759118/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i30_tvabvg.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i30_ye2hbc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619759118/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i30_tvabvg.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i30_b7lpri.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619758273/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i30_ye2hbc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619759118/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i30_tvabvg.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_jumbo_200_drawer_jumbo_front_10i30_kkqxeq.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_jumbo_200_drawer_jumbo_front_10i30_kkqxeq.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759268/reference_drawer_mini_200_6ft_drawer_mini_front_10i30_u7jf7v.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i30_idkfa8.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i30_cg4bhx.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i30_idkfa8.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759268/reference_drawer_mini_200_6ft_drawer_mini_front_10i30_u7jf7v.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i30_cg4bhx.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_jumbo_200_drawer_jumbo_front_10i30_kkqxeq.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619759392/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i30_axqnth.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i30_cg4bhx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619759392/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i30_axqnth.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i30_idkfa8.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1619759269/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i30_cg4bhx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1619759392/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i30_axqnth.png'
                    ]
                
            }
        }
    },
	silgry: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_jumbo_190_drawer_jumbo_front_14i29_novcbj.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_jumbo_190_drawer_jumbo_front_14i29_novcbj.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_mini_190_4ft6_drawer_mini_front_14i29_o8schz.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i29_zcqjdy.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i29_vfmq9w.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i29_zcqjdy.webp',             
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_mini_190_4ft6_drawer_mini_front_14i29_o8schz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i29_vfmq9w.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_jumbo_190_drawer_jumbo_front_14i29_novcbj.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i29_pay78x.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i29_vfmq9w.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i29_pay78x.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i29_zcqjdy.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i29_vfmq9w.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620067700/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i29_pay78x.webp'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_jumbo_190_drawer_jumbo_front_10i29_jrddnb.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_jumbo_190_drawer_jumbo_front_10i29_jrddnb.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_mini_190_4ft6_drawer_mini_front_10i29_odua2o.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068765/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i29_n0zovr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i29_mraq4u.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068765/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i29_n0zovr.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_mini_190_4ft6_drawer_mini_front_10i29_odua2o.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i29_mraq4u.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_jumbo_190_drawer_jumbo_front_10i29_jrddnb.png",
                     /*right boro dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i29_fbj1ls.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i29_mraq4u.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i29_fbj1ls.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068765/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i29_n0zovr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i29_mraq4u.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620068766/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i29_fbj1ls.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_jumbo_200_drawer_jumbo_front_14i29_avoi17.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_jumbo_200_drawer_jumbo_front_14i29_avoi17.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069295/reference_drawer_mini_200_5ft_drawer_mini_front_14i29_enuhe6.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069295/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i29_bnjjha.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i29_ke7fjo.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069295/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i29_bnjjha.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069295/reference_drawer_mini_200_5ft_drawer_mini_front_14i29_enuhe6.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i29_ke7fjo.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_jumbo_200_drawer_jumbo_front_14i29_avoi17.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620069297/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i29_qn8uzz.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i29_ke7fjo.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620069297/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i29_qn8uzz.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069295/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i29_bnjjha.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i29_ke7fjo.png',
                        /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620069297/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i29_qn8uzz.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_jumbo_200_drawer_jumbo_front_10i29_bcimgk.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_jumbo_200_drawer_jumbo_front_10i29_bcimgk.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_mini_200_5ft_drawer_mini_front_10i29_vjp61j.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i29_buqcpr.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i29_bwx5wg.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i29_buqcpr.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_mini_200_5ft_drawer_mini_front_10i29_vjp61j.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i29_bwx5wg.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_jumbo_200_drawer_jumbo_front_10i29_bcimgk.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i29_hh0ong.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i29_bwx5wg.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i29_hh0ong.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i29_buqcpr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i29_bwx5wg.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i29_hh0ong.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                    /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_jumbo_200_drawer_jumbo_front_14i29_avoi17.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_jumbo_200_drawer_jumbo_front_14i29_avoi17.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_mini_200_6ft_drawer_mini_front_14i29_qajz0m.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i29_zma6pd.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i29_jyws7f.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i29_zma6pd.png',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_mini_200_6ft_drawer_mini_front_14i29_qajz0m.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i29_jyws7f.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069296/reference_drawer_jumbo_200_drawer_jumbo_front_14i29_avoi17.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i29_ncvf1f.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i29_jyws7f.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i29_ncvf1f.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i29_zma6pd.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i29_jyws7f.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620070320/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i29_ncvf1f.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_jumbo_200_drawer_jumbo_front_10i29_bcimgk.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_jumbo_200_drawer_jumbo_front_10i29_bcimgk.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_mini_200_6ft_drawer_mini_front_10i29_prhx44.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i29_m4tjwt.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i29_iy6zwk.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i29_m4tjwt.png',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_mini_200_6ft_drawer_mini_front_10i29_prhx44.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i29_iy6zwk.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620069797/reference_drawer_jumbo_200_drawer_jumbo_front_10i29_bcimgk.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i29_stktaf.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i29_iy6zwk.png',
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i29_stktaf.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i29_m4tjwt.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i29_iy6zwk.png',
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620070665/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i29_stktaf.png'
                    ]
                
            }
        }
    },
    cream: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_jumbo_190_drawer_jumbo_front_14i3_o6pv2v.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_jumbo_190_drawer_jumbo_front_14i3_o6pv2v.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_mini_190_4ft6_drawer_mini_front_14i3_xdlxtt.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i3_guhmqd.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i3_uwpbjk.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i3_guhmqd.png',             
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_mini_190_4ft6_drawer_mini_front_14i3_xdlxtt.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i3_uwpbjk.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_jumbo_190_drawer_jumbo_front_14i3_o6pv2v.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i3_npxcpz.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i3_uwpbjk.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i3_npxcpz.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i3_guhmqd.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i3_uwpbjk.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620088985/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i3_npxcpz.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_jumbo_190_drawer_jumbo_front_10i3_tijzsp.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_jumbo_190_drawer_jumbo_front_10i3_tijzsp.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_mini_190_4ft6_drawer_mini_front_10i3_s3w9v7.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089497/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i3_zcedqh.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i3_czlibm.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089497/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i3_zcedqh.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_mini_190_4ft6_drawer_mini_front_10i3_s3w9v7.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i3_czlibm.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_jumbo_190_drawer_jumbo_front_10i3_tijzsp.png",
                     /*right boro dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i3_slp9b7.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i3_czlibm.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i3_slp9b7.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089497/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i3_zcedqh.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i3_czlibm.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620089498/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i3_slp9b7.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_jumbo_200_drawer_jumbo_front_14i3_poxbhs.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_jumbo_200_drawer_jumbo_front_14i3_poxbhs.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_mini_200_5ft_drawer_mini_front_14i3_lxqkkf.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i3_squoib.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i3_ucmmkb.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i3_squoib.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_mini_200_5ft_drawer_mini_front_14i3_lxqkkf.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i3_ucmmkb.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_jumbo_200_drawer_jumbo_front_14i3_poxbhs.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i3_q0j6zh.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i3_ucmmkb.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i3_q0j6zh.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i3_squoib.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i3_ucmmkb.png',
                        /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i3_q0j6zh.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_jumbo_200_drawer_jumbo_front_10i3_advk1u.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_jumbo_200_drawer_jumbo_front_10i3_advk1u.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_mini_200_5ft_drawer_mini_front_10i3_cyt8ys.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i3_bjh3ul.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i3_rhogjj.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i3_bjh3ul.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_mini_200_5ft_drawer_mini_front_10i3_cyt8ys.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i3_rhogjj.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_jumbo_200_drawer_jumbo_front_10i3_advk1u.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i3_pajwzi.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i3_rhogjj.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i3_pajwzi.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i3_bjh3ul.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i3_rhogjj.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i3_pajwzi.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                    /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_jumbo_200_drawer_jumbo_front_14i3_poxbhs.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_jumbo_200_drawer_jumbo_front_14i3_poxbhs.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_mini_200_6ft_drawer_mini_front_14i3_jwxzii.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i3_oy2niq.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i3_n4tfxx.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i3_oy2niq.png',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_mini_200_6ft_drawer_mini_front_14i3_jwxzii.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i3_n4tfxx.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620089879/reference_drawer_jumbo_200_drawer_jumbo_front_14i3_poxbhs.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i3_bpqf8j.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i3_n4tfxx.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i3_bpqf8j.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i3_oy2niq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i3_n4tfxx.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090692/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i3_bpqf8j.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_jumbo_200_drawer_jumbo_front_10i3_advk1u.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_jumbo_200_drawer_jumbo_front_10i3_advk1u.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_mini_200_6ft_drawer_mini_front_10i3_ieh7d2.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i3_myt0ct.webp',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i3_pf1ncg.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i3_myt0ct.webp',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_mini_200_6ft_drawer_mini_front_10i3_ieh7d2.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i3_pf1ncg.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620090153/reference_drawer_jumbo_200_drawer_jumbo_front_10i3_advk1u.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i3_wlc6az.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i3_pf1ncg.webp',
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i3_wlc6az.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i3_myt0ct.webp',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i3_pf1ncg.webp',
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620090983/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i3_wlc6az.webp'
                    ]
                
            }
        }
    },
    chocolate: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620100983/reference_drawer_jumbo_190_drawer_jumbo_front_14i2_cvskka.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100983/reference_drawer_jumbo_190_drawer_jumbo_front_14i2_cvskka.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_mini_190_4ft6_drawer_mini_front_14i2_tbg9td.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i2_w5xh0l.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i2_zi7f0v.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i2_w5xh0l.png',             
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_mini_190_4ft6_drawer_mini_front_14i2_tbg9td.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i2_zi7f0v.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                       /*big dawrer*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100983/reference_drawer_jumbo_190_drawer_jumbo_front_14i2_cvskka.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i2_di8vyl.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i2_zi7f0v.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i2_di8vyl.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i2_w5xh0l.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i2_zi7f0v.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100982/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i2_di8vyl.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_jumbo_190_drawer_jumbo_front_10i2_etraum.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_jumbo_190_drawer_jumbo_front_10i2_etraum.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_mini_190_4ft6_drawer_mini_front_10i2_oixqam.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i2_lblutq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i2_rkrtuc.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i2_lblutq.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_mini_190_4ft6_drawer_mini_front_10i2_oixqam.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i2_rkrtuc.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_jumbo_190_drawer_jumbo_front_10i2_etraum.png",
                     /*right boro dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i2_pl2plf.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i2_rkrtuc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i2_pl2plf.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i2_lblutq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i2_rkrtuc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101185/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i2_pl2plf.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_jumbo_200_drawer_jumbo_front_14i2_tywbfi.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_jumbo_200_drawer_jumbo_front_14i2_tywbfi.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_mini_200_5ft_drawer_mini_front_14i2_nbvc7c.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101497/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i2_nxrtke.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i2_ncx0ag.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101497/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i2_nxrtke.png',
                       /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_mini_200_5ft_drawer_mini_front_14i2_nbvc7c.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i2_ncx0ag.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_jumbo_200_drawer_jumbo_front_14i2_tywbfi.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i2_adziw4.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i2_ncx0ag.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i2_adziw4.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101497/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i2_nxrtke.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i2_ncx0ag.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i2_adziw4.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_jumbo_200_drawer_jumbo_front_10i2_i12ccg.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_jumbo_200_drawer_jumbo_front_10i2_i12ccg.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_mini_200_5ft_drawer_mini_front_10i2_djagsl.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i2_cnvx6z.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i2_chyvfv.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                      /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i2_cnvx6z.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_mini_200_5ft_drawer_mini_front_10i2_djagsl.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i2_chyvfv.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_jumbo_200_drawer_jumbo_front_10i2_i12ccg.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i2_obd6mn.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i2_chyvfv.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i2_obd6mn.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i2_cnvx6z.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i2_chyvfv.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i2_obd6mn.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                    /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_jumbo_200_drawer_jumbo_front_14i2_tywbfi.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_jumbo_200_drawer_jumbo_front_14i2_tywbfi.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_mini_200_6ft_drawer_mini_front_14i2_jdvxq0.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i2_hf2jjk.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i2_ajaqmn.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i2_hf2jjk.png',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_mini_200_6ft_drawer_mini_front_14i2_jdvxq0.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i2_ajaqmn.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101498/reference_drawer_jumbo_200_drawer_jumbo_front_14i2_tywbfi.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i2_x7vugh.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i2_ajaqmn.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i2_x7vugh.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i2_hf2jjk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i2_ajaqmn.png',
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620101963/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i2_x7vugh.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_jumbo_200_drawer_jumbo_front_10i2_i12ccg.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_jumbo_200_drawer_jumbo_front_10i2_i12ccg.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_mini_200_6ft_drawer_mini_front_10i2_cgw56t.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i2_uwnwj6.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i2_hnnopr.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i2_uwnwj6.png',
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_mini_200_6ft_drawer_mini_front_10i2_cgw56t.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i2_hnnopr.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620101695/reference_drawer_jumbo_200_drawer_jumbo_front_10i2_i12ccg.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i2_bnqljy.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i2_hnnopr.png',
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i2_bnqljy.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                    /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i2_uwnwj6.png',
                    /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i2_hnnopr.png',
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620102165/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i2_bnqljy.png'
                    ]
                
            }
        }
    },
	pink: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620010405/reference_drawer_jumbo_190_drawer_jumbo_front_14i37_po66yf.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620010405/reference_drawer_jumbo_190_drawer_jumbo_front_14i37_po66yf.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_mini_190_4ft6_drawer_mini_front_14i37_uymzpe.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i37_kd6kad.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i37_dejije.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i37_kd6kad.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_mini_190_4ft6_drawer_mini_front_14i37_uymzpe.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i37_dejije.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620010405/reference_drawer_jumbo_190_drawer_jumbo_front_14i37_po66yf.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i37_elmsyz.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i37_dejije.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i37_elmsyz.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i37_kd6kad.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i37_dejije.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620010404/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i37_elmsyz.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_jumbo_190_drawer_jumbo_front_10i37_geynko.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_jumbo_190_drawer_jumbo_front_10i37_geynko.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_mini_190_4ft6_drawer_mini_front_10i37_dijfah.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i37_tyu0sz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i37_plmsor.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i37_tyu0sz.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_mini_190_4ft6_drawer_mini_front_10i37_dijfah.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i37_plmsor.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_jumbo_190_drawer_jumbo_front_10i37_geynko.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i37_ak7unl.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i37_plmsor.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i37_ak7unl.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i37_tyu0sz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620010678/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i37_plmsor.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620010677/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i37_ak7unl.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620011022/reference_drawer_jumbo_200_drawer_jumbo_front_14i37_kscozm.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620011022/reference_drawer_jumbo_200_drawer_jumbo_front_14i37_kscozm.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_mini_200_5ft_drawer_mini_front_14i37_vjta1s.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i37_mregpl.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011023/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i37_q5n5ls.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i37_mregpl.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_mini_200_5ft_drawer_mini_front_14i37_vjta1s.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011023/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i37_q5n5ls.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620011022/reference_drawer_jumbo_200_drawer_jumbo_front_14i37_kscozm.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i37_uhqjqx.png',
                       
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011023/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i37_q5n5ls.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i37_uhqjqx.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i37_mregpl.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620011023/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i37_q5n5ls.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620011021/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i37_uhqjqx.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620012071/reference_drawer_jumbo_200_drawer_jumbo_front_10i37_mixre0.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620012071/reference_drawer_jumbo_200_drawer_jumbo_front_10i37_mixre0.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_mini_200_5ft_drawer_mini_front_10i37_akqvtv.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i37_blejac.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i37_frgdzx.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i37_blejac.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_mini_200_5ft_drawer_mini_front_10i37_akqvtv.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i37_frgdzx.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620012071/reference_drawer_jumbo_200_drawer_jumbo_front_10i37_mixre0.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i37_r1xmzt.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i37_frgdzx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i37_r1xmzt.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i37_blejac.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i37_frgdzx.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620012069/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i37_r1xmzt.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_jumbo_200_drawer_jumbo_front_14i37_skdbrn.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_jumbo_200_drawer_jumbo_front_14i37_skdbrn.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014317/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i37_z8qryo.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i37_u74l2s.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i37_fdlthh.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i37_u74l2s.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014317/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i37_z8qryo.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i37_fdlthh.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_jumbo_200_drawer_jumbo_front_14i37_skdbrn.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620014317/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i37_z8qryo.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i37_fdlthh.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620014317/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i37_z8qryo.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i37_u74l2s.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014316/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i37_fdlthh.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620014317/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i37_z8qryo.webp'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_jumbo_200_drawer_jumbo_front_10i37_wdw3u5.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_jumbo_200_drawer_jumbo_front_10i37_wdw3u5.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014640/reference_drawer_mini_200_6ft_drawer_mini_front_10i37_jfpmjy.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014640/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i37_g3qnei.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i37_m6dhp4.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014640/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i37_g3qnei.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014640/reference_drawer_mini_200_6ft_drawer_mini_front_10i37_jfpmjy.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i37_m6dhp4.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_jumbo_200_drawer_jumbo_front_10i37_wdw3u5.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620014642/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i37_aos5tx.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i37_m6dhp4.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620014642/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i37_aos5tx.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014640/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i37_g3qnei.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620014641/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i37_m6dhp4.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620014642/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i37_aos5tx.png'
                    ]
                
            }
        }
    },
	asphalt: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620023779/reference_drawer_jumbo_190_drawer_jumbo_front_14i31_lhsunl.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620023779/reference_drawer_jumbo_190_drawer_jumbo_front_14i31_lhsunl.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_mini_190_4ft6_drawer_mini_front_14i31_tgsjtu.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i31_jakr2f.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i31_dechls.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i31_jakr2f.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_mini_190_4ft6_drawer_mini_front_14i31_tgsjtu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i31_dechls.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620023779/reference_drawer_jumbo_190_drawer_jumbo_front_14i31_lhsunl.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620023779/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i31_eyuef0.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i31_dechls.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620023779/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i31_eyuef0.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i31_jakr2f.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620023778/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i31_dechls.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620023779/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i31_eyuef0.webp'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620024218/reference_drawer_jumbo_190_drawer_jumbo_front_10i31_ebctuv.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620024218/reference_drawer_jumbo_190_drawer_jumbo_front_10i31_ebctuv.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024218/reference_drawer_mini_190_4ft6_drawer_mini_front_10i31_zee9by.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i31_daeiat.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i31_qd8bfx.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i31_daeiat.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024218/reference_drawer_mini_190_4ft6_drawer_mini_front_10i31_zee9by.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i31_qd8bfx.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620024218/reference_drawer_jumbo_190_drawer_jumbo_front_10i31_ebctuv.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i31_yq46mf.webp',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i31_qd8bfx.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i31_yq46mf.webp',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i31_daeiat.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i31_qd8bfx.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620024217/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i31_yq46mf.webp',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_jumbo_200_drawer_jumbo_front_14i31_hw6jj0.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_jumbo_200_drawer_jumbo_front_14i31_hw6jj0.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_mini_200_5ft_drawer_mini_front_14i31_wtgrul.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024736/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i31_hdeutc.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i31_h1cyiv.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024736/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i31_hdeutc.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_mini_200_5ft_drawer_mini_front_14i31_wtgrul.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i31_h1cyiv.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_jumbo_200_drawer_jumbo_front_14i31_hw6jj0.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620024738/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i31_fymfpo.webp',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i31_h1cyiv.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620024738/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i31_fymfpo.webp',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024736/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i31_hdeutc.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620024737/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i31_h1cyiv.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620024738/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i31_fymfpo.webp',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_jumbo_200_drawer_jumbo_front_10i31_bqtctu.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_jumbo_200_drawer_jumbo_front_10i31_bqtctu.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_mini_200_5ft_drawer_mini_front_10i31_fh9wjq.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i31_vam2bz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i31_wc83od.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i31_vam2bz.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_mini_200_5ft_drawer_mini_front_10i31_fh9wjq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i31_wc83od.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_jumbo_200_drawer_jumbo_front_10i31_bqtctu.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i31_te0gro.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i31_wc83od.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i31_te0gro.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i31_vam2bz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i31_wc83od.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620025037/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i31_te0gro.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_jumbo_200_drawer_jumbo_front_14i31_niexcb.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_jumbo_200_drawer_jumbo_front_14i31_niexcb.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_mini_200_6ft_drawer_mini_front_14i31_wiyjva.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027277/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i31_be1c10.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i31_ep8esc.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027277/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i31_be1c10.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_mini_200_6ft_drawer_mini_front_14i31_wiyjva.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i31_ep8esc.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_jumbo_200_drawer_jumbo_front_14i31_niexcb.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i31_ziryjz.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i31_ep8esc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i31_ziryjz.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027277/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i31_be1c10.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i31_ep8esc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620027257/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i31_ziryjz.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620027622/reference_drawer_jumbo_200_drawer_jumbo_front_10i31_bbuvvk.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620027622/reference_drawer_jumbo_200_drawer_jumbo_front_10i31_bbuvvk.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_mini_200_6ft_drawer_mini_front_10i31_yg6wnq.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i31_wsttvo.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i31_y8hdos.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i31_wsttvo.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_mini_200_6ft_drawer_mini_front_10i31_yg6wnq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i31_y8hdos.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620027622/reference_drawer_jumbo_200_drawer_jumbo_front_10i31_bbuvvk.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620027622/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i31_lxilge.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i31_y8hdos.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620027622/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i31_lxilge.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i31_wsttvo.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620027621/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i31_y8hdos.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620027622/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i31_lxilge.webp'
                    ]
                
            }
        }
    },
	beige: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048033/reference_drawer_jumbo_190_drawer_jumbo_front_14i38_dscans.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048033/reference_drawer_jumbo_190_drawer_jumbo_front_14i38_dscans.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048034/reference_drawer_mini_190_4ft6_drawer_mini_front_14i38_x7d8nr.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048034/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i38_zdtz47.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048036/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i38_chfbry.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048034/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i38_zdtz47.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048034/reference_drawer_mini_190_4ft6_drawer_mini_front_14i38_x7d8nr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048036/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i38_chfbry.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048033/reference_drawer_jumbo_190_drawer_jumbo_front_14i38_dscans.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048035/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i38_teyy4d.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048036/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i38_chfbry.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048035/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i38_teyy4d.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048034/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i38_zdtz47.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048036/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i38_chfbry.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048035/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i38_teyy4d.webp'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048297/reference_drawer_jumbo_190_drawer_jumbo_front_10i38_sysz2f.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048297/reference_drawer_jumbo_190_drawer_jumbo_front_10i38_sysz2f.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048297/reference_drawer_mini_190_4ft6_drawer_mini_front_10i38_ly5dgr.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i38_wmc5rr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i38_txuiey.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i38_wmc5rr.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048297/reference_drawer_mini_190_4ft6_drawer_mini_front_10i38_ly5dgr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i38_txuiey.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048297/reference_drawer_jumbo_190_drawer_jumbo_front_10i38_sysz2f.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048299/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i38_lrkspb.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i38_txuiey.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048299/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i38_lrkspb.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i38_wmc5rr.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048298/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i38_txuiey.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048299/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i38_lrkspb.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048716/reference_drawer_jumbo_200_drawer_jumbo_front_14i38_zoopll.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048716/reference_drawer_jumbo_200_drawer_jumbo_front_14i38_zoopll.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048717/reference_drawer_mini_200_5ft_drawer_mini_front_14i38_d43rfz.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i38_sykngx.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i38_pevrrv.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i38_sykngx.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048717/reference_drawer_mini_200_5ft_drawer_mini_front_14i38_d43rfz.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i38_pevrrv.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048716/reference_drawer_jumbo_200_drawer_jumbo_front_14i38_zoopll.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048717/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i38_seyxkf.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i38_pevrrv.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048717/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i38_seyxkf.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i38_sykngx.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048719/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i38_pevrrv.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048717/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i38_seyxkf.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_jumbo_200_drawer_jumbo_front_10i38_z20cuq.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_jumbo_200_drawer_jumbo_front_10i38_z20cuq.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_mini_200_5ft_drawer_mini_front_10i38_ocn89r.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048966/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i38_qosiiv.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i38_vjp4op.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048966/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i38_qosiiv.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_mini_200_5ft_drawer_mini_front_10i38_ocn89r.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i38_vjp4op.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_jumbo_200_drawer_jumbo_front_10i38_z20cuq.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048966/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i38_q6jhcq.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i38_vjp4op.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048966/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i38_q6jhcq.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048966/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i38_qosiiv.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620048965/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i38_vjp4op.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620048966/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i38_q6jhcq.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620049606/reference_drawer_jumbo_200_drawer_jumbo_front_14i38_slv2y3.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620049606/reference_drawer_jumbo_200_drawer_jumbo_front_14i38_slv2y3.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_mini_200_6ft_drawer_mini_front_14i38_rex8wh.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i38_m9qyxc.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i38_vxggix.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i38_m9qyxc.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_mini_200_6ft_drawer_mini_front_14i38_rex8wh.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i38_vxggix.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620049606/reference_drawer_jumbo_200_drawer_jumbo_front_14i38_slv2y3.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i38_glwg3t.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i38_vxggix.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i38_glwg3t.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i38_m9qyxc.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i38_vxggix.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620124572/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i38_glwg3t.webp'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_jumbo_200_drawer_jumbo_front_10i38_1_bdvzis.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_jumbo_200_drawer_jumbo_front_10i38_1_bdvzis.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_mini_200_6ft_drawer_mini_front_10i38_a7gytd.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i38_jnxfjj.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i38_j6akcf.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i38_jnxfjj.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_mini_200_6ft_drawer_mini_front_10i38_a7gytd.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i38_j6akcf.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_jumbo_200_drawer_jumbo_front_10i38_1_bdvzis.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i38_kmcdtz.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i38_j6akcf.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i38_kmcdtz.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i38_jnxfjj.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i38_j6akcf.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620124778/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i38_kmcdtz.webp'
                    ]
                
            }
        }
    },
	mustard: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_jumbo_190_drawer_jumbo_front_14i39_jzw7d4.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_jumbo_190_drawer_jumbo_front_14i39_jzw7d4.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_mini_190_4ft6_drawer_mini_front_14i39_i1g3mb.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i39_emlh0r.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i39_xhfcvv.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i39_emlh0r.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_mini_190_4ft6_drawer_mini_front_14i39_i1g3mb.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i39_xhfcvv.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_jumbo_190_drawer_jumbo_front_14i39_jzw7d4.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i39_bfvhba.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i39_xhfcvv.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i39_bfvhba.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i39_emlh0r.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i39_xhfcvv.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620125227/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i39_bfvhba.webp'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_jumbo_190_drawer_jumbo_front_10i39_xyuhzv.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_jumbo_190_drawer_jumbo_front_10i39_xyuhzv.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_mini_190_4ft6_drawer_mini_front_10i39_fsrxdl.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125434/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i39_f7itvu.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i39_zagpbz.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125434/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i39_f7itvu.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_mini_190_4ft6_drawer_mini_front_10i39_fsrxdl.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i39_zagpbz.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_jumbo_190_drawer_jumbo_front_10i39_xyuhzv.webp",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i39_d4evxc.webp',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i39_zagpbz.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i39_d4evxc.webp',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125434/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i39_f7itvu.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i39_zagpbz.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620125433/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i39_d4evxc.webp',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_d7ppth.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_d7ppth.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_mini_200_5ft_drawer_mini_front_14i39_my19ux.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i39_nvrmxd.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i39_towroh.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i39_nvrmxd.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_mini_200_5ft_drawer_mini_front_14i39_my19ux.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i39_towroh.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_d7ppth.webp",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i39_xzbfzl.webp',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i39_towroh.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i39_xzbfzl.webp',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i39_nvrmxd.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i39_towroh.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620126254/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i39_xzbfzl.webp',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_jumbo_200_drawer_jumbo_front_10i39_bgsnka.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_jumbo_200_drawer_jumbo_front_10i39_bgsnka.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126476/reference_drawer_mini_200_5ft_drawer_mini_front_10i39_mznmhd.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i39_d4aiym.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i39_ylwmgr.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i39_d4aiym.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126476/reference_drawer_mini_200_5ft_drawer_mini_front_10i39_mznmhd.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i39_ylwmgr.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_jumbo_200_drawer_jumbo_front_10i39_bgsnka.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620126476/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i39_umvcw8.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i39_ylwmgr.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620126476/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i39_umvcw8.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i39_d4aiym.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620126475/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i39_ylwmgr.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620126476/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i39_umvcw8.webp'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_zpdun5.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_zpdun5.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_mini_200_6ft_drawer_mini_front_14i39_tbkb0l.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i39_ipts4v.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i39_d16jq4.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i39_ipts4v.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_mini_200_6ft_drawer_mini_front_14i39_tbkb0l.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i39_d16jq4.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_zpdun5.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_jjlfza.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i39_d16jq4.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_jjlfza.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i39_ipts4v.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i39_d16jq4.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620127195/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_jjlfza.webp'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_jumbo_200_drawer_jumbo_front_10i39_iypfgc.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_jumbo_200_drawer_jumbo_front_10i39_iypfgc.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_mini_200_6ft_drawer_mini_front_10i39_sxwqp9.webp'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i39_xdst2b.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i39_npqlmb.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i39_xdst2b.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_mini_200_6ft_drawer_mini_front_10i39_sxwqp9.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i39_npqlmb.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_jumbo_200_drawer_jumbo_front_10i39_iypfgc.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i39_mgpojs.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i39_npqlmb.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i39_mgpojs.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i39_xdst2b.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i39_npqlmb.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620127457/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i39_mgpojs.webp'
                    ]
                
            }
        }
    },
	bpvelvet: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098587/reference_drawer_jumbo_190_drawer_jumbo_front_14i33_zqitjv.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098587/reference_drawer_jumbo_190_drawer_jumbo_front_14i33_zqitjv.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098586/reference_drawer_mini_190_4ft6_drawer_mini_front_14i33_ywixql.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098586/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i33_qmoidj.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098588/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i33_frtdgt.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098586/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i33_qmoidj.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098586/reference_drawer_mini_190_4ft6_drawer_mini_front_14i33_ywixql.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098588/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i33_frtdgt.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098587/reference_drawer_jumbo_190_drawer_jumbo_front_14i33_zqitjv.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098587/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i33_evrfrw.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098588/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i33_frtdgt.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098587/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i33_evrfrw.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098586/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i33_qmoidj.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098588/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i33_frtdgt.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098587/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i33_evrfrw.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098778/reference_drawer_jumbo_190_drawer_jumbo_front_10i33_tus5k8.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098778/reference_drawer_jumbo_190_drawer_jumbo_front_10i33_tus5k8.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_mini_190_4ft6_drawer_mini_front_10i33_tqbpmv.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i33_mh7bwu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i33_norwff.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i33_mh7bwu.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_mini_190_4ft6_drawer_mini_front_10i33_tqbpmv.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i33_norwff.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098778/reference_drawer_jumbo_190_drawer_jumbo_front_10i33_tus5k8.png",
                    /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098778/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i33_mtotjg.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i33_norwff.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098778/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i33_mtotjg.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i33_mh7bwu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098777/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i33_norwff.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098778/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i33_mtotjg.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098943/reference_drawer_jumbo_200_drawer_jumbo_front_14i33_osia7c.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098943/reference_drawer_jumbo_200_drawer_jumbo_front_14i33_osia7c.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098939/reference_drawer_mini_200_5ft_drawer_mini_front_14i33_av6abi.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i33_xlaa2y.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i33_xvplxv.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620061153/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i39_wzgrnt.png',
                      /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098939/reference_drawer_mini_200_5ft_drawer_mini_front_14i33_av6abi.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i33_xvplxv.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620098943/reference_drawer_jumbo_200_drawer_jumbo_front_14i33_osia7c.png",
                      /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i33_brimp9.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i33_xvplxv.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i33_brimp9.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620061153/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i39_wzgrnt.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i33_xvplxv.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620098940/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i33_brimp9.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_jumbo_200_drawer_jumbo_front_10i33_uvgjk0.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_jumbo_200_drawer_jumbo_front_10i33_uvgjk0.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099333/reference_drawer_mini_200_5ft_drawer_mini_front_10i33_ryyagb.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i33_ojxvxg.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i33_pbffql.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i33_ojxvxg.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099333/reference_drawer_mini_200_5ft_drawer_mini_front_10i33_ryyagb.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i33_pbffql.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_jumbo_200_drawer_jumbo_front_10i33_uvgjk0.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i33_o57wgx.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i33_pbffql.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i33_o57wgx.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i33_ojxvxg.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i33_pbffql.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099332/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i33_o57wgx.webp'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620099516/reference_drawer_jumbo_200_drawer_jumbo_front_14i33_kfddsu.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620099516/reference_drawer_jumbo_200_drawer_jumbo_front_14i33_kfddsu.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_mini_200_6ft_drawer_mini_front_14i33_zpzyn5.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i33_vfc5rj.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i33_guj34a.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i33_vfc5rj.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_mini_200_6ft_drawer_mini_front_14i33_zpzyn5.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i33_guj34a.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620099516/reference_drawer_jumbo_200_drawer_jumbo_front_14i33_kfddsu.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099517/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i33_mvedwl.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i33_guj34a.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099517/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i33_mvedwl.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620049606/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i38_xgc3ta.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620099515/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i33_guj34a.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620099517/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i33_mvedwl.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_jumbo_200_drawer_jumbo_front_10i33_hh8rl6.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_jumbo_200_drawer_jumbo_front_10i33_hh8rl6.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_mini_200_6ft_drawer_mini_front_10i33_ipymx0.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100248/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i33_qj56u3.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i33_bncpls.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100248/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i33_qj56u3.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_mini_200_6ft_drawer_mini_front_10i33_ipymx0.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i33_bncpls.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_jumbo_200_drawer_jumbo_front_10i33_hh8rl6.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i33_a1aqzp.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i33_bncpls.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i33_a1aqzp.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100248/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i33_qj56u3.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i33_bncpls.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620100249/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i33_a1aqzp.png'
                    ]
                
            }
        }
    },
	plum: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120396/reference_drawer_jumbo_190_drawer_jumbo_front_14i9_y0couk.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120396/reference_drawer_jumbo_190_drawer_jumbo_front_14i9_y0couk.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_mini_190_4ft6_drawer_mini_front_14i9_mnjhxp.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i9_zwaw2l.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i9_ha1uxv.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i9_zwaw2l.webp',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_mini_190_4ft6_drawer_mini_front_14i9_mnjhxp.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i9_ha1uxv.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120396/reference_drawer_jumbo_190_drawer_jumbo_front_14i9_y0couk.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i9_wyomi1.webp'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i9_ha1uxv.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i9_wyomi1.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i9_zwaw2l.webp',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i9_ha1uxv.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120395/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i9_wyomi1.webp'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120396/reference_drawer_jumbo_190_drawer_jumbo_front_14i9_y0couk.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120396/reference_drawer_jumbo_190_drawer_jumbo_front_14i9_y0couk.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_mini_190_4ft6_drawer_mini_front_10i9_uc7zha.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i9_bduufo.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i9_hgnltc.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i9_bduufo.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_mini_190_4ft6_drawer_mini_front_10i9_uc7zha.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i9_hgnltc.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120396/reference_drawer_jumbo_190_drawer_jumbo_front_14i9_y0couk.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i9_pu1ztv.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i9_hgnltc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i9_pu1ztv.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i9_bduufo.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i9_hgnltc.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120565/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i9_pu1ztv.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_jumbo_200_drawer_jumbo_front_14i9_n2l9kt.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_jumbo_200_drawer_jumbo_front_14i9_n2l9kt.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120888/reference_drawer_mini_200_5ft_drawer_mini_front_14i9_x99wh9.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120888/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i9_sv43xu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i9_ovvw30.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120888/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i9_sv43xu.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120888/reference_drawer_mini_200_5ft_drawer_mini_front_14i9_x99wh9.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i9_ovvw30.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_jumbo_200_drawer_jumbo_front_14i9_n2l9kt.png",
                   /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i9_maade2.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i9_ovvw30.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i9_maade2.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120888/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i9_sv43xu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i9_ovvw30.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620120889/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i9_maade2.png',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620121399/reference_drawer_jumbo_200_drawer_jumbo_front_10i9_zsmf9w.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620121399/reference_drawer_jumbo_200_drawer_jumbo_front_10i9_zsmf9w.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_mini_200_5ft_drawer_mini_front_10i9_sfk2lf.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i9_yvz0dc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i9_bwjzax.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i9_yvz0dc.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_mini_200_5ft_drawer_mini_front_10i9_sfk2lf.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i9_bwjzax.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620121399/reference_drawer_jumbo_200_drawer_jumbo_front_10i9_zsmf9w.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i9_wi59hr.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i9_bwjzax.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i9_wi59hr.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i9_yvz0dc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i9_bwjzax.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620121398/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i9_wi59hr.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620122922/reference_drawer_jumbo_200_drawer_jumbo_front_14i9_ligdhc.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620122922/reference_drawer_jumbo_200_drawer_jumbo_front_14i9_ligdhc.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_mini_200_6ft_drawer_mini_front_14i9_cqahnj.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i9_n0sxxa.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i9_urlepg.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i9_n0sxxa.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_mini_200_6ft_drawer_mini_front_14i9_cqahnj.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i9_urlepg.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620122922/reference_drawer_jumbo_200_drawer_jumbo_front_14i9_ligdhc.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i9_hguekv.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i9_urlepg.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i9_hguekv.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i9_n0sxxa.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i9_urlepg.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620122921/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i9_hguekv.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_jumbo_200_drawer_jumbo_front_10i9_phdxk6.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_jumbo_200_drawer_jumbo_front_10i9_phdxk6.png",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123123/reference_drawer_mini_200_6ft_drawer_mini_front_10i9_mngkfc.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i9_yyhqgg.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123123/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i9_xmag12.webp'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i9_yyhqgg.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123123/reference_drawer_mini_200_6ft_drawer_mini_front_10i9_mngkfc.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123123/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i9_xmag12.webp'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_jumbo_200_drawer_jumbo_front_10i9_phdxk6.png",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i9_ecjzzz.webp'
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123123/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i9_xmag12.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i9_ecjzzz.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i9_yyhqgg.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620123123/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i9_xmag12.webp',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620123124/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i9_ecjzzz.webp'
                    ]
                
            }
        }
    },
    charcoal: {
        feet4: {
            depthx3: {
                /*end Drawers*/
                storagex1: 
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_jumbo_190_drawer_jumbo_front_14i1_oew261.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_jumbo_190_drawer_jumbo_front_14i1_oew261.png",
                   /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_mini_190_4ft6_drawer_mini_front_14i1_vh9w81.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160874/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i1_pmh1rk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i1_iqybup.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160874/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i1_pmh1rk.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_mini_190_4ft6_drawer_mini_front_14i1_vh9w81.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i1_iqybup.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_jumbo_190_drawer_jumbo_front_14i1_oew261.png",
                   /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i1_gdfmoz.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i1_iqybup.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i1_gdfmoz.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160874/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_14i1_pmh1rk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_front_190_4ft6_drawer_normal_front_14i1_iqybup.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620160875/reference_drawer_normal_back_190_4ft6_drawer_normal_front_14i1_gdfmoz.png'
                    ]
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_jumbo_190_drawer_jumbo_front_10i1_pbti23.png",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_jumbo_190_drawer_jumbo_front_10i1_pbti23.png",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_mini_190_4ft6_drawer_mini_front_10i1_qfowtm.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161157/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i1_yu0r8g.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i1_xqgp84.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161157/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i1_yu0r8g.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_mini_190_4ft6_drawer_mini_front_10i1_qfowtm.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i1_xqgp84.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_jumbo_190_drawer_jumbo_front_10i1_pbti23.png",
                     /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i1_op8nl1.png',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i1_xqgp84.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i1_op8nl1.png',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161157/reference_drawer_normal_front_left_190_4ft_drawer_normal_front_10i1_yu0r8g.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_front_190_4ft6_drawer_normal_front_10i1_xqgp84.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161158/reference_drawer_normal_back_190_4ft6_drawer_normal_front_10i1_op8nl1.png',
                    ]
                
            }
        },
        feet5: {
            depthx3: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161475/reference_drawer_jumbo_200_drawer_jumbo_front_14i1_mdayib.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161475/reference_drawer_jumbo_200_drawer_jumbo_front_14i1_mdayib.webp",
                    /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_mini_200_5ft_drawer_mini_front_14i1_wvu7ky.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i1_txrbwk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i1_azyjyp.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i1_txrbwk.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_mini_200_5ft_drawer_mini_front_14i1_wvu7ky.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i1_azyjyp.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161475/reference_drawer_jumbo_200_drawer_jumbo_front_14i1_mdayib.webp",
                   /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i1_wvmmfe.webp',
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i1_azyjyp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i1_wvmmfe.webp',
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_14i1_txrbwk.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_front_200_5ft_drawer_normal_front_14i1_azyjyp.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161474/reference_drawer_normal_back_200_5ft_drawer_normal_front_14i1_wvmmfe.webp',
                    ]
                  
                   
 
            },
            depthx2: {
                 /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_jumbo_200_drawer_jumbo_front_10i1_hez8fk.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_jumbo_200_drawer_jumbo_front_10i1_hez8fk.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_mini_200_5ft_drawer_mini_front_10i1_aj72f6.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i1_tpcbbo.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i1_txiv3s.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i1_tpcbbo.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_mini_200_5ft_drawer_mini_front_10i1_aj72f6.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i1_txiv3s.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_jumbo_200_drawer_jumbo_front_10i1_hez8fk.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i1_mhctmk.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i1_txiv3s.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i1_mhctmk.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_left_200_5ft_drawer_normal_front_10i1_tpcbbo.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_front_200_5ft_drawer_normal_front_10i1_txiv3s.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_normal_back_200_5ft_drawer_normal_front_10i1_mhctmk.png'
                    ]
                 
                
            },
            
 
        },
        feet6: {
            depthx3: {
               /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161475/reference_drawer_jumbo_200_drawer_jumbo_front_14i1_mdayib.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161475/reference_drawer_jumbo_200_drawer_jumbo_front_14i1_mdayib.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_mini_200_6ft_drawer_mini_front_14i1_cakbmq.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162032/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i1_gfytmq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i1_zccelf.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162032/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i1_gfytmq.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_mini_200_6ft_drawer_mini_front_14i1_cakbmq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i1_zccelf.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161475/reference_drawer_jumbo_200_drawer_jumbo_front_14i1_mdayib.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i1_rehofo.png'
                ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i1_zccelf.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i1_rehofo.png'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162032/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_14i1_gfytmq.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i1_zccelf.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162033/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i1_rehofo.png'
                    ]
                 
                
                
            },
            depthx2: {
                /*end Drawers*/
                storagex1:
                    
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_jumbo_200_drawer_jumbo_front_10i1_hez8fk.webp",
                /*End Drawer with 2 Mini Drawers*/
                storagex2:
                    [
                        
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_jumbo_200_drawer_jumbo_front_10i1_hez8fk.webp",
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_mini_200_6ft_drawer_mini_front_10i1_yhvzrs.png'
                ],
                /*2 Drawers*/
                storagex3:
                    [
                        
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i1_fnnifu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i1_getj91.png'
                        
                ],
                /* 2 Drawers with 2 Mini Drawers*/ 
                storagex4:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i1_fnnifu.png',
                        /*right coto dawrer picone*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_mini_200_6ft_drawer_mini_front_10i1_yhvzrs.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i1_getj91.png'
                        
                ],
             /*2 Drawers with End Drawers*/  
             storagex5:
                    [
                   /*big dawrer*/ "https://res.cloudinary.com/furniturebuild/image/upload/v1620161730/reference_drawer_jumbo_200_drawer_jumbo_front_10i1_hez8fk.webp",
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i1_xcbtpg.webp'
                    ],
             /*2 Drawers Same Side*/  
             storagex6:
                    [
                       
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i1_getj91.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i1_xcbtpg.webp'
                       
                ],
                /*4 Drawers*/  
                storagex7:
                    [
                       /*left dawrer*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_left_200_6ft_drawer_normal_front_10i1_fnnifu.png',
                      /*right boro dawrer samne*/ 'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_front_200_6ft_drawer_normal_front_10i1_getj91.png',
                       /*right boro dawrer picone*/  'https://res.cloudinary.com/furniturebuild/image/upload/v1620162217/reference_drawer_normal_back_200_6ft_drawer_normal_front_10i1_xcbtpg.webp'
                    ]
                
            }
        }
    }

}
       

 /* Price selection*/
const allPrice = {
   feet2: 300,
   feet4: 400,
   feet5: 550,
   feet6: 600,
   storagex0: 0,
   storagex1: 50,
   storageOttoman:200,
   storagex2: 60,
   storagex3: 80,
   storagex4: 90,
   storagex5: 100,
   storagex6: 150,
   storagex7: 200
}
const displayPrice = (att, cc) => {
   if(!currentSelectedstorage) {
    wasPrice = totalPrice
    prePrice.innerText = wasPrice
       const price = allPrice[att];
       totalPrice = price;
       priceRef.innerText = price
       
    }
	
	else {
        wasPrice = totalPrice
        if(!wasPrice) {
            prePrice.innerText = 200
        } else {
            prePrice.innerText = wasPrice

        } 
       const price = allPrice[currentSelectedSize] + allPrice[currentSelectedstorage];
       totalPrice = price;
       priceRef.innerText = price
    }
    if(currentSelectedSize === 'feet2' && currentSelectedstorage === '') {

       currentSelectedstorage = ''
       prePrice.innerText = 200
    }
    if(cc === 'storageOttoman') {

       currentSelectedstorage =cc
    }
}


/* Image selction all id from html*/
const flor = document.getElementById('flor');
const huk = document.getElementById('huk');
const header = document.getElementById('header');
const body = document.getElementById('body');
const storage = document.getElementById('storage');
const priceRef = document.getElementById('price')
const prePrice = document.getElementById('wasPrice')

/* Start size selector */
const size2 = document.getElementById('size-button-2')
const size26 = document.getElementById('size-button-2-6')
const size4 = document.getElementById('size-button-4')
const size46 = document.getElementById('size-button-4-6')
const size5 = document.getElementById('size-button-5')
const size6 = document.getElementById('size-button-6')

/* click size*/
const getCLickedsize = (e) => {
     console.log('I am get clicked')
    console.log(e.target.dataset.size)
    const att = e.target.dataset.size;
    currentSelectedSize = att
    displayPrice(att,currentSelectedstorage)
   if(currentSelectedSize === "feet2" && currentSelectedstorage === 'storageOttoman') {
       const getImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectedstorage];
       body.src = getImage
	   
	         storageOttoman.style.border="1px solid #F0386C"
			 storage0.style.border="none"
			
			storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
    }
    if(e.target.dataset.name) {
       currentSelectedSizeName = e.target.dataset.name
    } 
    else {
       currentSelectedSizeName = ''
    }
    if(currentSelectsape === 'no') {
       header.src = ''
    }
    if (currentSelectedSize === 'feet2') {
       storage.src = ''
       twoStorage.src = ''
       rightBox.src = ''
       leftBox.src = ''
       storage1m.src = ''
       twoStorage1.src = ''
       rightBox1.src = ''
       leftBox1.src = ''
       storage.style.display = 'none'
       twoStorage.style.display = 'none'
       rightBox.style.display = 'none'
       leftBox.style.display = 'none'
	   
       storage1.style.opacity="0.3"
       storage1.style.cursor="not-allowed"
	   storage1.setAttribute('disabled','disabled')
	   
       storage2.style.opacity="0.3"
       storage2.style.cursor="not-allowed"
	   storage2.setAttribute('disabled','disabled')
	   
       storage3.style.opacity="0.3"
       storage3.style.cursor="not-allowed"
	   storage3.setAttribute('disabled','disabled')
	   
       storage4.style.opacity="0.3"
       storage4.style.cursor="not-allowed"
	   storage4.setAttribute('disabled','disabled')
	   
       storage5.style.opacity="0.3"
       storage5.style.cursor="not-allowed"
	   storage5.setAttribute('disabled','disabled')
	   
       storage6.style.opacity="0.3"
       storage6.style.cursor="not-allowed"
	   storage6.setAttribute('disabled','disabled')
	   
       storage7.style.opacity="0.3"
       storage7.style.cursor="not-allowed"
	   storage7.setAttribute('disabled','disabled')
       boxNameB.innerText = boxName.storagex0;
    }
	if(currentSelectedstorage === 'storageOttoman') {
        boxNameB.innerText = 'Ottoman'
       }
    if (((currentSelectedSize === 'feet4') && (currentSelectDepth==="depthx1")) || ((currentSelectedSize === 'feet5') && (currentSelectDepth==="depthx1")) || ((currentSelectedSize === 'feet6') && (currentSelectDepth==="depthx1"))) {
	   storage1.style.opacity="0.3"
       storage1.style.cursor="not-allowed"
	   storage1.setAttribute('disabled','disabled')
	   
       storage2.style.opacity="0.3"
       storage2.style.cursor="not-allowed"
	   storage2.setAttribute('disabled','disabled')
	   
       storage3.style.opacity="0.3"
       storage3.style.cursor="not-allowed"
	   storage3.setAttribute('disabled','disabled')
	   
       storage4.style.opacity="0.3"
       storage4.style.cursor="not-allowed"
	   storage4.setAttribute('disabled','disabled')
	   
       storage5.style.opacity="0.3"
       storage5.style.cursor="not-allowed"
	   storage5.setAttribute('disabled','disabled')
	   
       storage6.style.opacity="0.3"
       storage6.style.cursor="not-allowed"
	   storage6.setAttribute('disabled','disabled')
	   
       storage7.style.opacity="0.3"
       storage7.style.cursor="not-allowed"
	   storage7.setAttribute('disabled','disabled')
	   
	   
    }
    if (((currentSelectedSize === 'feet4') && (currentSelectDepth==="depthx2")) || ((currentSelectedSize === 'feet5') && (currentSelectDepth==="depthx2")) || ((currentSelectedSize === 'feet6') && (currentSelectDepth==="depthx2"))) {
       storage1.style.opacity="1"
       storage1.style.cursor="pointer"
	   storage1.removeAttribute('disabled','disabled')
	   
       storage2.style.opacity="1"
       storage2.style.cursor="pointer"
	   storage2.removeAttribute('disabled','disabled')
	   
       storage3.style.opacity="1"
       storage3.style.cursor="pointer"
	   storage3.removeAttribute('disabled','disabled')
	   
       storage4.style.opacity="1"
       storage4.style.cursor="pointer"
	   storage4.removeAttribute('disabled','disabled')
	   
       storage5.style.opacity="1"
       storage5.style.cursor="pointer"
	   storage5.removeAttribute('disabled','disabled')
	   
       storage6.style.opacity="1"
       storage6.style.cursor="pointer"
	   storage6.removeAttribute('disabled','disabled')
	   
       storage7.style.opacity="1"
       storage7.style.cursor="pointer"
	   storage7.removeAttribute('disabled','disabled')
    }
    if (((currentSelectedSize === 'feet4') && (currentSelectDepth==="depthx3")) || ((currentSelectedSize === 'feet5') && (currentSelectDepth==="depthx3")) || ((currentSelectedSize === 'feet6') && (currentSelectDepth==="depthx3"))) {
       storage1.style.opacity="1"
       storage1.style.cursor="pointer"
	   storage1.removeAttribute('disabled','disabled')
	   
       storage2.style.opacity="1"
       storage2.style.cursor="pointer"
	   storage2.removeAttribute('disabled','disabled')
	   
       storage3.style.opacity="1"
       storage3.style.cursor="pointer"
	   storage3.removeAttribute('disabled','disabled')
	   
       storage4.style.opacity="1"
       storage4.style.cursor="pointer"
	   storage4.removeAttribute('disabled','disabled')
	   
       storage5.style.opacity="1"
       storage5.style.cursor="pointer"
	   storage5.removeAttribute('disabled','disabled')
	   
       storage6.style.opacity="1"
       storage6.style.cursor="pointer"
	   storage6.removeAttribute('disabled','disabled')
	   
       storage7.style.opacity="1"
       storage7.style.cursor="pointer"
	   storage7.removeAttribute('disabled','disabled')
    }
   
    const getImage = colorBedModal[currentSelectedColor][currentSelectedSize]
    const anotherImage = allsape[currentSelectedColor][currentSelectedSize][currentSelectsape]

    flor.src = getImage[0]
    huk.src = getImage[1]
    header.src = getImage[2]
    body.src = getImage[3]
    if (currentSelectDepth) {
       const getImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];

       body.src = getImage
    }
    if (currentSelectsape) {
       header.src = anotherImage

    }
   if (currentSelectedSize==="feet2") {
       storage.src ="";
       twoStorage.src = "";
       rightBox.src = "";
       leftBox.src = "";
    }
	 if(  currentSelectedstorage === 'storagex1' && allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] ) {
      const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage];
      storage.src = getImage;

    } 
    if(  currentSelectedstorage === 'storagex2' && allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] ) {
      const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage];
      twoStorage.src = getImage[0];
      storage.src = getImage[1];

    } 
	else if (  currentSelectedstorage === 'storagex3' && allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] ) {
       const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage]
       rightBox.src = getImage[0];
       leftBox.src = getImage[1];
    }
    else if (  currentSelectedstorage === 'storagex4' && allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] ) {
       const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage]
       
       rightBox.src = getImage[0];
       twoStorage.src = getImage[1];
       leftBox.src = getImage[2];
    }
    else if ( currentSelectedstorage === 'storagex5' && allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] ) {
       const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage]
       
       twoStorage.src = getImage[0];
      storage.src = getImage[1];
    }
    else if ( currentSelectedstorage === 'storagex6' &&  allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] ) {
       const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage]
       
       leftBox.src = getImage[0];
      twoStorage.src = getImage[1];
    }
    else if (  currentSelectedstorage === 'storagex7' && allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage] && currentSelectedstorage === 'storagex7') {
       const getImage = allstorage[currentSelectedColor][att][currentSelectDepth][currentSelectedstorage]
       
       rightBox.src = getImage[0]
       leftBox.src = getImage[1];
       twoStorage.src = getImage[2]
    } 
	else if(currentSelectedstorage === 'storageOttoman') {
      const getImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectedstorage];
      body.src = getImage
    }
    sizeNameB.innerText = sizeName[att]
    if(e.target.dataset.name) {
       sizeNameB.innerText = sizeName[e.target.dataset.name]
    }
	if(currentSelectedSize==="feet2"){
		size2.style.border="1px solid #F0386C";
	}
	else{
		size2.style.border="none";
	}
	if(currentSelectedSize==="feet4"){
		size4.style.border="1px solid #F0386C";
	}
	else{
		size4.style.border="none";
	}
	if(currentSelectedSizeName==="feet26"){
		size26.style.border="1px solid #F0386C";
		size2.style.border="none";
	}
	else{
		size26.style.border="none";
	}
	if(currentSelectedSizeName==="feet46"){
		size46.style.border="1px solid #F0386C";
		size4.style.border="none";
	}
	else{
		size46.style.border="none";
	}
	if(currentSelectedSize==="feet5"){
		size5.style.border="1px solid #F0386C";
		
	}
	else{
		size5.style.border="none";
	}
	if(currentSelectedSize==="feet6"){
		size6.style.border="1px solid #F0386C";
		
	}
	else{
		size6.style.border="none";
	}
	if(currentSelectedSize==="feet2"  && currentSelectedstorage==="storageOttoman"){
 		storageOttoman.style.border="1px solid #F0386C"
 		storage0.style.border="none"
			storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
	}
	if(currentSelectedSize==="feet2" && currentSelectDepth==="depthx3" && !(currentSelectedstorage==="storageOttoman")){
 		storageOttoman.style.border="none"
 		storage0.style.border="1px solid #F0386C"
		storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
	}
	if(currentSelectedSize==="feet2" && currentSelectDepth==="depthx2"){
 		storageOttoman.style.border="none"
 		storage0.style.border="1px solid #F0386C"
		storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
	}
	
}

/* click size from this id*/
size2.addEventListener('click', getCLickedsize);
size26.addEventListener('click', getCLickedsize);
size4.addEventListener('click', getCLickedsize);
size46.addEventListener('click', getCLickedsize);
size5.addEventListener('click', getCLickedsize);
size6.addEventListener('click', getCLickedsize);







/* START color id*/
const gray = document.getElementById('gray')
const black = document.getElementById('black')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const white = document.getElementById('white')
const lime = document.getElementById('lime')
const duck = document.getElementById('duck')
const orchid = document.getElementById('orchid')
const graphite = document.getElementById('graphite')
const marine = document.getElementById('marine')
const emerald = document.getElementById('emerald')
const deggb = document.getElementById('deggb')
const silver = document.getElementById('silver')
const silgry = document.getElementById('silgry')
const cream = document.getElementById('cream')
const chocolate = document.getElementById('chocolate')
const pink = document.getElementById('pink')
const asphalt = document.getElementById('asphalt')
const beige = document.getElementById('beige')
const mustard = document.getElementById('mustard')
const bpvelvet = document.getElementById('bpvelvet')
const plum = document.getElementById('plum')
const charcoal = document.getElementById('charcoal')
/* click color*/
const getCLickedColor = (e) => {
	const att = e.target.dataset.color;
	currentSelectedColor = att
	const getImage = colorBedModal[att][currentSelectedSize]
	const getAnotherImage = allsape[currentSelectedColor][currentSelectedSize][currentSelectsape]
	flor.src = getImage[0]
	huk.src = getImage[1]
	header.src = getImage[2]
	body.src = getImage[3]
    if (currentSelectsape) {
       header.src = getAnotherImage
    }
    if (currentSelectDepth) {
       const getImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = getImage
    }
    if (currentSelectedstorage === 'storagex1') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage];
       twoStorage.style.display = 'none'
       storage.style.display = 'block';
       storage.src = getImage

       
    }
	else if(currentSelectedstorage === 'storagex2') {
       storage.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       storage.src = getImage[0];
       twoStorage.src = getImage[1]   
    } 
    else if(currentSelectedstorage === 'storagex3') {
       rightBox.style.display = 'block'
       leftBox.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       rightBox.src = getImage[0];
       leftBox.src = getImage[1]  
    }
    else if(currentSelectedstorage === 'storagex4') {
       rightBox.style.display = 'block'
       leftBox.style.display = 'block'
       twoStorage.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       rightBox.src = getImage[0]
       twoStorage.src = getImage[1];
       leftBox.src = getImage[2]   
    }
    else if(currentSelectedstorage === 'storagex5') {
       storage.style.display = 'block'
       twoStorage.style.display="block"
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       storage.src = getImage[0];
       twoStorage.src = getImage[1] 
    }
    else if(currentSelectedstorage === 'storagex6') {
        leftBox.style.display = 'block'
        twoStorage.style.display="block"
        const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
        leftBox.src = getImage[0];
        twoStorage.src = getImage[1] 
    }
    else if(currentSelectedstorage === 'storagex7') {
        leftBox.style.display = 'block'
        rightBox.style.display = 'block'
        twoStorage.style.display="block"
        const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
        rightBox.src = getImage[0]
        leftBox.src = getImage[1];
        twoStorage.src = getImage[2]   
    }
	else if(currentSelectedstorage === 'storageOttoman') {
       const bodyImage = alldepth[att][currentSelectedSize][currentSelectedstorage];
       body.src = bodyImage
    }
    colorNameB.innerText = colorName[att]
    if(e.target.dataset.color) {
       colorNameB.innerText = colorName[e.target.dataset.color]
    }
	
	if(currentSelectedColor==="gray"){
		gray.style.border="1px solid #F0386C"
	}
	else{
		gray.style.border="none"
	}
	if(currentSelectedColor==="black"){
		black.style.border="1px solid #F0386C"
	}
	else{
		black.style.border="none"
	}
	if(currentSelectedColor==="blue"){
		blue.style.border="1px solid #F0386C"
	}
	else{
		blue.style.border="none"
	}
	if(currentSelectedColor==="red"){
		red.style.border="1px solid #F0386C"
	}
	else{
		red.style.border="none"
	}
	if(currentSelectedColor==="white"){
		white.style.border="1px solid #F0386C"
	}
	else{
		white.style.border="none"
	}
	if(currentSelectedColor==="lime"){
		lime.style.border="1px solid #F0386C"
	}
	else{
		lime.style.border="none"
	}
	if(currentSelectedColor==="duck"){
		duck.style.border="1px solid #F0386C"
	}
	else{
		duck.style.border="none"
	}
	if(currentSelectedColor==="orchid"){
		orchid.style.border="1px solid #F0386C"
	}
	else{
		orchid.style.border="none"
	}
	if(currentSelectedColor==="graphite"){
		graphite.style.border="1px solid #F0386C"
	}
	else{
		graphite.style.border="none"
	}
	if(currentSelectedColor==="marine"){
		marine.style.border="1px solid #F0386C"
	}
	else{
		marine.style.border="none"
	}
	if(currentSelectedColor==="emerald"){
		emerald.style.border="1px solid #F0386C"
	}
	else{
		emerald.style.border="none"
	}
	if(currentSelectedColor==="deggb"){
		deggb.style.border="1px solid #F0386C"
	}
	else{
		deggb.style.border="none"
	}
	if(currentSelectedColor==="silver"){
		silver.style.border="1px solid #F0386C"
	}
	else{
		silver.style.border="none"
	}
	if(currentSelectedColor==="silgry"){
		silgry.style.border="1px solid #F0386C"
	}
	else{
		silgry.style.border="none"
	}
	if(currentSelectedColor==="cream"){
		cream.style.border="1px solid #F0386C"
	}
	else{
		cream.style.border="none"
	}
	if(currentSelectedColor==="chocolate"){
		chocolate.style.border="1px solid #F0386C"
	}
	else{
		chocolate.style.border="none"
	}
	if(currentSelectedColor==="pink"){
		pink.style.border="1px solid #F0386C"
	}
	else{
		pink.style.border="none"
	}
	if(currentSelectedColor==="asphalt"){
		asphalt.style.border="1px solid #F0386C"
	}
	else{
		asphalt.style.border="none"
	}
	if(currentSelectedColor==="beige"){
		beige.style.border="1px solid #F0386C"
	}
	else{
		beige.style.border="none"
	}
	if(currentSelectedColor==="mustard"){
		mustard.style.border="1px solid #F0386C"
	}
	else{
		mustard.style.border="none"
	}
	if(currentSelectedColor==="bpvelvet"){
		bpvelvet.style.border="1px solid #F0386C"
	}
	else{
		bpvelvet.style.border="none"
	}
	if(currentSelectedColor==="plum"){
		plum.style.border="1px solid #F0386C"
	}
	else{
		plum.style.border="none"
	}
	if(currentSelectedColor==="charcoal"){
		charcoal.style.border="1px solid #F0386C"
	}
	else{
		charcoal.style.border="none"
	}
	
}
/* click size from this id*/
gray.addEventListener('click', getCLickedColor)
black.addEventListener('click', getCLickedColor)
blue.addEventListener('click', getCLickedColor)
red.addEventListener('click', getCLickedColor)
white.addEventListener('click', getCLickedColor)
lime.addEventListener('click', getCLickedColor)
duck.addEventListener('click', getCLickedColor)
orchid.addEventListener('click', getCLickedColor)
graphite.addEventListener('click', getCLickedColor)
marine.addEventListener('click', getCLickedColor)
emerald.addEventListener('click', getCLickedColor)
deggb.addEventListener('click', getCLickedColor)
silver.addEventListener('click', getCLickedColor)
silgry.addEventListener('click', getCLickedColor)
cream.addEventListener('click', getCLickedColor)
chocolate.addEventListener('click', getCLickedColor)
pink.addEventListener('click', getCLickedColor)
asphalt.addEventListener('click', getCLickedColor)
beige.addEventListener('click', getCLickedColor)
mustard.addEventListener('click', getCLickedColor)
bpvelvet.addEventListener('click', getCLickedColor)
plum.addEventListener('click', getCLickedColor)
charcoal.addEventListener('click', getCLickedColor)



/* START sappe id*/
const no = document.getElementById('no')
const sape1 = document.getElementById('sape-1')
const sape1a = document.getElementById('sape-1a')
const sape1b = document.getElementById('sape-1b')
const sape2 = document.getElementById('sape-2')
const sape2a = document.getElementById('sape-2a')
const sape2b = document.getElementById('sape-2b')
const sape3 = document.getElementById('sape-3')
const sape3a = document.getElementById('sape-3a')
const sape3b = document.getElementById('sape-3b')
const sape4 = document.getElementById('sape-4')
const sape4a = document.getElementById('sape-4a')
const sape4b = document.getElementById('sape-4b')
const sape5 = document.getElementById('sape-5')
const sape5a = document.getElementById('sape-5a')
const sape5b = document.getElementById('sape-5b')
const sape6 = document.getElementById('sape-6')
const sape6a = document.getElementById('sape-6a')
const sape6b = document.getElementById('sape-6b')
const sape7 = document.getElementById('sape-7')
const sape7a = document.getElementById('sape-7a')
const sape7b = document.getElementById('sape-7b')


/* click sape*/
const getCLickedSape = (e) => {
    const att = e.target.dataset.sape;
    currentSelectsape = att
    const getImage = allsape[currentSelectedColor][currentSelectedSize][att]
    currentSelectedImage = getImage
    header.src = getImage
	 header.style.display="block"
    if(e.target.dataset.sape === 'no') {
       header.src = ''
	   header.style.display="none"
    }
    sapeNameB.innerText = sapeName[att]
    if(e.target.dataset.sape) {
       sapeNameB.innerText = sapeName[e.target.dataset.sape]
    }
	if(currentSelectsape==="no"){
		no.style.border="1px solid #F0386C"
	}
	else{
		no.style.border="none"
	}
	if(currentSelectsape==="sapex1"){
		sape1.style.border="1px solid #F0386C"
	}
	else{
		sape1.style.border="none"
	}
	if(currentSelectsape==="sapex1a"){
		sape1a.style.border="1px solid #F0386C"
	}
	else{
		sape1a.style.border="none"
	}
	if(currentSelectsape==="sapex1b"){
		sape1b.style.border="1px solid #F0386C"
	}
	else{
		sape1b.style.border="none"
	}
	if(currentSelectsape==="sapex2"){
		sape2.style.border="1px solid #F0386C"
	}
	else{
		sape2.style.border="none"
	}
	if(currentSelectsape==="sapex2a"){
		sape2a.style.border="1px solid #F0386C"
	}
	else{
		sape2a.style.border="none"
	}
	if(currentSelectsape==="sapex2b"){
		sape2b.style.border="1px solid #F0386C"
	}
	else{
		sape2b.style.border="none"
	}
	if(currentSelectsape==="sapex3"){
		sape3.style.border="1px solid #F0386C"
	}
	else{
		sape3.style.border="none"
	}
	if(currentSelectsape==="sapex3a"){
		sape3a.style.border="1px solid #F0386C"
	}
	else{
		sape3a.style.border="none"
	}
	if(currentSelectsape==="sapex3b"){
		sape3b.style.border="1px solid #F0386C"
	}
	else{
		sape3b.style.border="none"
	}
	if(currentSelectsape==="sapex4"){
		sape4.style.border="1px solid #F0386C"
	}
	else{
		sape4.style.border="none"
	}
	if(currentSelectsape==="sapex4a"){
		sape4a.style.border="1px solid #F0386C"
	}
	else{
		sape4a.style.border="none"
	}
	if(currentSelectsape==="sapex4b"){
		sape4b.style.border="1px solid #F0386C"
	}
	else{
		sape4b.style.border="none"
	}
	if(currentSelectsape==="sapex5"){
		sape5.style.border="1px solid #F0386C"
	}
	else{
		sape5.style.border="none"
	}
	if(currentSelectsape==="sapex5a"){
		sape5a.style.border="1px solid #F0386C"
	}
	else{
		sape5a.style.border="none"
	}
	if(currentSelectsape==="sapex5b"){
		sape5b.style.border="1px solid #F0386C"
	}
	else{
		sape5b.style.border="none"
	}
	if(currentSelectsape==="sapex6"){
		sape6.style.border="1px solid #F0386C"
	}
	else{
		sape6.style.border="none"
	}
	if(currentSelectsape==="sapex6a"){
		sape6a.style.border="1px solid #F0386C"
	}
	else{
		sape6a.style.border="none"
	}
	if(currentSelectsape==="sapex6b"){
		sape6b.style.border="1px solid #F0386C"
	}
	else{
		sape6b.style.border="none"
	}
	if(currentSelectsape==="sapex7"){
		sape7.style.border="1px solid #F0386C"
	}
	else{
		sape7.style.border="none"
	}
	if(currentSelectsape==="sapex7a"){
		sape7a.style.border="1px solid #F0386C"
	}
	else{
		sape7a.style.border="none"
	}
	if(currentSelectsape==="sapex7b"){
		sape7b.style.border="1px solid #F0386C"
	}
	else{
		sape7b.style.border="none"
	}
	
	
}
/* click sape from this id*/
no.addEventListener('click', getCLickedSape)
sape1.addEventListener('click', getCLickedSape)
sape1a.addEventListener('click', getCLickedSape)
sape1b.addEventListener('click', getCLickedSape)
sape2.addEventListener('click', getCLickedSape)
sape2a.addEventListener('click', getCLickedSape)
sape2b.addEventListener('click', getCLickedSape)
sape3.addEventListener('click', getCLickedSape)
sape3a.addEventListener('click', getCLickedSape)
sape3b.addEventListener('click', getCLickedSape)
sape4.addEventListener('click', getCLickedSape)
sape4a.addEventListener('click', getCLickedSape)
sape4b.addEventListener('click', getCLickedSape)
sape5.addEventListener('click', getCLickedSape)
sape5a.addEventListener('click', getCLickedSape)
sape5b.addEventListener('click', getCLickedSape)
sape6.addEventListener('click', getCLickedSape)
sape6a.addEventListener('click', getCLickedSape)
sape6b.addEventListener('click', getCLickedSape)
sape7.addEventListener('click', getCLickedSape)
sape7a.addEventListener('click', getCLickedSape)
sape7b.addEventListener('click', getCLickedSape)



/* START depth*/
const depth1 = document.getElementById('depth-1')
const depth2 = document.getElementById('depth-2')
const depth3 = document.getElementById('depth-3')

/* click depth*/
const getCLickeddepth = (e) => {
    const att = e.target.dataset.depth;
    currentSelectDepth = att
    currentSelectDepth = e.target.dataset.depth;
    const getImage = alldepth[currentSelectedColor][currentSelectedSize][att];
    body.src = getImage
    if (currentSelectDepth==="depthx1") {
       storage.src ="";
       twoStorage.src = "";
       rightBox.src = "";
       leftBox.src = "";
       document.getElementById("header").style.marginTop="40px"
       storage1.style.opacity="0.3"
       storage1.style.cursor="not-allowed"
	   storage1.setAttribute('disabled','disabled')
	   
       storage2.style.opacity="0.3"
       storage2.style.cursor="not-allowed"
	   storage2.setAttribute('disabled','disabled')
	   
       storage3.style.opacity="0.3"
       storage3.style.cursor="not-allowed"
	   storage3.setAttribute('disabled','disabled')
	   
       storage4.style.opacity="0.3"
       storage4.style.cursor="not-allowed"
	   storage4.setAttribute('disabled','disabled')
	   
       storage5.style.opacity="0.3"
       storage5.style.cursor="not-allowed"
	   storage5.setAttribute('disabled','disabled')
	   
       storage6.style.opacity="0.3"
       storage6.style.cursor="not-allowed"
	   storage6.setAttribute('disabled','disabled')
	   
       storage7.style.opacity="0.3"
       storage7.style.cursor="not-allowed"
	   storage7.setAttribute('disabled','disabled')
	   
       storageOttoman.style.opacity="0.3"
       storageOttoman.style.cursor="not-allowed"
       storageOttoman.setAttribute('disabled','disabled')
       if(currentSelectedstorage === 'storageOttoman') {
        boxNameB.innerText = 'No Drawer'
       }
    
       if(currentSelectedstorage === 'storageOttoman') {
        currentSelectedstorage="";
       }

       if(currentSelectedstorage !== 'storageOttoman') {
        currentSelectedstorage = ''
       }
	boxNameB.innerText = boxName.storagex0
	 storage0.style.border="1px solid #F0386C";
	 storage1.style.border="none";
	 storage2.style.border="none";
	 storage3.style.border="none";
	 storage4.style.border="none";
	 storage5.style.border="none";
	 storage6.style.border="none";
	 storage7.style.border="none";
	 storageOttoman.style.border="none";
    }
    if (((currentSelectDepth==="depthx2") && (currentSelectedSize==="feet4")) || ((currentSelectDepth==="depthx2") && (currentSelectedSize==="feet5"))|| ((currentSelectDepth==="depthx2") && (currentSelectedSize==="feet6"))) {
       document.getElementById("header").style.marginTop="20px"
       storage1.style.opacity="1"
       storage1.style.cursor="pointer"
	   storage1.removeAttribute('disabled','disabled')
	   
       storage2.style.opacity="1"
       storage2.style.cursor="pointer"
	   storage2.removeAttribute('disabled','disabled')
	   
       storage3.style.opacity="1"
       storage3.style.cursor="pointer"
	   storage3.removeAttribute('disabled','disabled')
	   
       storage4.style.opacity="1"
       storage4.style.cursor="pointer"
	   storage4.removeAttribute('disabled','disabled')
	   
       storage5.style.opacity="1"
       storage5.style.cursor="pointer"
	   storage5.removeAttribute('disabled','disabled')
	   
       storage6.style.opacity="1"
       storage6.style.cursor="pointer"
	   storage6.removeAttribute('disabled','disabled')
	   
       storage7.style.opacity="1"
       storage7.style.cursor="pointer";
	   storage7.removeAttribute('disabled','disabled')
	   
       storageOttoman.style.opacity="0.3"
       storageOttoman.style.cursor="not-allowed"
       storageOttoman.setAttribute('disabled','disabled')
	   
	  
	   
	   
       if(currentSelectedstorage === 'storageOttoman') {
        boxNameB.innerText = boxName.storagex0
		 storage0.style.border="1px solid #F0386C"
	   storageOttoman.style.border="none"
       }
       if(currentSelectedstorage === 'storageOttoman') {
        currentSelectedstorage="";
       }
    }
    if (((currentSelectDepth==="depthx3") && (currentSelectedSize==="feet4")) || ((currentSelectDepth==="depthx3") && (currentSelectedSize==="feet5"))|| ((currentSelectDepth==="depthx3") && (currentSelectedSize==="feet6"))) {
       document.getElementById("header").style.marginTop="0px"
       storage1.style.opacity="1"
       storage1.style.cursor="pointer"
	   storage1.removeAttribute('disabled','disabled')
	   
       storage2.style.opacity="1"
       storage2.style.cursor="pointer"
	   storage2.removeAttribute('disabled','disabled')
	   
       storage3.style.opacity="1"
       storage3.style.cursor="pointer"
	   storage3.removeAttribute('disabled','disabled')
	   
       storage4.style.opacity="1"
       storage4.style.cursor="pointer"
	   storage4.removeAttribute('disabled','disabled')
	   
       storage5.style.opacity="1"
       storage5.style.cursor="pointer"
	   storage5.removeAttribute('disabled','disabled')
	   
       storage6.style.opacity="1"
       storage6.style.cursor="pointer"
	   storage6.removeAttribute('disabled','disabled')
	   
       storage7.style.opacity="1"
       storage7.style.cursor="pointer"
	   storage7.removeAttribute('disabled','disabled')
	   
       storageOttoman.style.opacity="1"
       storageOttoman.style.cursor="pointer"
       storageOttoman.removeAttribute('disabled','disabled')
	   if(currentSelectedstorage === 'storageOttoman') {
        boxNameB.innerText = boxName.storagex0
       }
       if(currentSelectedstorage === 'storageOttoman') {
        currentSelectedstorage="";
       }
    }
    if (currentSelectDepth==="depthx2" && currentSelectedSize==="feet2" ){
	   document.getElementById("header").style.marginTop="20px"
       storage1.style.opacity="0.3"
       storage1.style.cursor="not-allowed"
	   storage1.setAttribute('disabled','disabled')
       storage2.style.opacity="0.3"
       storage2.style.cursor="not-allowed"
	   storage2.setAttribute('disabled','disabled')
       storage3.style.opacity="0.3"
       storage3.style.cursor="not-allowed"
	   storage3.setAttribute('disabled','disabled')
       storage4.style.opacity="0.3"
       storage4.style.cursor="not-allowed"
	   storage4.setAttribute('disabled','disabled')
       storage5.style.opacity="0.3"
       storage5.style.cursor="not-allowed"
	   storage5.setAttribute('disabled','disabled')
       storage6.style.opacity="0.3"
       storage6.style.cursor="not-allowed"
	   storage6.setAttribute('disabled','disabled')
       storage7.style.opacity="0.3"
       storage7.style.cursor="not-allowed";
	    storage7.setAttribute('disabled','disabled')
       storageOttoman.style.opacity="0.3"
       storageOttoman.style.cursor="not-allowed"
       storageOttoman.setAttribute('disabled','disabled')
	        storageOttoman.style.border="none"
			storage0.style.border="1px solid #F0386C"
			storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
       if(currentSelectedstorage === 'storageOttoman') {
        boxNameB.innerText = 'No Drawer'
       }
       if(currentSelectedstorage === 'storageOttoman') {
        currentSelectedstorage="";
       }   
    }
    if (currentSelectDepth==="depthx3" && currentSelectedSize==="feet2"){
	    document.getElementById("header").style.marginTop="0px"
		storage1.setAttribute('disabled','disabled')
		storage1.style.opacity="0.3"
        storage1.style.cursor="not-allowed"
       
		storage2.setAttribute('disabled','disabled')
		storage2.style.opacity="0.3"
        storage2.style.cursor="not-allowed"
		
		storage3.setAttribute('disabled','disabled')
		storage3.style.opacity="0.3"
        storage3.style.cursor="not-allowed"
		
		storage4.setAttribute('disabled','disabled')
		storage4.style.opacity="0.3"
        storage4.style.cursor="not-allowed"
		
		storage5.setAttribute('disabled','disabled')
		storage5.style.opacity="0.3"
        storage5.style.cursor="not-allowed"
		
		storage6.setAttribute('disabled','disabled')
		storage6.style.opacity="0.3"
        storage6.style.cursor="not-allowed"
		
		storage7.setAttribute('disabled','disabled')
		storage7.style.opacity="0.3"
        storage7.style.cursor="not-allowed"
		storageOttoman.style.opacity="1"
        storageOttoman.style.cursor="pointer"
        storageOttoman.removeAttribute('disabled','disabled')
		  
		if(currentSelectedstorage === 'storageOttoman') {
        boxNameB.innerText = boxName.storagex0
       }
       if(currentSelectedstorage === 'storageOttoman') {
        currentSelectedstorage="";
       }
	}
   console.log(currentSelectedstorage)
    if (currentSelectedstorage === 'storagex1') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage];
       storage.src = getImage 
    }
	else if(currentSelectedstorage === 'storagex2') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       storage.src = getImage[0];
       twoStorage.src = getImage[1]
    } 
    else if(currentSelectedstorage === 'storagex3') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       rightBox.src = getImage[0];
       leftBox.src = getImage[1]
    } 
    else if(currentSelectedstorage === 'storagex4') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       rightBox.src = getImage[0];
       twoStorage.src=getImage[1]
       leftBox.src = getImage[2]
    } 
    else if(currentSelectedstorage === 'storagex5') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       storage.src = getImage[0];
       twoStorage.src=getImage[1]
   } 
   else if(currentSelectedstorage === 'storagex6') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       leftBox.src = getImage[0];
       twoStorage.src=getImage[1]
    } 
    else if(currentSelectedstorage === 'storagex7') {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       rightBox.src = getImage[0]
       leftBox.src = getImage[1];
       twoStorage.src = getImage[2]
    }   
    else if(currentSelectedstorage) {
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage];
       storage.src = getImage;
    }
    depthNameB.innerText = depthName[att]
   if(e.target.dataset.depth) {
       depthNameB.innerText = depthName[e.target.dataset.depth]
   }
   if (currentSelectDepth==="depthx1") {
	   depth1.style.border="1px solid #F0386C"
   }
   else{
	   depth1.style.border="none"
   }
   if (currentSelectDepth==="depthx2") {
	   depth2.style.border="1px solid #F0386C"
   }
   else{
	   depth2.style.border="none"
   }
   if (currentSelectDepth==="depthx3") {
	   depth3.style.border="1px solid #F0386C"
   }
   else{
	   depth3.style.border="none"
   }
   
   
}
/* click depth from this id*/
depth1.addEventListener('click', getCLickeddepth)
depth2.addEventListener('click', getCLickeddepth)
depth3.addEventListener('click', getCLickeddepth)



/* START storage id*/
const twoStorage = document.getElementById('storage1')
const rightBox = document.getElementById('right-box')
const leftBox = document.getElementById('left-box')
const storage0 = document.getElementById('storage-0')
const storage1 = document.getElementById('storage-1')
const storage2 = document.getElementById('storage-2')
const storage3 = document.getElementById('storage-3')
const storage4 = document.getElementById('storage-4')
const storage5 = document.getElementById('storage-5')
const storage6 = document.getElementById('storage-6')
const storage7 = document.getElementById('storage-7')
const storageOttoman = document.getElementById('storage-ottoman')
        storage1.setAttribute('disabled','disabled')
		storage1.style.opacity="0.3"
        storage1.style.cursor="not-allowed"
       
		storage2.setAttribute('disabled','disabled')
		storage2.style.opacity="0.3"
        storage2.style.cursor="not-allowed"
		
		storage3.setAttribute('disabled','disabled')
		storage3.style.opacity="0.3"
        storage3.style.cursor="not-allowed"
		
		storage4.setAttribute('disabled','disabled')
		storage4.style.opacity="0.3"
        storage4.style.cursor="not-allowed"
		
		storage5.setAttribute('disabled','disabled')
		storage5.style.opacity="0.3"
        storage5.style.cursor="not-allowed"
		
		storage6.setAttribute('disabled','disabled')
		storage6.style.opacity="0.3"
        storage6.style.cursor="not-allowed"
		
		storage7.setAttribute('disabled','disabled')
		storage7.style.opacity="0.3"
        storage7.style.cursor="not-allowed"
		storageOttoman.style.opacity="1"
        storageOttoman.style.cursor="pointer"
        storageOttoman.removeAttribute('disabled','disabled')

/* click storage*/
const getCLickedstorage = (e) => {
   const att =e.target.dataset.storage;

    if(storage0){
    const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
    body.src = bodyImage
       storage.src = ''
       twoStorage.src = ''
       rightBox.src = ''
       leftBox.src = ''
       storage.style.display = 'none'
       twoStorage.style.display = 'none'
       rightBox.style.display = 'none'
       leftBox.style.display = 'none'
       if(e.target.dataset.storage) {
        boxNameB.innerText = boxName[e.target.dataset.storage]
        }        
    }
    if (currentSelectedSize === 'feet2')  {
       storage.src = ''
       rightBox.src = ''
       storage.style.display = 'none'
       rightBox.style.display = 'none'
        if(att === 'storageOttoman' && currentSelectDepth === 'depthx3') {
        if(e.target.dataset.storage) {
            boxNameB.innerText = boxName[e.target.dataset.storage]
        }           
        currentSelectedstorage = att
            const getImage = alldepth[currentSelectedColor][currentSelectedSize][att];
            body.src = getImage
			storageOttoman.style.border="1px solid #F0386C"
			storage0.style.border="none"
			storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
        }
        if(currentSelectedSize === 'feet2' && att !== 'storageOttoman') {
           currentSelectedstorage =  'storagex0'
		    storageOttoman.style.border="none"
			storage0.style.border="1px solid #F0386C"
			 storageOttoman.style.border="none"
			
			storage1.style.border="none"
			storage2.style.border="none"
			storage3.style.border="none"
			storage4.style.border="none"
			storage5.style.border="none"
			storage6.style.border="none"
			storage7.style.border="none"
        }
    }
    currentSelectedstorage = att
    displayPrice(att,currentSelectedstorage)

    if (att === 'storagex1') {
        const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
        body.src = bodyImage
        twoStorage.style.display = 'none'
        twoStorage.style.display = 'none'
        rightBox.style.display = 'none'
        leftBox.style.display = 'none'
        storage.style.display = 'block'
        const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att];
        storage.src = getImage;  
    } 
	else if(att === 'storagex2') {
       const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = bodyImage
       storage.style.display = 'block'
       twoStorage.style.display = 'block'
       rightBox.style.display = 'none'
       leftBox.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att] 
       storage.src = getImage[0];
       twoStorage.src = getImage[1] 
    }
    else if(att === 'storagex3') {
       const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = bodyImage
       storage.style.display = 'none'
       twoStorage.style.display = 'none'
       rightBox.style.display = 'block'
       leftBox.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att]
       rightBox.src = getImage[0]
       leftBox.src = getImage[1]
       storage.src = "";
       twoStorage.src = "";  
    }
    else if(att === 'storagex4') {
       const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = bodyImage
       storage.style.display = 'none'
       twoStorage.style.display = 'block'
       rightBox.style.display = 'block'
       leftBox.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att]
       rightBox.src = getImage[0]
       twoStorage.src = getImage[1]
       leftBox.src = getImage[2]
       storage.src = "";   
    }
    else if(att === 'storagex5') {
       const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = bodyImage
       storage.style.display = 'block'
       twoStorage.style.display = 'block'
       rightBox.style.display = 'none'
       leftBox.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att]
       storage.src = getImage[0];
       twoStorage.src = getImage[1]  
    }
    else if(att === 'storagex6') {
       const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = bodyImage
       leftBox.style.display = 'block'
       twoStorage.style.display = 'block'
       rightBox.style.display = 'none'
       storage.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att]
       leftBox.src = getImage[0];
       twoStorage.src = getImage[1]
       
    }
    else if(att === 'storagex7') {
       const bodyImage = alldepth[currentSelectedColor][currentSelectedSize][currentSelectDepth];
       body.src = bodyImage
       leftBox.style.display = 'block'
       twoStorage.style.display = 'block'
       rightBox.style.display = 'block'
       storage.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][att]
       rightBox.src = getImage[0]
       leftBox.src = getImage[1];
       twoStorage.src = getImage[2]
       
    }
	else if(att === 'storageOttoman' && currentSelectDepth === 'depthx3') {
       leftBox.style.display = 'none'
       storage.style.display = 'none'
       twoStorage.style.display = 'none'
       rightBox.style.display = 'none'
       storage1m.style.display = 'none'
       twoStorage1.style.display = 'none'
       leftBox1.style.display = 'none'
       rightBox1.style.display = 'none'
       const getImage = alldepth[currentSelectedColor][currentSelectedSize][att];
       body.src = getImage
    }
    boxNameB.innerText = boxName[att]
    if(e.target.dataset.storage) {
       boxNameB.innerText = boxName[e.target.dataset.storage]
    }
	if (currentSelectedstorage==="storageOttoman") {
	   storageOttoman.style.border="1px solid #F0386C"
   }
   else{
	   storageOttoman.style.border="none"
   }
	if (currentSelectedstorage==="storagex0") {
	   storage0.style.border="1px solid #F0386C"
   }
   else{
	   storage0.style.border="none"
   }
	if (currentSelectedstorage==="storagex1") {
	   storage1.style.border="1px solid #F0386C"
   }
   else{
	   storage1.style.border="none"
   }
	if (currentSelectedstorage==="storagex2") {
	   storage2.style.border="1px solid #F0386C"
   }
   else{
	   storage2.style.border="none"
   }
	if (currentSelectedstorage==="storagex3") {
	   storage3.style.border="1px solid #F0386C"
   }
   else{
	   storage3.style.border="none"
   }
	if (currentSelectedstorage==="storagex4") {
	   storage4.style.border="1px solid #F0386C"
   }
   else{
	   storage4.style.border="none"
   }
	if (currentSelectedstorage==="storagex5") {
	   storage5.style.border="1px solid #F0386C"
   }
   else{
	   storage5.style.border="none"
   }
	if (currentSelectedstorage==="storagex6") {
	   storage6.style.border="1px solid #F0386C"
   }
   else{
	   storage6.style.border="none"
   }
	if (currentSelectedstorage==="storagex7") {
	   storage7.style.border="1px solid #F0386C"
   }
   else{
	   storage7.style.border="none"
   }
	
	
}

/* click storage from id*/
storage0.addEventListener('click', getCLickedstorage)
storage1.addEventListener('click', getCLickedstorage)
storage2.addEventListener('click', getCLickedstorage)
storage3.addEventListener('click', getCLickedstorage)
storage4.addEventListener('click', getCLickedstorage)
storage5.addEventListener('click', getCLickedstorage)
storage6.addEventListener('click', getCLickedstorage)
storage7.addEventListener('click', getCLickedstorage)
storageOttoman.addEventListener('click', getCLickedstorage)






/* All data popup*/
     /* modal data id*/
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

    /* storage data id*/
const storage1m = document.getElementById('storage-modal');
const twoStorage1 = document.getElementById('storage1-modal')
const rightBox1 = document.getElementById('right-box1')
const leftBox1 = document.getElementById('left-box1')

    /* image data id*/
const florm = document.getElementById('flor-modal');
const hukm = document.getElementById('huk-modal');
const headerm = document.getElementById('header-modal');
const bodym = document.getElementById('body-modal');
const pricem = document.getElementById('price-label');

    /* price and name data id*/
const coloRef = document.getElementById('color');
const depthFinal = document.getElementById('depthFinal');
const storageFinal = document.getElementById('storageFinal');
const sizeFinal = document.getElementById('sizeFinal'); 
const headerboard = document.getElementById('headerboard');


/* click modal*/
btn.onclick = function() {
   
    /* price include*/
    pricem.value =totalPrice;
	if(currentSelectedSize==="feet2"){
		pricem.value=300;
	}
	if(currentSelectedSize==="feet2" && currentSelectedstorage==="storageOttoman"){
		pricem.value=500;
	}
	
	
	/* color include*/
   
	if(currentSelectedColor.includes('gray')) {
	   coloRef.value="Slate Grey Cotton";
    }
	else if(currentSelectedColor.includes('black')) {
	   coloRef.value="Black Cotton";
    }
	else if(currentSelectedColor.includes('blue')) {
	   coloRef.value="Midnight Blue Cotton";
    }
	else if(currentSelectedColor.includes('red')) {
	   coloRef.value="Red Cotton";
    }
	else if(currentSelectedColor.includes('white')) {
	   coloRef.value="White Cotton";
    }
	else if(currentSelectedColor.includes('lime')) {
	   coloRef.value="Lime Cotton";
    }
	else if(currentSelectedColor.includes('duck')) {
	   coloRef.value="Duck Egg Blue Cotton";
    }
	else if(currentSelectedColor.includes('orchid')) {
	   coloRef.value="Orchid Cotton";
    }
	else if(currentSelectedColor.includes('graphite')) {
	   coloRef.value="Graphite Velvet";
    }
	else if(currentSelectedColor.includes('marine')) {
	   coloRef.value="Blue Marine Velvet";
    }
	else if(currentSelectedColor.includes('emerald')) {
	   coloRef.value="Emerald Velvet";
    }
	else if(currentSelectedColor.includes('deggb')) {
	   coloRef.value="Duck Egg Blue Velvet";
    }
	else if(currentSelectedColor.includes('silver')) {
	   coloRef.value="Light Silver Velvet";
    }
	else if(currentSelectedColor.includes('silgry')) {
	   coloRef.value="Silver Grey Cotton";
    }
	else if(currentSelectedColor.includes('cream')) {
	   coloRef.value="Cream Cotton";
    }
	else if(currentSelectedColor.includes('chocolate')) {
	   coloRef.value="Chocolate Cotton";
    }
	else if(currentSelectedColor.includes('pink')) {
	   coloRef.value="Pink Velvet";
    }
	else if(currentSelectedColor.includes('asphalt')) {
	   coloRef.value="Asphalt Velvet";
    }
	else if(currentSelectedColor.includes('beige')) {
	   coloRef.value="Beige Velvet";
    }
	else if(currentSelectedColor.includes('mustard')) {
	   coloRef.value="Mustard Velvet";
    }
	else if(currentSelectedColor.includes('bpvelvet')) {
	   coloRef.value="Black Velvet";
    }
	else if(currentSelectedColor.includes('plum')) {
	   coloRef.value="Plum Cotton";
    }
	else if(currentSelectedColor.includes('charcoal')) {
	   coloRef.value="Charcoal Cotton";
    }
	
	
	
	/*size include*/
    if(currentSelectedSize.includes('feet2')) {
       sizeFinal.value = 'Small Single 2ft 6'
    } 
	else if(currentSelectedSize.includes('feet4')) {
       sizeFinal.value = 'Small Double 4ft'
    }
	else if(currentSelectedSize.includes('feet5')) {
       sizeFinal.value = 'King Size 5ft'
    } 
    else if(currentSelectedSize.includes('feet6')) {
       sizeFinal.value = 'Super Kingsize 6ft'
    }
    if(currentSelectedSizeName.includes('feet26')) {
       sizeFinal.value = 'Single 3ft'
    }
	else if(currentSelectedSizeName.includes('feet46')) {
       sizeFinal.value = 'Double4ft 6'
    }
   
    /*depth include*/
    if(currentSelectDepth.includes('depthx1')){
    depthFinal.value = '6'
    storageFinal.innerText = 'No'
    modal.style.display = "block";
    }
    if(currentSelectDepth.includes('depthx2')){
      depthFinal.value = '10'
    }
    if(currentSelectDepth.includes('depthx3')){
      depthFinal.value = '14'
   }
   console.log(currentSelectedstorage)
    /*storage include*/
    if(currentSelectedstorage.includes('storagex0')) {
      storageFinal.value = 'No'
    }
    else if(currentSelectedstorage.includes('storagex1')) {
       storageFinal.value = 'End Drawer'
    }
	else if(currentSelectedstorage.includes('storagex2')) {
       storageFinal.value = 'End Drawer with 2 Mini Drawers'
    } 
	else if(currentSelectedstorage.includes('storagex3')) {
       storageFinal.value = '2 Drawers'
    }
	else if(currentSelectedstorage.includes('storagex4')) {
       storageFinal.value = '2 Drawers with 2 Mini Drawers '

    }
	else if(currentSelectedstorage.includes('storagex5')) {
       storageFinal.value = ' 2 Drawers with End Drawer '

    }
	else if(currentSelectedstorage.includes('storagex6')) {
       storageFinal.value = '2 Drawers Same Side'

    }
	else if(currentSelectedstorage.includes('storagex7')) {
       storageFinal.value = '4 Drawers'

    }
	else if(currentSelectedstorage.includes('storageOttoman')) {
       storageFinal.value = 'Ottoman'

    }
    else {
       storageFinal.value = 'No'
    }

    /*sape include*/
    if(currentSelectsape.includes('sapex1')) {
       headerboard.value = 'Ankara Plain'
    }
	if(currentSelectsape.includes('sapex1a')) {
       headerboard.value = 'Ankara Lined'

    }
	if(currentSelectsape.includes('sapex1b')) {
       headerboard.value = 'Ankara Buttoned'

    }
	if(currentSelectsape.includes('sapex2')) {
       headerboard.value = 'Swanhill Buttoned'

    }
	if(currentSelectsape.includes('sapex2a')) {
       headerboard.value = 'Swanhill Plain'

    }
	if(currentSelectsape.includes('sapex2b')) {
       headerboard.value = 'Swanhill Lined'

    }
	if(currentSelectsape.includes('sapex3')) {
       headerboard.value = 'Cornell Buttoned'

    }
	if(currentSelectsape.includes('sapex3a')) {
       headerboard.value = 'Cornell Plain'

    }
	if(currentSelectsape.includes('sapex3b')) {
       headerboard.value = 'Cornell Lined'

    } 
	if(currentSelectsape.includes('sapex4')) {
       headerboard.value = 'Dudley Plain'

    }
	if(currentSelectsape.includes('sapex4a')) {
       headerboard.value = 'Dudley Lined'

    }
	if(currentSelectsape.includes('sapex4b')) {
       headerboard.value = 'Dudley Buttoned'

    }
	if(currentSelectsape.includes('sapex5')) {
       headerboard.value = 'Everest Plain'

    }
	if(currentSelectsape.includes('sapex5a')) {
       headerboard.value = 'Everest Lined'

    }
	if(currentSelectsape.includes('sapex5b')) {
       headerboard.value = 'Everest Buttoned'

    }
	if(currentSelectsape.includes('sapex6')) {
       headerboard.value = 'Florence Plain'

    }
	if(currentSelectsape.includes('sapex6a')) {
       headerboard.value = 'Flowrence Lined'

    } 
	if(currentSelectsape.includes('sapex6b')) {
       headerboard.value = 'Flowrence Buttoned'

    }
	if(currentSelectsape.includes('sapex7')) {
       headerboard.value = 'Vector Plain'

    }
	if(currentSelectsape.includes('sapex7a')) {
       headerboard.value = 'vector Lined'

    }
	if(currentSelectsape.includes('sapex7b')) {
       headerboard.value = 'Vector Buttoned'

    }
     /*Main image  include*/
    document.getElementById("huk-modal").src=document.getElementById("huk").src
    document.getElementById("flor-modal").src=document.getElementById("flor").src
    document.getElementById("body-modal").src=document.getElementById("body").src
    document.getElementById("header-modal").src=document.getElementById("header").src
    if(currentSelectsape === 'no') {
		
       document.getElementById("header-modal").src  = ''
	    document.getElementById("header-modal").style.display="none"
       headerboard.value = 'No'
	   
    }
    if (currentSelectDepth==="depthx1") {
       storage1m.src ="";
       twoStorage1.src = "";
       rightBox1.src = "";
       leftBox1.src = "";
       document.getElementById("header-modal").style.marginTop="10px"
       storageFinal.innerText = 'No'
       modal.style.display = "block";
    }
    if (currentSelectDepth==="depthx2") {
       document.getElementById("header-modal").style.marginTop="5px"
    }
    if (currentSelectDepth==="depthx3") {
       document.getElementById("header-modal").style.marginTop="0px"
    }     
    if (currentSelectedstorage === 'storagex0') {
		  twoStorage1.style.display = 'none'
       twoStorage1.style.display = 'none'
       rightBox1.style.display = 'none'
       leftBox1.style.display = 'none'
       storage1m.style.display = 'none'
		 
	 }
    else if (currentSelectedstorage === 'storagex1') {
       twoStorage1.style.display = 'none'
       twoStorage1.style.display = 'none'
       rightBox1.style.display = 'none'
       leftBox1.style.display = 'none'
       storage1m.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage];
       storage1m.src = getImage;   
    } else if(currentSelectedstorage === 'storagex2') {
       storage1m.style.display = 'block'
       twoStorage1.style.display = 'block'
       rightBox1.style.display = 'none'
       leftBox1.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage] 
       storage1m.src = getImage[0];
       twoStorage1.src = getImage[1]   
    }
    else if(currentSelectedstorage === 'storagex3') {
       storage1m.style.display = 'none'
       twoStorage1.style.display = 'none'
       rightBox1.style.display = 'block'
       leftBox1.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage]
       rightBox1.src = getImage[0]
       leftBox1.src = getImage[1]
       storage1m.src = "";
       twoStorage1.src = "";  
    }
    else if(currentSelectedstorage === 'storagex4') {
       storage.style.display = 'none'
       twoStorage1.style.display = 'block'
       rightBox1.style.display = 'block'
       leftBox1.style.display = 'block'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage]
       rightBox1.src = getImage[0]
       twoStorage1.src = getImage[1]
       leftBox1.src = getImage[2]
       storage1m.src = "";  
    }
    else if(currentSelectedstorage === 'storagex5') {
       storage1m.style.display = 'block'
       twoStorage1.style.display = 'block'
       rightBox1.style.display = 'none'
       leftBox1.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage]
       storage1m.src = getImage[0];
       twoStorage1.src = getImage[1]   
    }
    else if(currentSelectedstorage === 'storagex6') {
       leftBox1.style.display = 'block'
       twoStorage1.style.display = 'block'
       rightBox1.style.display = 'none'
       storage1m.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage]
       leftBox1.src = getImage[0];
       twoStorage1.src = getImage[1]  
    }
    else if(currentSelectedstorage === 'storagex7') {
       leftBox1.style.display = 'block'
       twoStorage1.style.display = 'block'
       rightBox1.style.display = 'block'
       storage1m.style.display = 'none'
       const getImage = allstorage[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedstorage]
       rightBox1.src = getImage[0]
       leftBox1.src = getImage[1];
       twoStorage1.src = getImage[2]  
    } 
	 /*modal colse open*/
    var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
        modal.style.display = "none";
        }
    modal.style.display = "block";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
}




function getData()
{
    //gettting the values
    var pricemodal = document.getElementById("price-label").value;
    var sizeFinala = document.getElementById("sizeFinal").value;
    var headerboarda= document.getElementById("headerboard").value; 
    var colora= document.getElementById("color").value; 
    var ee= document.getElementById("ee").innerHTML; 
    var depthFinala= document.getElementById("depthFinal").value; 
    var storageFinala= document.getElementById("storageFinal").value; 
	 
	
	
    //saving the values in local storage
    localStorage.setItem("txtValue", pricemodal);
    localStorage.setItem("txtValue0", sizeFinala);
    localStorage.setItem("txtValue1", headerboarda);
    localStorage.setItem("txtValue2", colora);
    localStorage.setItem("txtValue3", depthFinala);   
    localStorage.setItem("txtValue4", storageFinala);   
    localStorage.setItem("txtValue5", ee); 






req = $.ajax({
    type: "POST",
    url: "addcart.php",

     data: {

        ee: ee, 
        price: pricemodal,
         size: sizeFinala, 
         board: headerboarda, 
         color: colora, 
         depth: depthFinala,
          storage: storageFinala

      },

    async: false, // This will only proceed after getting the response from the ajax request.

    success: function(msg){

    }
});



	
}