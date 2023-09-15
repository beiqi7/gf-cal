var languagePack_logistics =
    {
        "ko": {
            "HTML": {
                "TITLE": "소녀전선 - 군수지원 효율계산 / 추천 시뮬레이터",
                "TABLE": {
                    "RSRC": "자원",
                    "AREA": "지역",
                    "HUMA": "인력",
                    "AMMO": "탄약",
                    "FOOD": "식량",
                    "PART": "부품",
                    "SUM": "합계",
                    "SUMRATIO": "자원 합계비> ",
                    "TIME": "시간",
                    "BTNSUCS": "완료시<br>획득",
                    "BTNTIME": "시간당<br>획득",
                    "SELAREA": "선택<br>지역",
                    "LOAD": " 불러오기",
                    "SAVE": " 저장",
                    "CAPT": " 캡쳐",
                    "COPY": " URL 복사",
                    "TIMETABLE": " 시간표",
                    "TICKET": "계약서",
                    "TICKET_DOLL": "인형제조계약서",
                    "TICKET_TOOL": "장비제조계약서",
                    "TICKET_FAST": "쾌속제조계약서",
                    "TICKET_REPR": "쾌속수복계약서",
                    "TICKET_TOKN": "구매 토큰",
                    "TICKET_PER_HOUR": "시간당 획득률",
                    "TICKET_PER_RECV": "완료시 획득률",
                    "PER_HOUR": "시간당",
                    "PER_RECV": "완료시",
                    "TICKET_RATIO": "획득확률",
                    "HELP": {
                        "RESET": "초기화",
                        "NOTICE": "공지사항",
                        "OPEN": "도움말 열기",
                        "CLOSE": "도움말 닫기",
                        "TIPS": {
                            "TIP1": "1. 자원량 / 계약서 획득량은 표 좌측 하단의 <span id=\"help_time\"><a href=\"#\">시간당 / 완료시 획득 전환 버튼</a></span> 으로 변경 가능",
                            "TIP2": "2. 표 상단의 <a href=\"#\">자원명</a> <font color=\"red\">클릭 시</font>, 해당 자원 우선 정렬",
                            "TIP3": "3. 표의 <a href=\"#\">합계</a> 값은 <font color=\"red\">자원 합계비</font>에 따라 계산. 기본값 1:1:1:2.2",
                            "TIP4": "4. 계약서 획득확률 참고자료(<font style=\"color:blue;\"><a href=\"https://github.com/tempkaridc/gf/blob/master/js/params.js\" target=\"_blank\">링크</a></font>)",
                            "TIP5": "5. 하단 예상 그래프는 <a href=\"#\">현재자원</a> <font color=\"red\">값부터 합산</font>, 미입력시 0부터 계산",
                            "TIP5a": "<div style=\"margin-left:10px;\">a. <a href=\"#\">자동회복</a> 활성화 시 3분당 인탄식부 3:3:3:1 회복</div>",
                            "TIP6": "6. <a href=\"#\">대성공률</a> 적용 시, 자원 및 계약서 획득률을 대성공 기대치로 재계산",
                            "TIP7": "7. <a href=\"#\">확인주기</a> 적용 시, 모든 군수의 시간을 주기의 배수로 변경",
                            "TIP8": "8. <div class=\"btn btn-danger\"></div><div class=\"btn btn-primary\"></div> 기능/선택 버튼, <div class=\"btn btn-default\"></div><div class=\"btn btn-success\"></div> 켜기/끄기 버튼",
                            "TIP9": "9. <a href=\"#\">자동추천</a> 은 입력된 <font color=\"red\">가중치 비율의 자원 획득</font>을 위한 군수 조합 추천",
                            "TIP9a": "<div style=\"margin-left:10px;\">a. <a href=\"#\">지역선택</a>, <a href=\"#\">시간대설정</a>, <a href=\"#\">대성공률</a>, <a href=\"#\">계약서 획득률</a>, <a href=\"#\">확인 주기</a>를 모두 반영</div>",
                            "TIP9b": "<div style=\"margin-left:10px;\">b. <span id=\"help_wght\"><a href=\"#\">내 가중치</a></span> 버튼 클릭 시, 개인 가중치 계산 가능</div>",
                            "TIP9c": "<div style=\"margin-left:10px;\">c. 결과의 백분율 표시는 입력된 가중치와 결과값 사이의 가중치 일치율을 의미</div>",
                            "TIP9d": "<div style=\"margin-left:10px;\">d. 계산 시 자원량이 적은 초반지역 [1~4지역] 제외 추천</div>"
                        },
                        "AREASELECT": {
                            "TITLE": "지역선택"
                        },
                        "TIMESELECT": {
                            "TITLE": "시간대",
                            "SELTIMEHOUR": "시간"
                        },
                        "SUMRATE": {
                            "TITLE": "자원 합계비",
                            "BTN": "적용"
                        },
                        "PRESOURCE": {
                            "TITLE": "현재자원",
                            "REFILL": "자동회복"
                        },
                        "SUCCESS": {
                            "TITLE": "대성공",
                            "SUMLEVEL": "제대 레벨합계",
                            "SUCSRATIO": "대성공 확률",
                            "BTN": "적용",
                            "EVENT": "군수지원 대성공 확률 UP 이벤트",
                            "EVENTBTN": "확률UP"
                        },
                        "INTERVAL": {
                            "TITLE": "확인주기",
                            "BTN": "적용"
                        },
                        "RECOMMEND": {
                            "TITLE": "자동추천",
                            "RATIO": {
                                "BTN_RATIO": "내 가중치",
                                "CHOICE": {
                                    "DAY": {
                                        "TITLE": "일일사용량 기반 계산",
                                        "TEXT": "하루에 사용하는 자원량에 의거한 개인 가중치 계산",
                                        "TABLE1": "일일사용량 기반 계산 예",
                                        "TABLE2": "인형제조 범용1식 4회",
                                        "TABLE3": "장비제조 범용1식 4회",
                                        "TABLE4": "전역 9회 클리어",
                                        "TABLE5": "합계 <small>(아래 입력)</small>",
                                        "TABLE6": "가중치",
                                        "TABLEs1": "사용량"
                                    },
                                    "USES": {
                                        "TITLE": "최종목표치 기반 계산",
                                        "TEXT": "목표로 삼은 자원량에서 역산한 개인 가중치 계산",
                                        "TABLE1": "최종목표량 기반 계산 예",
                                        "TABLE2": "현재 자원량 <small>(아래 입력)</small>",
                                        "TABLE3": "목표 자원량 <small>(아래 입력)</small>",
                                        "TABLE4": "오차",
                                        "TABLE5": "가중치",
                                        "TABLEs1": "현재",
                                        "TABLEs2": "목표"
                                    }
                                },
                                "BTN_CALC": "계산",
                                "CALC_TEXT": "'계산'클릭 시, 가중치 자동입력"
                            },
                            "SUCSRATIO": "계약서",
                            "TEXT_PERHOUR1": "시간당 ",
                            "TEXT_PERHOUR2": "개 이상",
                            "BTN_RCMD": "지역 추천",
                            "RESULT": "추천조합",
                            "SIMM": "가중치 일치율",
                            "FEEDBACK": "재보정"
                        }
                    }
                },
                "CHART": {
                    "AREA": "지역:",
                    "TIME": "기간:",
                    "BTN1": "1일",
                    "BTN2": "1주",
                    "BTN3": "2주",
                    "BTN4": "4주",
                    "DAY": "일",
                    "HOUR": "시",
                    "MIN": "분"
                },
                "MODAL": {
                    "LOAD": {
                        "TITLE": "저장된 조합 불러오기",
                        "AREA": "지역",
                        "HELP": "설명"
                    }
                },
                "BOTTOM": {
                    "ADDR": "주소: ",
                    "SGST": "건의사항: ",
                    "OPTI": "이 페이지는 Chrome, FF, Edge에 최적화되어 있습니다."
                },
                "INCODE": {
                    "ALERT1": "최종목표치는 현재보다 크거나 같아야 합니다",
                    "ALERT2": "검색 결과가 없습니다",
                    "ALERT3": "하나 이상의 군수지역을 선택해야 합니다",
                    "ALERT4": "주소가 클립보드에 복사되었습니다",
                    "ALERT5": "모든 설정을 초기화하고 페이지를 새로 고칩니다",
                    "SAVE": "저장할 조합의 이름을 입력하세요",
                    "DELETE": "지우기"
                }
            },
            "CHART": {
                lang: {
                    months: [
                        '1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'
                    ],
                    shortMonths: [
                        '1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'
                    ],
                    weekdays: [
                        '일요일','월요일','화요일','수요일','목요일','금요일','토요일'
                    ],
                    shortWeekdays: [
                        '일','월','화','수','목','금','토'
                    ]
                }
            }
        },
        "en": {
            "HTML": {
                "TITLE": "Girls' Frontline Logistic Support Calculator",
                "TABLE": {
                    "RSRC": "Resource",
                    "AREA": "Area",
                    "HUMA": "Manpw.",
                    "AMMO": "Ammo",
                    "FOOD": "Rations",
                    "PART": "Parts",
                    "SUM": "Total",
                    "SUMRATIO": "Total Sumrate> ",
                    "TIME": "Time",
                    "BTNSUCS": "Per<br>Area",
                    "BTNTIME": "Per<br>Hour",
                    "SELAREA": "Selected<br>Area",
                    "LOAD": " Load",
                    "SAVE": " Save",
                    "CAPT": " Capture",
                    "COPY": " Copy URL",
                    "TIMETABLE": " Agenda",
                    "TICKET": "Contracts",
                    "TICKET_DOLL": "T-Doll Contract",
                    "TICKET_TOOL": "Equipment Production Contract",
                    "TICKET_FAST": "Quick Production Contract",
                    "TICKET_REPR": "Quick Restoration Contract",
                    "TICKET_TOKN": "Token",
                    "TICKET_PER_HOUR": "Chance per hour",
                    "TICKET_PER_RECV": "Chance per area",
                    "PER_HOUR": "perHour",
                    "PER_RECV": "perArea",
                    "TICKET_RATIO": "Chance",
                    "HELP": {
                        "RESET": "Reset",
                        "NOTICE": "Changelog",
                        "OPEN": "Open Help",
                        "CLOSE": "Close Help",
                        "TIPS": {
                            "TIP1": "1. Toggle 'Resource & Contract gain per HOUR or AREA' with <span id=\"help_time\"><a href=\"#toggleTime\">Button left-bottom of the table</a></span>",
                            "TIP2": "2. Click <a href=\"#\">Resource Name</a>, to sort with it",
                            "TIP3": "3. <a href=\"#\">Total</a> calculated with <font color=\"red\">Total Sumrate</font> multiplier. Default 1:1:1:2.2",
                            "TIP4": "4. Contract Gain Chance Reference(<font style=\"color:blue;\"><a href=\"https://github.com/tempkaridc/gf/blob/master/js/params.js\" target=\"_blank\">Link</a></font>)",
                            "TIP5": "5. Graph starts from <a href=\"#\">Pre Resources</a><font color=\"red\"></font>, default is 0",
                            "TIP5a": "<div style=\"margin-left:10px;\">a. <a href=\"#\">Auto Resupply</a> add 3 : 3 : 3 : 1 resource per 3 min</div>",
                            "TIP6": "6. When you apply <a href=\"#\">Great Success</a>, recaluculate resource & contracts gain to expectation value",
                            "TIP7": "7. When you apply <a href=\"#\">Check Cycle</a>, recalculate every time to multiple of cycle time",
                            "TIP8": "8. <div class=\"btn btn-danger\"></div><div class=\"btn btn-primary\"></div> Function / Select Button, <div class=\"btn btn-default\"></div><div class=\"btn btn-success\"></div> On / Off Toggle Button",
                            "TIP9": "9. <a href=\"#\">Recommend</a> provides area combination with <font color=\"red\">Resource Weight</font>",
                            "TIP9a": "<div style=\"margin-left:10px;\">a. Reflect <a href=\"#\">Chapters</a>, <a href=\"#\">Time Periods</a>, <a href=\"#\">Great Success</a>, <a href=\"#\">Contract Chance</a>, <a href=\"#\">Check Cycle</a></div>",
                            "TIP9b": "<div style=\"margin-left:10px;\">b. Calculate personal resource weights with <span id=\"help_wght\"><a href=\"#\">Calc weights</a></span> </div>",
                            "TIP9c": "<div style=\"margin-left:10px;\">c. Result % means similarity between input ratio & result</div>",
                            "TIP9d": "<div style=\"margin-left:10px;\">d. It is recommended to exclude early stages [Area 1~4]</div>"
                        },
                        "AREASELECT": {
                            "TITLE": "Chapters"
                        },
                        "TIMESELECT": {
                            "TITLE": "Time Periods",
                            "SELTIMEHOUR": "hour"
                        },
                        "SUMRATE": {
                            "TITLE": "Total Sumrate",
                            "BTN": "Apply"
                        },
                        "PRESOURCE": {
                            "TITLE": "Pre Resources",
                            "REFILL": "Auto Resupply"
                        },
                        "SUCCESS": {
                            "TITLE": "Great Success",
                            "SUMLEVEL": "Levelsum",
                            "SUCSRATIO": "GS Chance",
                            "BTN": "Apply",
                            "EVENT": "Great Success rate-up event",
                            "EVENTBTN": "Rate-UP"
                        },
                        "INTERVAL": {
                            "TITLE": "Check Cycle",
                            "BTN": "Apply"
                        },
                        "RECOMMEND": {
                            "TITLE": "Recommend",
                            "RATIO": {
                                "BTN_RATIO": "Calc weights",
                                "CHOICE": {
                                    "DAY": {
                                        "TITLE": "Daily Weight",
                                        "TEXT": "Calculate with daily uses",
                                        "TABLE1": "Example",
                                        "TABLE2": "T-DOLL Standard Set x 4",
                                        "TABLE3": "Equipment Standard Set x 4",
                                        "TABLE4": "Clear 9 Areas",
                                        "TABLE5": "Sum <small>(input below)</small>",
                                        "TABLE6": "Weight",
                                        "TABLEs1": "Usage"
                                    },
                                    "USES": {
                                        "TITLE": "Target Weight",
                                        "TEXT": "Calculate with target amount",
                                        "TABLE1": "Example",
                                        "TABLE2": "Present Resource <small>(input below)</small>",
                                        "TABLE3": "Goal Resource <small>(input below)</small>",
                                        "TABLE4": "Difference",
                                        "TABLE5": "Weight",
                                        "TABLEs1": "Now",
                                        "TABLEs2": "Goal"
                                    }
                                },
                                "BTN_CALC": "Calculate",
                                "CALC_TEXT": "Click 'Calculate' to get your own weight"
                            },
                            "SUCSRATIO": "Contracts",
                            "TEXT_PERHOUR1": "Over ",
                            "TEXT_PERHOUR2": "/h",
                            "BTN_RCMD": "Recommend Combination",
                            "RESULT": "Results",
                            "SIMM": "Weight Similarity",
                            "FEEDBACK": "Adjust"
                        }
                    }
                },
                "CHART": {
                    "AREA": "Area:",
                    "TIME": "Period:",
                    "BTN1": "1D",
                    "BTN2": "1W",
                    "BTN3": "2W",
                    "BTN4": "4W",
                    "DAY": "",
                    "HOUR": "",
                    "MIN": ""
                },
                "MODAL": {
                    "LOAD": {
                        "TITLE": "Load saved areas",
                        "AREA": "Areas",
                        "HELP": "Description"
                    }
                },
                "BOTTOM": {
                    "ADDR": "Address: ",
                    "SGST": "Suggestions: ",
                    "OPTI": "This website is optimized for Chrome, FF, Edge"
                },
                "INCODE": {
                    "ALERT1": "Goal must bigger than present",
                    "ALERT2": "No result",
                    "ALERT3": "You muse select at least one area",
                    "ALERT4": "URL copied to clipboard",
                    "ALERT5": "Return settings to default and refresh current page",
                    "SAVE": "Name your save",
                    "DELETE": "Delete"
                }
            },
            "CHART": {
                lang: {
                    months: [
                        'January','February','March','April','May','June','July','August','September','October','November','December'
                    ],
                    shortMonths: [
                        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
                    ],
                    weekdays: [
                        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
                    ],
                    shortWeekdays: [
                        'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
                    ]
                }
            }
        },
        "cn": {
            "HTML": {
                "TITLE": "少女前线后勤计算器",
                "TABLE": {
                    "RSRC": "资源",
                    "AREA": "战役",
                    "HUMA": "人力",
                    "AMMO": "弹药",
                    "FOOD": "口粮",
                    "PART": "零件",
                    "SUM": "总计",
                    "SUMRATIO": "总计比例> ",
                    "TIME": "耗时",
                    "BTNSUCS": "完成时<br>获取",
                    "BTNTIME": "每小时<br>获取",
                    "SELAREA": "选择<br>战役",
                    "LOAD": " 加载",
                    "SAVE": " 保存",
                    "CAPT": " 截图",
                    "COPY": " 分享链接",
                    "TIMETABLE": " 设置当日日程",
                    "TICKET": "道具",
                    "TICKET_DOLL": "白票（人形）",
                    "TICKET_TOOL": "蓝票（装备）",
                    "TICKET_FAST": "快速建造",
                    "TICKET_REPR": "快速修复",
                    "TICKET_TOKN": "采购币",
                    "TICKET_PER_HOUR": "每小时可获得",
                    "TICKET_PER_RECV": "完成时可获得",
                    "PER_HOUR": "每小时",
                    "PER_RECV": "完成时",
                    "TICKET_RATIO": "获得比例",
                    "HELP": {
                        "RESET": "重置",
                        "NOTICE": "日志",
                        "OPEN": "帮助",
                        "CLOSE": "关闭",
                        "TIPS": {
                            "TIP1": "1. 每小时 / 每次后勤 资源获取量可以通过左下角的蓝色按钮 <span id=\"help_time\"><a href=\"#toggleTime\">每小时 / 完成时可获得</a></span> 进行转换",
                            "TIP2": "2. 点击资源类型图片可以从大到小排序",
                            "TIP3": "3. 列表中 <a href=\"#\">总计</a> 是以 <font color=\"red\">资源计算比例</font>中提供的比例计算的. 默认值为 1:1:1:2.2",
                            "TIP4": "4. 道具获取比例数据(<font style=\"color:blue;\"><a href=\"https://github.com/beiqi7/gf-cal/blob/master/js/params.js\" target=\"_blank\">链接</a></font>)",
                            "TIP5": "5. 折线图中的数据起始值为 <a href=\"#\">当前拥有资源</a> <font color=\"red\">所填入的数据</font>, 默认为0",
                            "TIP5a": "<div style=\"margin-left:10px;\">a. <a href=\"#\">自动恢复</a> 默认按照3分钟四项3:3:3:1为比例恢复</div>",
                            "TIP6": "6. <a href=\"#\">大成功</a> 应用时将重新计算预期获取资源",
                            "TIP7": "7. <a href=\"#\">应用循环时间</a> 时会自动匹配后勤时间与你选择的时间",
                            "TIP8": "8. <div class=\"btn btn-danger\"></div><div class=\"btn btn-primary\"></div> 为应用/选择按钮, <div class=\"btn btn-default\"></div><div class=\"btn btn-success\"></div> 为切换按钮",
                            "TIP9": "9. <a href=\"#\">自动选择</a> 可按照 <font color=\"red\">您选择的资源比例</font>自动配置后勤",
                            "TIP9a": "<div style=\"margin-left:10px;\">a. <a href=\"#\">解锁战役</a>, <a href=\"#\">后勤时长选择</a>, <a href=\"#\">大成功率</a>, <a href=\"#\">道具获取率</a>, <a href=\"#\">循环确认时间</a> 都对最终结果造成影响</div>",
                            "TIP9b": "<div style=\"margin-left:10px;\">b. <span id=\"help_wght\"><a href=\"#\">目标值计算</a></span> 可以设定你所需的资源目标值</div>",
                            "TIP9c": "<div style=\"margin-left:10px;\">c. 推荐略去初级阶段（1-4章节）。</div>"
                        },
                        "AREASELECT": {
                            "TITLE": "已解锁战役"
                        },
                        "TIMESELECT": {
                            "TITLE": "后勤时长选择",
                            "SELTIMEHOUR": "时间"
                        },
                        "SUMRATE": {
                            "TITLE": "资源比例",
                            "BTN": "应用"
                        },
                        "PRESOURCE": {
                            "TITLE": "当前拥有资源",
                            "REFILL": "自动恢复"
                        },
                        "SUCCESS": {
                            "TITLE": "大成功率",
                            "SUMLEVEL": "梯队等级总和",
                            "SUCSRATIO": "大成功率",
                            "BTN": "应用",
                            "EVENT": "支援成功率UP",
                            "EVENTBTN": "大成功率UP"
                        },
                        "INTERVAL": {
                            "TITLE": "循环确认时间",
                            "BTN": "应用"
                        },
                        "RECOMMEND": {
                            "TITLE": "自动选择",
                            "RATIO": {
                                "BTN_RATIO": "目标值计算",
                                "CHOICE": {
                                    "DAY": {
                                        "TITLE": "每日日常任务目标值计算示例",
                                        "TEXT": "以您设置的目标四项资源权重计算一日使用的目标值",
                                        "TABLE1": "每日日常任务计算示例",
                                        "TABLE2": "4次人形制造",
                                        "TABLE3": "4次装备制造",
                                        "TABLE4": "9次各类作战任务",
                                        "TABLE5": "合计 <small>(下框中输入)</small>",
                                        "TABLE6": "权重",
                                        "TABLEs1": "使用量"
                                    },
                                    "USES": {
                                        "TITLE": "长期计划目标值计算示例",
                                        "TEXT": "以您设置的目标四项资源权重计算长期计划的目标值",
                                        "TABLE1": "最终目标值示例",
                                        "TABLE2": "当前资源量 <small>(下框中输入)</small>",
                                        "TABLE3": "目标资源量 <small>(下框中输入)</small>",
                                        "TABLE4": "误差",
                                        "TABLE5": "权重",
                                        "TABLEs1": "当前值",
                                        "TABLEs2": "目标值"
                                    }
                                },
                                "BTN_CALC": "计算",
                                "CALC_TEXT": "'点击计算以获取数据"
                            },
                            "SUCSRATIO": "获取道具比例",
                            "TEXT_PERHOUR1": "多于",
                            "TEXT_PERHOUR2": "/h",
                            "BTN_RCMD": "战役选择",
                            "RESULT": "计算结果",
                            "SIMM": "权重相似比例",
                            "FEEDBACK": "漕艇"
                        }
                    }
                },
                "CHART": {
                    "AREA": "战役:",
                    "TIME": "时间:",
                    "BTN1": "一天",
                    "BTN2": "1周",
                    "BTN3": "2周",
                    "BTN4": "4周",
                    "DAY": "日",
                    "HOUR": "时",
                    "MIN": "分"
                },
                "MODAL": {
                    "LOAD": {
                        "TITLE": "保存当前配置",
                        "AREA": "战役",
                        "HELP": "备注"
                    }
                },
                "BOTTOM": {
                    "ADDR": "原项目链接: ",
                    "SGST": "备用链接: ",
                    "OPTI": "本页面已针对Chromium类浏览器优化。"
                },
                "INCODE": {
                    "ALERT1": "最终获取的目标值应大于当前所拥有的资源值。",
                    "ALERT2": "所选参数无结果。",
                    "ALERT3": "请最少选择一个战役。",
                    "ALERT4": "链接已复制到剪贴板。",
                    "ALERT5": "重置所有选项并刷新页面。",
                    "SAVE": "命名您的设置名称。",
                    "DELETE": "删除"
                }
            },
            "CHART": {
                lang: {
                    months: [
                        '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
                    ],
                    shortMonths: [
                        '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
                    ],
                    weekdays: [
                        '日','1','2','3','4','5','6'
                    ],
                    shortWeekdays: [
                        '日','1','2','3','4','5','6'
                    ]
                }
            }
        }
    };
