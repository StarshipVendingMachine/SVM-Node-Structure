# Starship Vending-machine Corp.

### 1. 기본 설정
```
# node & npm 함께 설치됨
~ brew install node

# generator 설치 (회사 기본 Nodejs 폴더 구조 생성 & 기본 NPM 모듈 설정)
~ npm install -g svm-generator

# 현재 1.0.5 버전 (추후 업데이트 시)
~ npm -g update svm-generator

# 버전 확인
~ npm show svm-generator version
```
### 2. 사용법
```
~ svm-cli [option] [folder]

ex)
~ svm-cli ../app
~ cd ../app
~ npm install
~ npm start
```
### 3. 구조
```
/root
└─── /app
│    │─── /controllers
│    │       index.js   # module 추가하고 user.js 처럼 파일 생성. 나머지는 /config/router.js에서 알아서 처리함
│    │       user.js    # 실제 라우터 구현 (샘플)
│    └─── /models
│           index.js    # ORM 설정 (DB 연결)
│           users.js    # 테이블 스키마
│─── /bin               # worker or batch 등 단일 실행 용도로 사용되는 모듈은 여기에 넣고 사용
│─── /config
│       default.json        # NODE_ENV 에 따라 json Mapping
│       development.json
│       environment.js      # 환경 설정 파일
│       production.json
│       routes.js           # 라우터 구현
│       staging.json
└─── /lib
       enums.js        # 참조 라이브러리 구현 샘플
   .gitignore
   app.js
   package.json
   README.md
```
### 4. 사용 NPM Module
1. async : 비동기 구현 (async & await)
2. bluebird : 비동기 구현 (sequelize 내장 모듈로 사용한다고 함, chain 방식)
3. lodash : json or object or array 등 간편하게 사용하게 해주는 유틸
4. sequelize : ORM
5. response-format : 간단한 응답 포멧
```
{
    "statusCode": 200,
    "error": false,
    "message": "OK",
    "data": null
}
```



<!---
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
--->