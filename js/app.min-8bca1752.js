! function e(n, t, r) {
    function a(s, i) {
        if (!t[s]) {
            if (!n[s]) {
                var l = "function" == typeof require && require;
                if (!i && l) return l(s, !0);
                if (o) return o(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var c = t[s] = {
                exports: {}
            };
            n[s][0].call(c.exports, function(e) {
                var t = n[s][1][e];
                return a(t ? t : e)
            }, c, c.exports, e, n, t, r)
        }
        return t[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) a(r[s]);
    return a
}({
    1: [function(e, n, t) {
        "use strict";
        e("angular"), e("angular-route"), e("angular-cookies"), e("angular-animate"), e("angular-sanitize"), e("angular-loading-bar"), e("nanoscroller"), e("angular-nanoscroller"), e("fancybox"), e("ui-utils");
        var r = angular.module("App", ["ngRoute", "ngCookies", "sun.scrollable", "ngAnimate", "ngSanitize", "chieffancypants.loadingBar", "ui.utils"]);
        r.constant("apiUrl", "http://fldvd-webnet01.ad.nova.edu/HousingContract/api/"), r.constant("upayUrl", "http://sbox1.acast.nova.edu:8000/upay/form/process"), r.constant("upayFormId", "227"), e("./templates"), r.config(["$routeProvider", function(e) {
            e.when("/login", {
                templateUrl: "app/login/login.tpl.html",
                controller: "LoginCtrl"
            }).when("/step1", {
                templateUrl: "app/step.tpl.html",
                controller: "Step1Ctrl"
            }).when("/step2", {
                templateUrl: "app/step.tpl.html",
                controller: "Step2Ctrl"
            }).when("/step3", {
                templateUrl: "app/step.tpl.html",
                controller: "Step3Ctrl"
            }).when("/step4", {
                templateUrl: "app/step.tpl.html",
                controller: "Step4Ctrl"
            }).when("/step5", {
                templateUrl: "app/step.tpl.html",
                controller: "Step5Ctrl"
            }).when("/step6", {
                templateUrl: "app/step.tpl.html",
                controller: "Step6Ctrl"
            }).when("/step7", {
                templateUrl: "app/step.tpl.html",
                controller: "Step7Ctrl"
            }).when("/step8", {
                templateUrl: "app/step.tpl.html",
                controller: "Step8Ctrl"
            }).when("/step9", {
                templateUrl: "app/step.tpl.html",
                controller: "Step9Ctrl"
            }).when("/summary", {
                templateUrl: "app/step.tpl.html",
                controller: "SummaryCtrl"
            }).when("/contract", {
                templateUrl: "app/contract/contract.tpl.html",
                controller: "ContractCtrl"
            }).when("/print", {
                templateUrl: "app/print/print.tpl.html",
                controller: "PrintCtrl"
            }).otherwise({
                redirectTo: "/login"
            })
        }]), r.service("APIService", ["$window", "$http", "$location", "$q", "apiUrl", "upayUrl", "upayFormId", e("./common/api.service")]), r.service("loginService", ["$window", "$http", "apiUrl", e("./login/login.service")]), r.directive("fancybox", e("./common/fancybox.directive")), r.directive("ngHtmlCompile", ["$compile", function(e) {
            return {
                restrict: "A",
                link: function(n, t, r) {
                    n.$watch(r.ngHtmlCompile, function(r) {
                        t.html(r), e(t.contents())(n)
                    })
                }
            }
        }]), r.filter("capitalize", function() {
            return function(e) {
                return "" === e || void 0 === e ? e : e.substring(0, 1).toUpperCase() + e.substring(1)
            }
        }), r.filter("tel", function() {
            return function(e) {
                if (!e) return "";
                var n = e.toString().replace(/[^0-9]/g, "");
                if (n.match(/[^0-9]/)) return e;
                var t, r, a;
                switch (n.length) {
                    case 10:
                        t = 1, r = n.slice(0, 3), a = n.slice(3);
                        break;
                    case 11:
                        t = n[0], r = n.slice(1, 4), a = n.slice(4);
                        break;
                    case 12:
                        t = n.slice(0, 3), r = n.slice(3, 5), a = n.slice(5);
                        break;
                    default:
                        return e
                }
                return 1 === t && (t = ""), a = a.slice(0, 3) + "-" + a.slice(3), $.trim(t + " (" + r + ") " + a)
            }
        }), r.controller("LogoutCtrl", ["$scope", "APIService", e("./login/logout")]), r.controller("LoginCtrl", ["$scope", "$location", "loginService", "APIService", "$window", e("./login/login")]), r.controller("SummaryCtrl", ["$scope", "$compile", "$location", "$templateCache", "$sce", "APIService", e("./summary/summary")]), r.controller("Step1Ctrl", ["$scope", "$location", "APIService", e("./step1/step1")]), r.controller("Step2Ctrl", ["$scope", "$location", "APIService", "$timeout", e("./step2/step2")]), r.controller("Step3Ctrl", ["$scope", "$location", "APIService", e("./step3/step3")]), r.controller("Step4Ctrl", ["$scope", "$location", "APIService", e("./step4/step4")]), r.controller("Step5Ctrl", ["$scope", "$location", "APIService", e("./step5/step5")]), r.controller("Step6Ctrl", ["$scope", "$location", "APIService", e("./step6/step6")]), r.controller("Step7Ctrl", ["$scope", "$location", "APIService", e("./step7/step7")]), r.controller("Step8Ctrl", ["$scope", "$location", "APIService", e("./step8/step8")]), r.controller("Step9Ctrl", ["$scope", "$location", "APIService", e("./step9/step9")]), r.controller("ContractCtrl", ["$scope", "$location", "APIService", e("./contract/contract")]), r.controller("PrintCtrl", ["$scope", "$location", "$timeout", "$templateCache", "APIService", "$window", e("./print/print")]), r.factory("AuthInterceptor", ["$window", "$q", "$location", function(e, n, t) {
            return {
                request: function(t) {
                    var r = localStorage.getItem("nsuHouseToken"),
                        a = localStorage.getItem("nsuHouseUser");
                    return r && a && houseContract.isTokenStillValid() && (e.sessionStorage.setItem("token", r), e.sessionStorage.setItem("user", a)), t.headers = t.headers || {}, e.sessionStorage.getItem("token") && (t.headers.Authorization = "Bearer " + e.sessionStorage.getItem("token")), t || n.when(t)
                },
                response: function(e) {
                    return 401 === e.status && t.url("/login"), e || n.when(e)
                }
            }
        }]), r.config(["$httpProvider", function(e) {
            e.interceptors.push("AuthInterceptor")
        }])
    }, {
        "./common/api.service": 2,
        "./common/fancybox.directive": 3,
        "./contract/contract": 4,
        "./login/login": 5,
        "./login/login.service": 6,
        "./login/logout": 7,
        "./print/print": 8,
        "./step1/step1": 9,
        "./step2/step2": 10,
        "./step3/step3": 11,
        "./step4/step4": 12,
        "./step5/step5": 13,
        "./step6/step6": 14,
        "./step7/step7": 15,
        "./step8/step8": 16,
        "./step9/step9": 17,
        "./summary/summary": 18,
        "./templates": 19,
        angular: "l4T70p",
        "angular-animate": "Cuibh+",
        "angular-cookies": "OC/GgA",
        "angular-loading-bar": "a49DnD",
        "angular-nanoscroller": "YVnu+O",
        "angular-route": "RMfWRV",
        "angular-sanitize": "HIo1Dj",
        fancybox: "Q2h7L6",
        nanoscroller: "Jei4Kv",
        "ui-utils": "RPSwIr"
    }],
    2: [function(e, n, t) {
        n.exports = function(e, n, t, r, a, o, s) {
            "use strict";
            var i;
            return void 0 !== e.sessionStorage.user && ("undefined" === e.sessionStorage.user ? e.sessionStorage.user = void 0 : i = angular.fromJson(e.sessionStorage.user)), {
                upayUrl: o,
                upayFormId: s,
                logout: function() {
                    e.sessionStorage.removeItem("token"), e.sessionStorage.removeItem("user"), localStorage.removeItem("nsuHouseToken"), localStorage.removeItem("nsuHouseUser"), t.url("/login")
                },
                isLoggedIn: function() {
                    return 0 == houseContract.isTokenStillValid() ? !1 : i && e.sessionStorage.token
                },
                updateUser: function(n) {
                    void 0 !== n && (i = n, e.sessionStorage.user = angular.toJson(n))
                },
                getPdfUrl: function(e) {
                    return a + "contracts/" + e + "/pdf"
                },
                getStudent: function() {
                    return (!i || i.error) && t.url("/login"), i
                },
                loadUser: function(t) {
                    n.get(a + "student").success(function(e) {
                        i = e, t(i)
                    }).error(function(n, r) {
                        (void 0 === n || "" === n) && (n = {}, n.message = "Server is not responding. Please try later", 404 === r && (n.message = "You are not eligible to apply for housing.")), i = n, delete e.sessionStorage.token, t({
                            error: n
                        })
                    })
                },
                getTransaction: function(e, t) {
                    var r = a + "contracts/" + e + "?callback=JSON_CALLBACK";
                    "object" == typeof eopdf && (r = "http://localhost:2665/api/contracts/" + e + "?callback=JSON_CALLBACK"), n.jsonp(r).success(function(e) {
                        t(e)
                    }).error(function(e, n, r, a) {
                        t({
                            error: "Error: " + n
                        })
                    })
                },
                getTerms: function(e) {
                    n.jsonp(a + "terms?callback=JSON_CALLBACK").success(function(n) {
                        e(n)
                    }).error(function(n) {
                        e("Error: " + n)
                    })
                },
                getHalls: function(e) {
                    n.jsonp(a + "terms/" + i.contractDates.id + "?callback=JSON_CALLBACK").success(function(n) {
                        e(n.residences)
                    }).error(function(n) {
                        e("Error: " + n)
                    })
                },
                sendStringHtml: function(e, t, o) {
                    var s = r.defer();
                    return n.post(a + "contractsstring/" + e + o, {
                        htmlString: t
                    }, {
                        responseType: "arraybuffer"
                    }).success(function(n, t, r) {
                        var a = new Blob([n], {
                            type: "application/pdf"
                        });
                        saveAs(a, e + ".pdf"), s.resolve()
                    }).error(function(e, n) {
                        s.reject(e)
                    }), s.promise
                }
            }
        }
    }, {}],
    3: [function(e, n, t) {
        n.exports = function() {
            "use strict";
            return {
                restrict: "A",
                link: function(e, n, t) {
                    var r = e.$eval(t.fancybox);
                    $(window).load(function() {
                        $(n).fancybox(r)
                    })
                }
            }
        }
    }, {}],
    4: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            var r = n.search().id;
            e.trid = r, e.header = "Loading contract...", e.transaction = {}, t.getTransaction(r, function(n) {
                e.transaction = n, window.transaction = n, "re" === e.transaction.transactionStatus || "pd" === e.transaction.transactionStatus ? (e.header = "Congratulations!", e.downloadUrl = t.getPdfUrl(r)) : e.header = "Error!!"
            }), e.print = function() {
                void 0 !== r && "" !== r ? n.url("/print?id=" + r) : e.message = "Invalid transaction"
            }
        }
    }, {}],
    5: [function(e, n, t) {
        n.exports = function(e, n, t, r, a) {
            "use strict";
            r.isLoggedIn() && n.url("/step1"), e.credentials = {
                username: "",
                password: ""
            }, e.message = "";
            var o = 6;
            e.backgroundClass = "bg" + (Math.round(Math.random() * (o - 1)) + 1), e.loading = !1, e.update = function() {
                e.message = "", e.loading = !1
            }, e.submit = function() {
                e.loading = !0, t.login(e.credentials, function(t) {
                    if (t.error) e.message = t.error, e.loading = !1;
                    else {
                        if (t.accessToken) {
                            var o = moment.utc(t.expires, "MM/DD/YYYY HH:mm:ss a"),
                                s = moment(o).local().format("MM/DD/YYYY HH:mm:ss");
                            localStorage.setItem("nsuHouseToken", t.accessToken), localStorage.setItem("nsuHouseExpires", s.toString())
                        }
                        r.loadUser(function(t) {
                            t.error ? (e.message = "Error: " + t.error.message, e.loading = !1) : (localStorage.setItem("nsuHouseUser", angular.toJson(t)), r.updateUser(t), a.sessionStorage.nextPage ? n.url("/" + a.sessionStorage.nextPage + "?id=" + a.sessionStorage.id) : n.url("/step1"))
                        })
                    }
                })
            }
        }
    }, {}],
    6: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            return {
                login: function(r, a) {
                    n.post(t + "login", r).success(function(n) {
                        e.sessionStorage.token = n.accessToken, a(n)
                    }).error(function(n) {
                        e.sessionStorage.token = "", a(n ? {
                            error: n.message
                        } : {
                            error: "Service is not responding, please try again later"
                        })
                    })
                },
                logout: function(e) {
                    n.get(t + "logout").success(function(n) {
                        e(n)
                    }).error(function(n) {
                        e({
                            error: n.message
                        })
                    })
                }
            }
        }
    }, {}],
    7: [function(e, n, t) {
        n.exports = function(e, n) {
            "use strict";
            e.logout = function() {
                n.logout()
            }
        }
    }, {}],
    8: [function(e, n, t) {
        n.exports = function(e, n, t, r, a, o) {
            "use strict";

            function s() {
                a.getTransaction(d, function(n) {
                    console.log("transaction", d, n.email), e.transaction = n;
                    var t = n;
                    t.contractDates = {
                        type: n.termType,
                        title: n.termName,
                        hint: n.termHint,
                        startDate: n.startDate,
                        endDate: n.endDate
                    }, e.user = t, i(), "object" == typeof eopdf && ($("#loading-bar").hide(), $("#loading-bar-spinner").hide(), $(".footerwrap").hide(), $("body.application .wrapper.contentwrapper").css("padding", "0").css("background", "none"), $("body").css("background", "none"), console.log("EO.Pdf version number: " + eopdf.getVersion()), console.log(n), eopdf.convert()), e.noError = !0
                })
            }

            function i() {
                for (var n = [], t = 1; 10 >= t; t++) {
                    var a = {};
                    a.html = $(r.get("app/step" + t + "/step" + t + ".tpl.html")).filter("div.nanoouter").html(), void 0 === a.html && (a.html = r.get("app/step" + t + "/step" + t + ".tpl.html")), (2 === t || 3 === t || 5 === t || 6 === t) && (a.html = ""), 7 === t && "grad" === e.user.contractDates.type && (a.html = ""), 7 === t && "grad" !== e.user.contractDates.type && (a.html = $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("span.preface").html(), a.html += $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("div.summary").html()), 2 === t && (a.html = '<p class="contractDates"> <strong>{{user.contractDates.title}}</strong>', a.html += '<span class="hint"> *{{user.contractDates.hint}}* </span><br/> {{user.contractDates.startDate}} - {{user.contractDates.endDate}}', a.html += "</p>", a.html += $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("div.summary").html(), "undergrad" === e.user.contractDates.type ? a.html += $(r.get("app/step" + t + "/undergradterms.tpl.html")).html() : a.html += $(r.get("app/step" + t + "/undergradterms.tpl.html")).html()), 3 === t && (a.html = r.get("app/step" + t + "/step" + t + ".summary.tpl.html")), 5 === t && (a.html = $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("div.summary").html(), a.html += r.get("app/step" + t + "/step" + t + ".summary.tpl.html"), a.html += $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find(".bluebox")[0].outerHTML), 10 === t && (a.html = "<p>You have successfully reviewd and paid your <strong>$500 deposit</strong>.</p>", a.html += "<p>Signature:______________________________________________________________________	Date:______________________________</p>", a.html += "<p>If you are under the age of 18, please make sure to print out your housing contract, have your parent or legal guardian sign it and send to the Office of Residential Life and Housing via email at (housing@nova.edu) or fax at (954) 262-3812.</p>", a.html += "<p>Transaction id: {{user.transactionId}}</p>"), n.push(a)
                }
                n[0].header = "Introduction", n[1].header = "Select A Contract", n[2].header = "General Information", n[3].header = "Medical Insurance", n[4].header = "Criminal Record", n[5].header = "Hall Info & Costs", n[6].header = "Dining Agreement", n[7].header = "Buyout of contract", n[8].header = "Cancelation of Contract", n[9].header = "Review and Pay Deposit", e.steps = n
            }

            function l() {
                var e, n = /houseToken=([^&]*)/,
                    t = location.href;
                return null !== (e = n.exec(t)) && e.length > 0 ? (c = !0, !0) : !1
            }
            e.header = "Summary of Contract", e.html = "app/print/summary.tpl.html", e.noError = !1;
            var c = !1,
                d = n.search().id,
                p = !1;
            e.$on("cfpLoadingBar:completed", function(e, n) {
                p === !1 && t(function() {
                    var e = $("#nsuContractPrint").html();
                    c === !1 ? a.sendStringHtml(d, e, "/pdf") : c === !0 && a.sendStringHtml(d, e, "/adminpdf")
                }, 2e3), p = !0
            }), e.transaction = {}, e.steps = [], s(), a.isLoggedIn() || l() ? console.log(e.user, d) : (o.sessionStorage.nextPage = "print", o.sessionStorage.id = d, console.log(o.sessionStorage), n.url("/login"))
        }
    }, {}],
    9: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            t.getStudent(function(t) {
                t.error && n.url("/login"), e.user = t.user
            }), e.scrolled = !1, e.goToNextStep = function() {
                e.scrolled && n.url(e.nextStep)
            }, e.logout = function() {
                t.logout()
            }, e.scrollend = function() {
                e.scrolled = !0, e.$apply()
            }, e.header = "Step 1: Introduction", e.image = "step-1.jpg", e.html = "app/step1/step1.tpl.html", e.nextStep = "/step2", e.agreeText = "I Agree, Proceed to Step 2"
        }
    }, {}],
    10: [function(e, n, t) {
        n.exports = function(e, n, t, r) {
            "use strict";
            e.user = t.getStudent(), e.dates = [], e.scrolled = !1, e.user.contractDates = void 0, e.$watch("user.contractDates", function() {
                e.user.contractDates && (e.message = "", $("#" + e.user.contractDates.type).click(), "grad" === e.user.contractDates.type || "aample" === e.user.contractDates.type ? e.termsTmpl = "app/step2/gradterms.tpl.html" : e.termsTmpl = "app/step2/undergradterms.tpl.html", $.fancybox({
                    href: "#terms",
                    modal: !0,
                    width: 900
                }))
            }), t.getTerms(function(n) {
                e.dates = n, angular.forEach(n, function(n) {
                    angular.forEach(n.options, function(n) {
                        n.enabled = !0, angular.forEach(e.user.contracts, function(e) {
                            new Date(e.startDate), new Date(e.endDate), new Date(n.startDate), new Date(n.endDate);
                            e.startDate === n.startDate && e.endDate === n.endDate && e.termName === n.title && (n.enabled = !1, n.trId = e.transactionId, n.url = t.getPdfUrl(e.transactionId))
                        })
                    })
                }), e.user.contractDates && $("#" + e.user.contractDates.type).click()
            }), e.scrollend = function() {
                r(function() {
                    e.scrolled = !0, e.$apply()
                })
            }, e.selectAnotherContract = function() {
                r(function() {
                    e.user.contractDates = void 0, $.fancybox.close(!0)
                })
            }, e.goToNextStep = function() {
                e.user.contractDates && e.scrolled && ($.fancybox.close(!0), t.updateUser(e.user), n.url(e.nextStep))
            }, e.myclass = "step2", e.header = "Step 2: Select Your Contract", e.image = "step-2.jpg", e.html = "app/step2/step2.tpl.html", e.nextStep = "/step3", e.agreeText = "I Agree, Proceed to Step 3"
        }
    }, {}],
    11: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !1, void 0 === e.user.isAllergic && (e.user.isAllergic = "no"), void 0 === e.user.emergencyConditions && (e.user.emergencyConditions = "no"), void 0 === e.user.contacts && (e.user.contacts = [{
                phone: "",
                name: "",
                relationship: ""
            }, {
                phone: "",
                name: "",
                relationship: ""
            }]), e.$watch("user", function() {
                e.scrolled = e.validate()
            }, !0), e.validate = function() {
                return e.validateContact(0) && e.validateContact(1) && e.validateAllergic() && e.validateEmergency()
            }, e.validateContact = function(n) {
                if (e.user.contacts[n]) {
                    var t = e.user.contacts[n];
                    if (t.name && t.relationship && t.phone) return !0
                }
                return !1
            }, e.validateAllergic = function() {
                return "yes" === e.user.isAllergic ? "" !== e.user.allergicInfo && void 0 !== e.user.allergicInfo : !0
            }, e.validateEmergency = function() {
                return "yes" === e.user.emergencyConditions ? "" !== e.user.emergencyDesc && void 0 !== e.user.emergencyDesc : !0
            }, e.goToNextStep = function() {
                e.validate() ? (t.updateUser(e.user), n.url(e.nextStep)) : e.message = "Please fill out all of the required fields marked with an * to proceed."
            }, e.header = "Step 3: Student Information", e.image = "step-3.jpg", e.html = "app/step3/step3.tpl.html", e.nextStep = "/step4", e.agreeText = "I Agree, Proceed to Step 4"
        }
    }, {}],
    12: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !0, e.goToNextStep = function() {
                n.url(e.nextStep), t.updateUser(e.user)
            }, e.header = "Step 4: Medical Insurance Waiver", e.image = "step-4.jpg", e.html = "app/step4/step4.tpl.html", e.nextStep = "/step5", e.agreeText = "I Agree, Proceed to Step 5"
        }
    }, {}],
    13: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !1, e.user.criminalRecordCase = "", e.user.criminalRecordCaseDate = "", e.user.criminalRecordCrime = "", e.$watch("user", function() {
                e.scrolled = e.validate()
            }, !0), e.validate = function() {
                return e.user.criminalRecord ? "yes" === e.user.criminalRecord ? "" !== e.user.criminalRecordCase && "" !== e.user.criminalRecordCaseDate && "" !== e.user.criminalRecordCrime : !0 : !1
            }, e.goToNextStep = function() {
                e.validate() ? (t.updateUser(e.user), n.url(e.nextStep)) : e.message = "Please fill out all of the required fields marked with an * to proceed."
            }, e.header = "Step 5: Criminal Record", e.image = "step-5.jpg", e.html = "app/step5/step5.tpl.html", e.nextStep = "/step6", e.agreeText = "Continue To Step 6"
        }
    }, {}],
    14: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !1, e.reshalls = [], t.getHalls(function(n) {
                e.reshalls = n, e.scrolled = !0
            }), e.goToNextStep = function() {
                n.url(e.nextStep), t.updateUser(e.user)
            }, e.showModal = function(e) {
                $.fancybox({
                    type: "iframe",
                    href: e,
                    modal: !1,
                    width: 900
                })
            }, e.header = "Step 6: Hall Information & Costs", e.image = "step-6.jpg", e.html = "app/step6/step6.tpl.html", e.nextStep = "/step7", e.agreeText = "Continue to Step 7"
        }
    }, {}],
    15: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !1, e.header = "Step 7: Dining Services Agreement", e.image = "step-7.jpg", e.html = "app/step7/step7.tpl.html", e.nextStep = "/step8", e.agreeText = "I Agree, Proceed to Step 8", ("grad" === e.user.contractDates.type || "aample" === e.user.contractDates.type) && n.url(e.nextStep), e.goToNextStep = function() {
                e.scrolled && (n.url(e.nextStep), t.updateUser(e.user))
            }, e.scrollend = function() {
                e.scrolled = !0, e.$apply()
            }
        }
    }, {}],
    16: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !0, e.goToNextStep = function() {
                n.url(e.nextStep), t.updateUser(e.user)
            }, e.header = "Step 8: Buyout of Contract", e.image = "step-8.jpg", e.html = "app/step8/step8.tpl.html", e.nextStep = "/step9", e.agreeText = "I Agree, Proceed to Step 9", "grad" === e.user.contractDates.type || "aample" === e.user.contractDates.type ? e.termsTmpl = "app/step8/step8.grad.tpl.html" : e.termsTmpl = "app/step8/step8.undergrad.tpl.html"
        }
    }, {}],
    17: [function(e, n, t) {
        n.exports = function(e, n, t) {
            "use strict";
            e.user = t.getStudent(), e.scrolled = !0, e.goToNextStep = function() {
                n.url(e.nextStep), t.updateUser(e.user)
            }, e.header = "Step 9: Cancellation Process", e.image = "step-9.jpg", e.html = "app/step9/step9.tpl.html", e.nextStep = "/summary", e.agreeText = "I Agree, Proceed to Step 10"
        }
    }, {}],
    18: [function(e, n, t) {
        n.exports = function(e, n, t, r, a, o) {
            "use strict";

            function s() {
                for (var n = [], t = 1; 10 >= t; t++) {
                    var a = {};
                    a.html = $(r.get("app/step" + t + "/step" + t + ".tpl.html")).filter("div.nanoouter").html(), void 0 === a.html && (a.html = r.get("app/step" + t + "/step" + t + ".tpl.html")), (2 === t || 3 === t || 5 === t || 6 === t) && (a.html = ""), 7 === t && "grad" === e.user.contractDates.type && (a.html = ""), 7 === t && "grad" !== e.user.contractDates.type && (a.html = $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("span.preface").html(), a.html += $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("div.summary").html()), 2 === t && (a.html = '<p class="contractDates"> <strong>{{user.contractDates.title}}</strong>', a.html += '<span class="hint"> *{{user.contractDates.hint}}* </span><br/> {{user.contractDates.startDate}} - {{user.contractDates.endDate}}', a.html += "</p>", a.html += $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("div.summary").html(), "undergrad" === e.user.contractDates.type ? a.html += $(r.get("app/step" + t + "/undergradterms.tpl.html")).html() : a.html += $(r.get("app/step" + t + "/undergradterms.tpl.html")).html()), 3 === t && (a.html = r.get("app/step" + t + "/step" + t + ".summary.tpl.html")), 5 === t && (a.html = $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find("div.summary").html(), a.html += r.get("app/step" + t + "/step" + t + ".summary.tpl.html"), a.html += $(r.get("app/step" + t + "/step" + t + ".tpl.html")).find(".bluebox")[0].outerHTML), 10 === t && (a.html = r.get("app/summary/parental.tpl.html")), 10 === t && (a.html = r.get("app/summary/pay.tpl.html")), n.push(a)
                }
                n[0].header = "Step 1 - Introduction", n[1].header = "Step 2 - Select A Contract", n[2].header = "Step 3 - General Information", n[3].header = "Step 4 - Medical Insurance", n[4].header = "Step 5 - Criminal Record", n[5].header = "Step 6 - Hall Info & Costs", n[6].header = "Step 7 - Dining Agreement", n[7].header = "Step 8 - Buyout of contract", n[8].header = "Step 9 - Cancellation Process", n[9].header = "Step 10 - Review and Pay Deposit", e.steps = n
            }
            e.user = o.getStudent(), e.scrolled = !0, e.agreeText = "I agree, Complete Contract", e.goToNextStep = function() {
                e.scrolled && (e.scrolled = !1, $("#payform").submit())
            }, e.upayUrl = a.trustAsResourceUrl(o.upayUrl), e.upayFormId = o.upayFormId, e.showModal = function() {
                $.fancybox({
                    href: "#newContract",
                    modal: !0,
                    width: 900
                })
            }, e.hideModal = function() {
                $.fancybox.close(!0)
            }, e.newContract = function() {
                $.fancybox.close(!0), t.url("/step2")
            }, e.$watch("user.deposit", function() {
                e.user.deposit ? (e.user.total = "500.00", e.agreeText = "I agree, Pay Deposit") : (e.user.total = "0.00", e.agreeText = "Submit Application")
            }), e.header = "Step 10: Summary of Contract", e.image = "step-10.jpg", e.html = "app/summary/summary.tpl.html", s()
        }
    }, {}],
    19: [function(e, n, t) {
        angular.module("App").run(["$templateCache", function(e) {
            e.put("app/step.tpl.html", '<div class="outerwrap">\r\n	<div id="header">\r\n		<div class="wrapper" id="headnav">\r\n			<div id="logo"><a href="http://www.nova.edu/index.html"><img src="//www.nova.edu//_files/images/nova-southeastern-university-logo.png" alt="Nova Southeastern University"></a>\r\n			</div>\r\n			<div id="applicationname">\r\n				<div>\r\n					Residence Hall Application\r\n				</div>\r\n				(2017 - 2018)\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="wrapper contentwrapper clearfix"><!-- wrapper contentwrapper clearfix-->\r\n		<div id="maincontent" class="{{class}}"><!-- maincontent-->\r\n			<h1 class="step">{{header}} <a id="back-btn" class="btn back" href="javascript:window.history.back();">&larr; Back</a></h1>\r\n			<img ng-src="//nova.edu/rms/css/img/{{image}}" alt="Step" class="step"/>\r\n			<div class="alert alert-danger" ng-bind="message" ng-show="message"></div>\r\n			<div ng-include="html" class="crossFade"></div>\r\n			 <div id="buttonwrap">\r\n	            <button type="button" id="nextStep" ng-class="{\'disabled\': !scrolled, \'continue\': scrolled}" ng-click="goToNextStep()">{{agreeText}}</button>\r\n	            <button ng-controller=\'LogoutCtrl\' class="cancel" type="button" ng-click="logout()">Cancel Application</button>\r\n    		</div>\r\n		</div>\r\n		<!-- end maincontent--> \r\n	</div>\r\n	<!--end wrapper contentwrapper clearfix--> \r\n</div>\r\n<div class="footerwrap">\r\n	<div id="footer">\r\n		<p class="wrapper"><a href="http://www.nova.edu/index.html">©2016 Nova Southeastern University</a> <span class="footsep">|</span> <a href="http://www.nova.edu/contactus/index.html">Contact Us</a> <span class="footsep">|</span> <a href="http://www.nova.edu/site.html">Using Our Site</a><br>\r\n			3301 College Avenue, Fort-Lauderdale-Davie, Florida 33314-7796 <span class="footsep">|</span><span> <span id="gc-number-0" class="gc-cs-link" title="Call with Google Voice">800-541-6682</span></span>\r\n		</p>\r\n	</div>\r\n</div>'), e.put("app/contract/contract.tpl.html", '<div class="outerwrap">\r\n	<div id="header">\r\n		<div class="wrapper" id="headnav">\r\n			<div id="logo"><a href="http://www.nova.edu/index.html"><img src="//www.nova.edu//_files/images/nova-southeastern-university-logo.png" alt="Nova Southeastern University"></a>\r\n			</div>\r\n			<div id="applicationname">\r\n				<div>\r\n					Residence Hall Application\r\n				</div>\r\n				(2017 - 2018)\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="wrapper contentwrapper clearfix"><!-- wrapper contentwrapper clearfix-->\r\n		<div id="maincontent" class="contract"><!-- maincontent-->\r\n		<div class="alert alert-danger" ng-bind="message" ng-show="message"></div>\r\n		<h1 class="bighead">{{header}}</h1>\r\n			<div ng-show="transaction.transactionStatus === \'re\' || transaction.transactionStatus === \'pd\' ">\r\n			<p class="bigsub">You have completed your Residence Hall Application.</p>\r\n			<p style="text-align:center">You will be sent a copy of your application via email for your own records. You will be contacted by the Office of Residential Life and Housing regarding your housing arrangements. </p>\r\n			</div>\r\n			<div ng-show="transaction.transactionStatus === \'Error\'">\r\n				ERROR\r\n			</div> \r\n			<div class="row sameheight">\r\n				<div class="col col2">\r\n				<div class="bluebox">\r\n				<h3>Contact Download:</h3>\r\n				<img src="//nova.edu/rms/css/img/contract.png" alt="image" width="272" height="148" style="margin:0px auto; display:block">\r\n				<p>You will be receiving a copy of this document via the email that you provided. If you wish to download the completed copy now just click on the link below. </p>\r\n				<p style="text-align: center;">\r\n				<a href="{{downloadUrl}}" class="continue" target="_blank"> Download Contract</a>\r\n				</p>\r\n				</div>\r\n				</div>\r\n				<div class="col col2">\r\n				<div class="bluebox">\r\n				<h3>Housing Checklist</h3>\r\n				<p>We are glad that you have completed the housing application. As a reminder we want to make sure that you complete the following steps if you have not done so to ensure that you recieve your housing accomodations.</p>\r\n\r\n				<ul class="checklist">\r\n				<li>Complete your Medical Insurance Waiver (if applicable) </li>\r\n				<li> Submit your Immunization Records</li>\r\n				<li>Log into RMS to update your room and roommate preference </li>\r\n				</ul>\r\n\r\n				</div>\r\n				</div>\r\n				</div>\r\n			 <div id="buttonwrap">\r\n	            <button ng-controller=\'LogoutCtrl\' class="cancel" type="button" ng-click="logout()">Exit Application</button>\r\n    		</div>\r\n		</div>\r\n		<!-- end maincontent--> \r\n	</div>\r\n	<!--end wrapper contentwrapper clearfix--> \r\n</div>\r\n<div class="footerwrap">\r\n	<div id="footer">\r\n		<p class="wrapper"><a href="http://www.nova.edu/index.html">©2018 Nova Southeastern University</a> <span class="footsep">|</span> <a href="http://www.nova.edu/contactus/index.html">Contact Us</a> <span class="footsep">|</span> <a href="http://www.nova.edu/site.html">Using Our Site</a><br>\r\n			3301 College Avenue, Fort-Lauderdale-Davie, Florida 33314-7796 <span class="footsep">|</span><span> <span id="gc-number-0" class="gc-cs-link" title="Call with Google Voice">800-541-6682</span></span>\r\n		</p>\r\n	</div>\r\n</div>'), e.put("app/login/login.tpl.html", '<div id="outer" ng-class="backgroundClass">\r\n\r\n  <div id="loginbox">\r\n      <img alt="Nova Southeastern University" src="//nova.edu/_files/images/nova-southeastern-university-logo.png">\r\n        <h1>Residence Hall Application</h1>\r\n        <form ng-submit="submit()" novalidate name="login">\r\n        <div class="alert alert-danger" ng-bind="message" ng-show="message"></div>\r\n          <div><label for="nsuid">NSU ID</label>\r\n\r\n          <input ng-change="update()" name="nsuid" id="nsuid" type="text" ng-model="credentials.username" required ng-disabled="loading" placeholder="N00123456">\r\n\r\n          </div>\r\n           <div><label for="dob">Date of Birth</label>\r\n\r\n           <input ng-change="update()" name="dob" id="dob" type="password" ng-model="credentials.password" required ng-disabled="loading" placeholder="mmddyyyy">\r\n\r\n           </div>\r\n           <div><button ng-class="{\'continue\': !login.$invalid, \'disabled\': login.$invalid}" ng-disabled="loading || login.$invalid">\r\n            <div class="spinner-icon" ng-show="loading"></div>Login\r\n           </button>\r\n\r\n      </div>\r\n      \r\n        </form>\r\n        <p>You have made the right decision to inquire about living on campus at Nova Southeastern University: Home of the Sharks! Once you have completed this application we will review it and contact you regarding your application status. You must pay your $500 deposit before completing the application process.<br />\r\n        </p>\r\n        <hr />\r\n        <div id="questions">\r\n        <h3>Got questions? We have answers!</h3>\r\n       <a href="http://nova.edu/housing" class="btn">Campus Housing Options</a>\r\n       <a href="http://nova.edu/housing/process" class="btn">Housing Contract Process</a>\r\n       </div>\r\n       <hr />\r\n       <div id="footer">\r\n       <p>©2018 Nova Southeastern University | 3301 College Avenue, Fort-Lauderdale-Davie, Florida 33314-7796 | 800-541-6682</p>\r\n</div>\r\n    </div>\r\n\r\n    <div class="bg-caption">\r\n    <div id ="bg1" class="caption1">The Commons Residence Hall</div>\r\n    <div id ="bg2" class="caption1">Cultural Living Center</div>\r\n    <div id ="bg3" class="caption1">Founders, Farquhar and Vettel Residence Halls</div>\r\n    <div id ="bg4" class="caption1">Leo Goodwin Sr. Residence Hall</div>\r\n    <div id ="bg5" class="caption1">Rolling Hills Building A</div>\r\n    <div id ="bg6" class="caption1">Rolling Hills Building C</div>\r\n\r\n    <div class="caption2">Find the room you need to grow - academically and socially</div>\r\n    </div>\r\n\r\n</div>\r\n'), e.put("app/print/print.tpl.html", '<div class="outerwrap" >\r\n	<div class="wrapper contentwrapper clearfix"><!-- wrapper contentwrapper clearfix-->\r\n  <div id="maincontent" class="print" ng-show="!noError">\r\n  <p>There was an error genereating PDF. Please try again later.</p>\r\n  </div>\r\n		<div id="maincontent" class="print" ng-show="noError"><!-- maincontent-->\r\n			<hr class="print_step"/>\r\n                 <div class="row" >\r\n                  <span class="col col3_1">\r\n                    <img src="//nova.edu/rms/css/img/rms_logo.png" alt="Nova Southeastern University" height="250" title="" style="">\r\n                  </span>\r\n                  <span class="col col3_2">\r\n                    <h1>Nova Southeastern University</h1>\r\n                    <h3>2017 - 2018 Residence Hall Contract</h3>\r\n                 </span>\r\n                 </div>            \r\n\r\n    <div id="nsuContractPrint">\r\n        <div ng-repeat="step in steps" class="step{{$index}}print">\r\n          <div ng-html-compile="step.html" ng-compile></div>\r\n        </div>\r\n    </div>\r\n		<!-- end maincontent--> \r\n	</div>\r\n	<!--end wrapper contentwrapper clearfix--> \r\n</div>\r\n<div class="footerwrap">\r\n	<div id="footer">\r\n		<p class="wrapper"><a href="http://www.nova.edu/index.html">©2013 Nova Southeastern University</a> <span class="footsep">|</span> <a href="http://www.nova.edu/contactus/index.html">Contact Us</a> <span class="footsep">|</span> <a href="http://www.nova.edu/site.html">Using Our Site</a><br>\r\n			3301 College Avenue, Fort-Lauderdale-Davie, Florida 33314-7796 <span class="footsep">|</span><span> <span id="gc-number-0" class="gc-cs-link" title="Call with Google Voice">800-541-6682</span></span>\r\n		</p>\r\n	</div>'), e.put("app/step1/step1.tpl.html", '<p> Welcome to the Office of Residential Life and Housing contract application page. Before submitting your contract, please\r\n  make sure to carefully review the terms and conditions of the contract below.\r\n  <p>\r\n\r\n    <p sttyle="color:red;">\r\n      The proposed housing rates for the 2017-2018 academic year are pending final approval and are subject to change. By submitting\r\n      your housing contract you are agreeing that you understand that housing rates may increase. Students are urged to carefully\r\n      consider this condition prior to submitting this contract. After submittal of your housing contract, if you did not\r\n      receive a confirmation email please contact us at (housing@nova.edu).\r\n    </p>\r\n\r\n    <p>\r\n      Once you submit your housing contract below you will be prompted to pay your $500 housing deposit via credit card through\r\n      the UPAY system.\r\n    </p>\r\n\r\n    <div scrollable="{alwaysVisible: \'true\', scroll: \'scrolled\'}" class="nanoouter">\r\n      <h3>Terms of Contract</h3>\r\n      <p class="subheading">Students are urged to carefully consider these conditions prior to submitting this contract.</p>\r\n      <ul id="terms" class="terms doublespace">\r\n        <li>I understand that this contract is binding and cannot be cancelled unless I graduate from NSU, withdraw from Nova\r\n          Southeastern University OR I am suspended, dismissed, or expelled for academic or disciplinary reasons.</li>\r\n        <li>I understand that once this contract is submitted to the Office of Residential Life and Housing and I am obligated\r\n          to the dates, terms and costs related to this contract.</li>\r\n        <li>I understand that the Office of Residential Life and Housing does not guarantee MY choice of residence hall or room\r\n          preferences.\r\n        </li>\r\n        <li>I understand that assignments are done on a first-come, first served basis, and on space availability</li>\r\n        <li>I understand that I shall not be released from this contract due to financial, dietary, or medical reasons. </li>\r\n        <li>I understand that I must be in good financial standing with Nova Southeastern University according to the Office\r\n          of Enrollment Student Services (ESS) in order to move into the residence halls. </li>\r\n        <li>I understand that I must be a registered student to reside in the residence halls. Exceptions are made for undergraduate\r\n          residents residing for the summer term. </li>\r\n        <li>I understand that charges assessed to my account will be based upon the dates indicated on the housing contract and\r\n          not my academic program/term dates.</li>\r\n        <li>I understand that I, the student, and a spouse or domestic partner, if applicable may reside in the residence hall.\r\n          Consequently, no children or other persons may reside in the residence hall.</li>\r\n        <li>I understand that all housing and declining meal plan rates and configurations are subject to change.</li>\r\n      </ul>\r\n      <h3>NSU Residency Requirement</h3>\r\n      <p>Nova Southeastern University requires all undergraduate day students with 0-48 credit hours to live on-campus unless\r\n        one or more of the following criteria applies:</p>\r\n      <ul>\r\n        <li>You are married or in a domestic partnership</li>\r\n        <li>You reside with a parent or legal guardian within the tri-county area (Broward, Dade, and Palm Beach).</li>\r\n        <li>You are a veteran or active United States military personnel.</li>\r\n      </ul>\r\n      <p>If you meet one of the above criteria, and choose on-campus housing, you must honor the entire term of the housing\r\n        contract. If you are over the age of 25 or married you have the option to move into the apartments depending on availability\r\n        or live off-campus.</p>\r\n    </div>'),
                e.put("app/step2/gradterms.tpl.html", ' <div scrollable="{alwaysVisible: \'true\', scroll: \'scrolled\'}" class="nanoouter">\r\n     <h3>Additional Terms</h3>\r\n    <p class="subheading">The additional terms bellow are associated with the contract type that you selected. Please review terms and click agree to terms below to continue.</p>\r\n     <p id="grad_extra">\r\n    <span class="leadp bold">1. <span class="underline">Graduate Room Assignments</span></span>\r\n\r\n    <span>Assignment of a space in the residence halls shall be contingent upon final admission to Nova Southeastern University, receipt of this Residence Hall Contract, security deposit, and immunization records.  The Office of Residential Life and Housing does not guarantee your choice of residence hall or room preferences.  Assignments are done on a first-come, first served basis, and on space availability.  &nbsp; Students interested in rooming together must request each\r\n    other by emailing the corresponding roommates issued identification number (RMS ID) to <a href="mailto:housing@nova.edu">(housing@nova.edu)</a>.\r\n    After April 1st requests will not be received by the Office of Residential Life and Housing.\r\n    </span>\r\n    </p>\r\n  <div ng-include="\'app/step2/mainterms.tpl.html\'"></div>\r\n\r\n  </div>\r\n  <div id="buttonwrap">\r\n    <button type="button" ng-class="{\'disabled\': !scrolled, \'continue\': scrolled}" ng-click="goToNextStep()">I Agree, Proceed to Step 3</button>\r\n    <button class="cancel" type="button" ng-click="selectAnotherContract()">Select Another Contract</button>\r\n</div>\r\n\r\n'), e.put("app/step2/mainterms.tpl.html", '<p>\r\n  <span class="leadp bold">2. <span class="underline">Assignments</span></span> Nova Southeastern University is an equal opportunity institution. Roommate assignments will be made without regard to ethnic origins,   race, religion, or physical limitation. ONLY assigned students may occupy residential space. Space may not be sublet to other persons. If a vacancy occurs in a room or apartment, the remaining resident(s) agree to accept another roommate(s) as assigned by Nova Southeastern University or consolidation to another room or apartment. Space assignments may be changed by the Director of Residence Life and Housing, or designee, in the interest of order, health, disciplines, or best use of the facilities, solely at the discretion of the Director of Residential Life and Housing or his/her designee. \r\n</p>\r\n<p>\r\n  <span class="leadp bold">3. <span class="underline">Care and Maintenance of Residential Facilities</span></span> The care of the individually assigned rooms in the halls shall be the\r\n  responsibility of each occupant. Additionally, residents assigned to a residence hall with shared common areas must keep this area clean and sanitary, including, but not limited to, taking reasonable steps to control pests and insects. All rooms and apartments at Nova\r\n  Southeastern University are fully furnished and residents are not\r\n  allowed to remove university furniture from the rooms. Changes or modifications to residence accommodations are prohibited, unless specifically authorized by a prior written approval from NSU Office of Residential Life and Housing. Upon initial\r\n  occupancy of an assigned space, each resident shall review and sign a\r\n  room assessment form attesting to the condition of the room and its\r\n  furnishings. When a resident checks out of a room, the room will\r\n  be inspected for damage. Damage done to an individual room will result\r\n  in an assessment to the individual room occupant or both room occupants\r\n  jointly and/or separately. Failure to check out properly, as\r\n  defined in the NSU \r\n    <a href="https://www.nova.edu/publications/res_living_guide/index.html" target="_blank">\r\n        Residential  Living Guide\r\n    </a>\r\n  , will result in a $100.00 assessment. Please refer to the \r\n    <a href="https://www.nova.edu/publications/res_living_guide/index.html" target="_blank">\r\n        Residential Living Guide\r\n    </a>\r\n  for proper and complete check out instructions. Damage to a common area\r\n  or the building as a result of the action of residents will result in\r\n  an assessment to all residents responsible. If the responsible\r\n  individual(s) cannot be determined, the entire building community may\r\n  share the cost of the damage to the wing, the floor, or the entire\r\n  building.\r\n</p>\r\n<p>\r\n  <span class="leadp bold">4. <span class="underline">Parking</span></span> All NSU residents are\r\n  eligible to bring a car and park it in the residential parking lots.\r\n  Residents are not allowed to park anywhere else on campus and are\r\n  required to either walk to class or take the \r\n  <a href="http://www.nova.edu/locations/maps/shuttle.html" target="_blank">\r\n    Shark Shuttle Bus\r\n  </a>\r\n  .\r\n  Only residents living in the Rolling Hills Graduate Apartments are\r\n  eligible to park on-campus after 6pm and on the weekends. \r\n</p>\r\n<p>\r\n  <span class="leadp bold">5. <span class="underline">Abandoned Property</span></span> NSU Office of Residential Life and Housing shall not be held responsible for the Student\'s belongings left after a scheduled move-out date or left more than 72 hours after an unscheduled move-out. Such belongings will be deemed abandoned, and NSU Office of Residential Life and Housing reserves the right to take possession of and discard such belongings, change all applicable locks, and charge the Student for all necessary expenses to remove abandoned belongings and change or rekey locks. \r\n</p>\r\n<p>\r\n  <span class="leadp bold">6. <span class="underline">Early Move-In</span></span> Only predetermined groups or organizations that have previously requested permission from NSU Office of Residential Life and Housing can move in early. Early move-in may incur additional charges or fees. \r\n</p>\r\n<p>\r\n  <span class="leadp bold">7. <span class="underline">Move-In and Arrival</span></span> All student will follow all move-in procedures. Official move-in procedures shall be made available prior to move-in. Residential students must be in good financial standing with Nova Southeastern University according to the Office of Enrollment Student Services (ESS) in order to move into the residence halls. Additionally, all residential students must be a registered student to reside in the residence halls. Exceptions are made for undergraduate residents residing for the summer term.  \r\n</p>\r\n<p>\r\n  <span class="leadp bold">8. <span class="underline">Additional Provisions</span></span> Residents are responsible to comply with all applicable laws, Nova\r\n  Southeastern University rules, regulations, and procedures as set forth\r\n  in the Official Nova Southeastern University publications, including,\r\n  but not limited to, the \r\n  <a href="https://www.nova.edu/publications/res_living_guide/index.html" target="_blank">\r\n    Residential Living Guide\r\n  </a>\r\n  and \r\n  <a href="http://www.nova.edu/studentaffairs/forms/studenthandbook_2014-15.pdf" target="_blank">\r\n    Nova  Southeastern University Student Handbook\r\n  </a>\r\n  .\r\n  Nova Southeastern University reserves the right to inspect the halls and all rooms and apartments therein, and to gain access for maintenance, repairs, law enforcement purposes, and the event of emergency situations.  In the event of renovation or remediation, space assignments may be changed by the Director of Residential Life and Housing, or designee, in the interest of order, health, disciplines, or best use of the facilities, solely at the discretion of the Director of Residential Life and Housing or his/her designee. Pets are not allowed in the halls.  Nova Southeastern University is not liable for the loss or damage of resident\'s property while on the premises and Nova Southeastern University encourages residents to acquire appropriate tenant insurance.  Residents are issued a room key when checking into a residence hall.  This key remains the property of Nova Southeastern University and may not be loaned or duplicated.  When residents check out of their rooms, they must follow the checkout procedures and return all keys to the resident advisor.  Lost keys will result in a $75.00 lock change fee. The cost to replace an exterior door key is $75 per key based on the occupancy of the assigned room. Children are not allowed to reside in the halls.  Married couples must provide a marriage license or other proof of marriage satisfactory to Nova Southeastern University.  Nova Southeastern University is not responsible for interruptions in utilities or for damages from hurricanes or other unforeseen circumstances.  All residents must vacate their space no later than 24 hours after their last final exam or class. \r\n</p>\r\n<p>\r\n  Smoking and tobacco use are prohibited in all Nova Southeastern University facilities and on all university property and other properties owned or leased by the University with no exception. This includes, but is not limited to, all indoor and outdoor areas and properties.  Indoor areas and properties include, but are not limited to, all common work areas, elevators, hallways, university-owned or leased vehicles, garages, restrooms, dining areas, employee lounges, conference and meeting rooms, and all other enclosed areas in the workplace.  Outdoor areas include, but are not limited to, parking lots, grounds, rooftops, plazas, courtyards, entrance and exit ways, and any other areas of the university campus.\r\n</p>\r\n<p>\r\n  Also, smoking and tobacco use is prohibited within personal vehicles when on any property owned or leased by Nova Southeastern University.\r\n</p>\r\n<p>\r\n  For purposes of this policy, "smoking" is defined as inhaling, exhaling, burning, carrying or possessing any lighted tobacco product, including cigarettes, cigars, pipe tobacco, and any other lit tobacco products.\r\n</p>\r\n<p>\r\n  For the purposes of this policy, "tobacco use" is defined as the personal use of any tobacco product, whether intended to be lit or not, which shall include smoking as defined above, as well as the use of an electronic cigarette or any other device intended to simulate smoking and the use of smokeless tobacco, including snuff; chewing tobacco; smokeless pouches; any other form of loose-leaf, smokeless tobacco; as well as the use of unlit cigarettes, cigars, and pipe tobacco.\r\n</p>\r\n<p>\r\n  This policy applies to all students, faculty, staff, volunteers, consultants, contractors, and visitors and extends to all facilities occupied or controlled by Nova Southeastern University, including education centers located in the state of Florida and throughout the United States. Smoking and tobacco use is also prohibited in all university-owned or leased vehicles, including but not limited to, Public Safety vehicles, Physical Plant vehicles, the Shark Shuttle, and golf carts\r\n</p>'), e.put("app/step2/step2.tpl.html", '<div class="row vert-divider">\r\n        <div class="col col4_2">\r\n          <div class="greybox" ng-repeat="date in dates |orderBy: \'-section\'">\r\n            <h3>{{date.section}}</h3>\r\n            <p ng-repeat="option in date.options">\r\n              <label> \r\n                <input type="radio" name="contract_date" ng-value="option" ng-disabled="!option.enabled" ng-model="user.contractDates"/> \r\n                <span> \r\n                  <span>{{option.title}}</span>\r\n                  <span ng-show="option.hint"> &mdash; <span class="labelhint">*{{option.hint}}</span></span>\r\n                  <span class="smallhint">{{option.startDate}} - {{option.endDate}}</span>\r\n                  <span class="dangerhint" ng-show="!option.enabled">Contract for the dates already exists. <a href="{{option.url}}" target="_blank" download>Download</a></span>\r\n                </span>\r\n              </label>\r\n            </p>\r\n          </div>\r\n          <div class="spinner-icon" ng-show="dates.length === 0"></div>\r\n        </div>\r\n        <div class="col col4_2 summary">\r\n          <div class="greenbox">\r\n            <p>\r\n            Housing assignments will be made upon submission of this CONTRACT and all required documentation. Upon submission of this CONTRACT students will be bound to all terms, conditions, and fees.</p>\r\n              <p><u>In addition, Room assignments will not be issued until all required documents are received by the Office of Residential Life and Housing.</u> </p>\r\n              <ul>\r\n                <li>A $500.00 Security Deposit</li>\r\n                <li>Mandatory proof of <a href="http://www.nova.edu/reslife/forms/housing_immunizations.pdf" target="_blank">immunization records</a>, All immunization records must be submitted in order to receive a room assignment. </li>\r\n                <li>Medical Insurance  Documentation</li>\r\n              </ul>\r\n          </div>\r\n          <div class="bluebox">\r\n           <h4>Special Needs and Accommodations</h4>\r\n            <p> A number of housing units are designed to be accessible and accommodate\r\nstudents with disabilities.&nbsp; Students who wish to request special\r\nhousing consideration, based on a disability, must contact the Office\r\nof Student Disability Services.&nbsp; Specific written documentation\r\nwill be required from your physician to support the request.&nbsp; For\r\nadditional information on housing accommodations, please contact the <a href="http://www.nova.edu/disabilityservices" target="_blank">Office of Student Disability Services</a> at  (954) 262-7189.  </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n<div id="terms" style="display: none;">\r\n  <div ng-include="termsTmpl"></div>\r\n</div>\r\n'), e.put("app/step2/undergradterms.tpl.html", ' <div scrollable="{alwaysVisible: \'true\', scroll: \'scrolled\'}" class="nanoouter">\r\n    <h3>Additional Terms</h3>\r\n    <p class="subheading">The additional terms bellow are associated with the contract type that you selected. Please review terms and click agree to terms below to continue.</p>\r\n        <p id="undergrad_extra">\r\n    <span class="leadp bold">1. <span class="underline">Undergraduate Room Assignments</span></span>\r\n    <span>\r\n    Assignment of a space in the residence halls shall be contingent upon final admission to Nova Southeastern University, receipt of this Residence Hall Contract, security deposit, and immunization records. Assignments will be based upon credits and availability in each hall. &nbsp;\r\n    </span>\r\n    <span class="bold italic underline">\r\n    Space is limited and undergraduate students are strongly encouraged to complete and return all housing documents prior to May 1st. Undergraduate students whose contracts are received after May 1st may be placed in a single/double, triple or quad room in any of the undergraduate halls depending on space availability. New undergraduate residents will have until May 1st to request a roommate or fill out the roommate survey online through the Residential Management System. Any roomate requests after June 1st will need to be submitted via email <a href="mailto:housing@nova.edu">(housing@nova.edu)</a> to the Office of Residential Life and Housing.</span>\r\n    </p>\r\n    <div ng-include="\'app/step2/mainterms.tpl.html\'"></div>\r\n  </div>\r\n  <div id="buttonwrap">\r\n    <button type="button" ng-class="{\'disabled\': !scrolled, \'continue\': scrolled}" ng-click="goToNextStep()">I Agree, Proceed to Step 3</button>\r\n    <button class="cancel" type="button" ng-click="selectAnotherContract()">Select Another Contract</button>\r\n</div>\r\n\r\n'), e.put("app/step3/step3.summary.tpl.html", '<div class="row">\r\n	<span class="col col1" >\r\n	<b>Full Name</b>: {{user.firstName}} {{user.lastName}}<br/>\r\n	<b>NSU ID</b>: {{user.nsuid}}\r\n	</span>\r\n</div>\r\n\r\n<div class="row">\r\n	<span class="col col1" >\r\n	<b>Cell Phone</b>: {{user.cellPhone}}<br/>\r\n	<b>Email Address</b>: {{user.email}}\r\n	</span>\r\n</div>\r\n\r\n<div class="row">\r\n	<span class="col col1" >\r\n	<b>Are you allergic to any medications or treatments</b>: {{user.isAllergic | capitalize}}<br/>\r\n	<span>{{user.allergicInfo}}</span><br/>\r\n	<b>Do you have medical conditions which must be reported to medical personnel in event of emergency</b>: {{user.emergencyConditions | capitalize}} <br/>\r\n	<span>{{user.emergencyDesc}}</span><br/>\r\n	</span>\r\n</div>\r\n\r\n<hr/>\r\n<h2>Emergency Contact Person(s) Information</h2>\r\n<p>Please read through the following Information:</p>\r\n<ul class="doublespace">\r\n	<li><strong> If you are under the age of 18</strong>, you must list contact information for your parent or legal guardian in case of an emergency. Please understand that your parent or legal guardian will be contacted for all drug, alcohol, behavioral, medical, or psychological emergencies.</li>\r\n	<li><strong> If you are under the age of 21</strong>, you must list contact information for your parent or legal guardian in case of an emergency. Please understand that your parent or legal guardian will be contacted for all drug, alcohol, behavioral, medical, or psychological emergencies.</li>\r\n	<li><strong> If you are 20 or older</strong>, you must list contact information for your parent or legal guardian in case of an emergency. Please understand that your parent or legal guardian may be contacted for all drug, alcohol, behavioral, medical, or psychological emergencies.</li>\r\n</ul>\r\n<p>The office of Residential Life and Housing <strong>reserves the right to contact a parent, guardian, or listed emergency contact regardless of the student\'s age,</strong> at the discretion of the Director of Residential Life and Housing or designee. I have read the above information and understand the emergency contact procedures for the Office of Residential Life and Housing.\r\n</p>\r\n<div class="row">\r\n<table class="contacts">\r\n	<tr>\r\n		<th>Full Name</th>\r\n		<th>Relationship</th>\r\n		<th>Phone Number</th>\r\n	</tr>\r\n	<tr ng-repeat="contact in user.contacts" ng-show="contact.name!==\'\' && contact.name!== undefined && contact.name!== \'&nbsp;\'">\r\n		<td>{{contact.name}}</td>\r\n		<td>{{contact.relationship}}</td>\r\n		<td>{{contact.phone}}</td>\r\n	</tr>\r\n</table>\r\n</div>'), e.put("app/step3/step3.tpl.html", '        <div class="alert alert-info">\r\n\r\nPlease review your student information below. If any of the information shown below is inaccurate or missing please contact your Student Advisor immediately to have it adjusted.\r\n</div>\r\n\r\n            <form>\r\n                  <div class="row">\r\n                        <span class="col col3_1">\r\n                              <label for="fname">First Name:</label>\r\n                              <span>{{user.firstName}}</span>\r\n                        </span>\r\n\r\n                        <span class="col col3_1">\r\n                              <label for="lname">Last Name:</label>\r\n                              <span>{{user.lastName}}</span>\r\n                        </span>\r\n\r\n                        <span class="col col3_1">\r\n                              <label for="dob">Birthday:</label>\r\n                              <span>{{user.birthday}}</span>\r\n                        </span>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                        <span class="col col3_1">\r\n                              <label for="nsuid">NSU ID:</label>\r\n                              <span>{{user.nsuid}}</span>\r\n                        </span>\r\n                        <span class="col col3_1">\r\n                              <label for="email">NSU Email Address:</label>\r\n                              <span>{{user.email}}</span>\r\n                        </span>\r\n                        <span class="col col3_1">\r\n                              <label for="email2">Additional Email Address:</label>\r\n                              <span>{{user.emailAdditional}}</span>\r\n                        </span>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                        \r\n\r\n                        <span class="col col3_1">\r\n                              <label for="phone">Cell Phone:</label>\r\n                              <span>{{user.cellPhone | tel}}</span>\r\n                        </span>\r\n                        <span class="col col3_1">\r\n                              <label for="phone">Home Phone:</label>\r\n                              <span>{{user.homePhone | tel}}</span>\r\n                        </span>\r\n\r\n                  </div>\r\n                        \r\n\r\n<div class="summary">\r\n            <hr/>\r\n            <h2>Emergency Contact Person(s) Information</h2>\r\n            <p>Please read through the following Information:</p>\r\n            <ul class="doublespace">\r\n                <li><strong> If you are under the age of 18</strong>, you must list contact information for your parent or legal guardian in case of an emergency. Please understand that your parent or legal guardian will be contacted for all drug, alcohol, behavioral, medical, or psychological emergencies.</li>\r\n                <li><strong> If you are under the age of 21</strong>, you must list contact information for your parent or legal guardian in case of an emergency. Please understand that your parent or legal guardian will be contacted for all drug, alcohol, behavioral, medical, or psychological emergencies.</li>\r\n                <li><strong> If you are 20 or older</strong>, you must list contact information for your parent or legal guardian in case of an emergency. Please understand that your parent or legal guardian may be contacted for all drug, alcohol, behavioral, medical, or psychological emergencies.</li>\r\n          </ul>\r\n          <p>The office of Residential Life and Housing <strong>reserves the right to contact a parent, guardian, or listed emergency contact regardless of the student\'s age,</strong> at the discretion of the Director of Residential Life and Housing or designee. I have read the above information and understand the emergency contact procedures for the Office of Residential Life and Housing.&nbsp;</p>\r\n\r\n</div>\r\n<hr/>\r\n<div class="row">\r\n                        <span class="col col3_3">\r\n                              <span><span class="required-field">*</span> Do you have medical conditions which must be reported to medical personnel in event of emergency? </span>\r\n                              <input name="medical-conditions" type="radio" value="yes"  ng-model="user.emergencyConditions"><label>Yes</label><input name="medical-conditions" type="radio" value="no"  ng-model="user.emergencyConditions"><label>No</label>\r\n                              <textarea name="alergic_info" ng-model="user.emergencyDesc" ng-show="user.emergencyConditions === \'yes\'"></textarea>\r\n                        </span>\r\n\r\n                        <span class="col col3_3">\r\n                              <span><span class="required-field">*</span> Are you allergic to any medications or treatments?</span>\r\n                              <input name="alergic" type="radio" value="yes" ng-model="user.isAllergic"><label>Yes</label><input name="alergic" type="radio" value="no" ng-model="user.isAllergic"><label>No</label>\r\n                              <textarea name="alergic_info" ng-model="user.allergicInfo" ng-show="user.isAllergic === \'yes\'"></textarea>\r\n\r\n                        </span>\r\n                  </div>  \r\n          <div class="row" ng-repeat="contact in user.contacts">\r\n            <span class="col col3_1" >\r\n                  <label for="contact{{$index}}_name"><span class="required-field">*</span> Contact Person {{$index+1}}:</label>\r\n                  <input name="contact{{$index}}_name" ng-required="$index < 2" type="text" ng-model="contact.name">\r\n            </span>\r\n            <span class="col col3_1">\r\n                  <label for="contact{{$index}}_rel"><span class="required-field">*</span> Relationship:</label>\r\n                  <input name="contact{{$index}}_rel" ng-required="$index < 2" type="text" ng-model="contact.relationship">\r\n            </span>\r\n            <span class="col col3_1">\r\n                  <label for="contact{{$index}}_phone"><span class="required-field">*</span> Phone Number:</label>\r\n                  <input name="contact{{$index}}_phone" ui-mask="(999) 999-9999" ng-required="$index < 2" type="text" ng-model="contact.phone" ng-bind="contact.phone">\r\n            </span>\r\n      </div>\r\n</form>'), e.put("app/step4/step4.tpl.html", '      <p><strong>All Nova Southeastern University RESIDENTIAL STUDENTS are required to maintain adequate health insurance. </strong>As a result, these students will be automatically billed and enrolled in the University\'s Student Health Insurance Plan. Students who have other comparable coverage must file a waiver by the deadline in order to waive participation in the Student Health Insurance Plan. Waivers can only be submitted by visiting <a href="http://www.nova.edu/smc/health_insurance.html" target="_blank">http://www.nova.edu/smc/health_insurance.html</a>. You will receive a confirmation through your NSU email.</p>\r\n      <p>If the waiver information has not been entered online by the indicated deadline on the website, the student will<br>\r\n        remain enrolled in the University\'s Student Health Insurance Plan, and the charge for the Student Health Insurance<br>\r\n        Plan cannot be removed. For more information, please feel free to contact the Office of Student Health Insurance at<br>\r\n        <a href="mailto:studenthealth@nova.edu">studenthealth@nova.edu</a> or by calling 954-262-4060. Please visit the Health and Wellness website (<a href="http://www.nova.edu/wellness/" target="_blank">www.nova.edu/wellness</a>) for any Student Health Insurance updates.</p>'), e.put("app/step5/step5.summary.tpl.html", '<p>\r\n<b>Student Answer</b>: {{user.criminalRecord | capitalize}}\r\n</p>\r\n \r\n<div class="row" ng-show = "user.criminalRecord == \'yes\'">\r\n	<span class="col col1" >\r\n	<b>Case Number</b>: {{user.criminalRecordCase}}<br/>\r\n	<b>When and where crime occurred</b>: {{user.criminalRecordCaseDate}} <br/>\r\n	<b>Nature of the crime</b>: {{user.criminalRecordCrime}}<br/>\r\n	</span>\r\n\r\n</div>'), e.put("app/step5/step5.tpl.html", '<div>\r\n<div class="summary"><p>Residents are under a continuing duty to report convictions of crime,\r\n	even if adjudication or sentence has been withheld. This duty includes\r\n	specifying the nature of the crime, when and where it occurred and the\r\n	case number. This information must be provided with this Agreement, or\r\n	in the event of a conviction occurring after the submission of the\r\n	Agreement, it should be provided in writing to the Director of\r\n	Residential Life and Housing within ten (10) days of the conviction. By signing\r\n	this Agreement, the Student agrees to this term, as well as to the\r\n	continuing duty to comply with this provision. Have you ever been convicted in any state or country of a criminal\r\n	offense, other than a minor traffic offense, where you have been found\r\n	guilty by a judge or jury or entered a plea of nolo contendere (no\r\n	contest); or any juvenile offenses where the records have been\r\n	expunged; or any conviction you are currently appealing, regardless of\r\n	adjudication?\r\n	</p>\r\n</div>\r\n\r\n<div class="row">\r\n	<div class="col col2_1"> \r\n		<input type="radio" name="criminal_record" value="yes" id="criminal_record_0" ng-model="user.criminalRecord" class="criminal_record" />\r\n		<label>Yes</label>\r\n\r\n\r\n		<input type="radio" name="criminal_record" value="no" id="criminal_record_1" ng-model="user.criminalRecord" class="criminal_record"  />\r\n		<label> No</label>\r\n	</div>\r\n\r\n</div>\r\n\r\n<div id="case_info" ng-show = "user.criminalRecord == \'yes\'">\r\n	<div class="row">\r\n		<div class="col col3_1">\r\n			<label for="case_info_number_1"><span class="required-field">*</span> Case Number:</label> <input name="case_info_number_1" id="case_info_number_1"  ng-model="user.criminalRecordCase"  type="text"  size="30" />\r\n		</div>\r\n\r\n		<div class="col col3_2">\r\n			<label for="case_info_details_1"><span class="required-field">*</span> When and where crime occurred:</label> <input name="case_info_details_1" ng-model="user.criminalRecordCaseDate" id="case_info_details_1" type="text"  size="30" />\r\n		</div>\r\n\r\n	</div>\r\n\r\n	<div class="row">       \r\n		<div class="col col3_3">\r\n			<label for="case_info_nature_1"><span class="required-field">*</span> Nature of the crime:</label></textarea> <textarea name="case_info_nature_1" id="case_info_nature_1" ng-model="user.criminalRecordCrime" type="text" cols="3" rows="" /></textarea>\r\n		</div>\r\n\r\n	</div>\r\n</div>    \r\n<div class="bluebox">\r\n	<p style=" text-align:center;">\r\n		<em>\r\n			By signing the housing agreement, permission is given to NSU to make any necessary inquiries. By signing the\r\n			housing agreement, I authorize any government agency, employer, person, firm, corporation, it officers, employees\r\n			and agents, or any other person or entity making written or oral request for information on this matter.\r\n		</em>\r\n	</p>\r\n</div>\r\n\r\n</div>'), e.put("app/step6/step6.tpl.html", '<p>\r\n	Residents are responsible for paying their balance in full before the start of each semester. Please make sure to review the costs of each room type in the building in which you will be living in:\r\n</p>\r\n\r\n<div class="row" ng-repeat="i in [0,3]">\r\n	<div class="col col3_1" ng-repeat="reshall in reshalls.slice(i,i+3)">\r\n		<div class="featurebox reshalls">\r\n			<img ng-src="{{reshall.image}}" alt="{{reshall.title}}" />\r\n			<h3>{{reshall.title}}</h3>\r\n			<p>{{reshall.description}}</p>\r\n			<h4>Room Types:</h4>\r\n			<ul>\r\n				<li ng-repeat="room in reshall.rooms.split(\',\')">{{room}}</li>\r\n			</ul>\r\n\r\n			<div class="featureend">\r\n				<a href="" class="btn resbox various" ng-click="showModal(reshall.infoUrl)">View Details</a>     \r\n			</div>\r\n\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div class="spinner-icon center" ng-show="reshalls.length === 0"></div>'), e.put("app/step7/step7.tpl.html", '<div ng-show="user.contractDates.type != \'grad\'">\r\n	<span class="preface">\r\n<p>\r\n	This agreement is binding and is between Nova Southeastern University and the payer and/or recipient of the Declining Balance Plan(s). Mandatory Declining Balance plan rates will only be prorated up to the 3rd week after the academic semester begins. The recipient of a Declining Balance Plan(s) agrees to the following:\r\n	</p>\r\n	</span>\r\n	<div scrollable="{alwaysVisible: \'true\', scroll: \'scrolled\'}" class="nanoouter summary">\r\n		<h3>Terms of Agreement</h3>\r\n		<p>\r\n		<span class="subheading">By continuing to the next step you are agreeing to the terms listed below. Please review these in detail before proceeding</span>\r\n		</p>\r\n        <ul class="doublespace">\r\n            <li>Purchaser agrees to pay the full price of the Declining Balance Plan(s) indicated.</li>\r\n            <li>SharkCard must be present at each meal attended.<strong> NO EXCEPTIONS</strong>.</li>\r\n            <li>\r\n                Declining Balance privileges may not be transferred to another person.<br>\r\n                Individuals allowing someone else to use their SharkCard will be subject to disciplinary action by the<br>\r\n                University.\r\n            </li>\r\n            <li>\r\n                Refunds will be issued for the Optional Declining Balance Plan through a written request by the participant.<br>\r\n                All undergraduate students living in the Leo Goodwin Sr. Residence Hall or The Commons, regardless of<br>\r\n                credit hours, must purchase a mandatory declining balance plan of $1495 per semester.<br />\r\n                All undergraduate students living in Founders, Farquhar, Vettel, and The Cultural Living Center, regardless of<br>\r\n                credit hours, must purchase a mandatory declining balance plan of $205 per semester.<br />\r\n                It is the responsibility of the student to load their mandatory<br>\r\n                declining meal plan on their sharkcard at the start of the fall and winter semester.\r\n            </li>\r\n            <li>\r\n                If a resident chooses to apply additional funds to their card, they are able to do so at any time. If a balance<br>\r\n                exists on a resident\'s declining balance plan at the end of the fall semester, the resident\'s funds will roll over to<br>\r\n                the winter semester. Once the winter semester has ended, the remaining balance will no longer be available to<br>\r\n                the resident.\r\n            </li>\r\n            <li>\r\n                Cancellation of the housing contract of residents in Leo Goodwin Hall, The Commons, Founders, Farquhar, Vettel, and The Cultural Living Center does not release<br>\r\n                Mandatory Declining Balance Participants from their obligations.\r\n            </li>\r\n            <li>\r\n                Declining Balance privileges may not be transferred to another person.<br>\r\n                Individuals allowing someone else to use their SharkCard will be subject to disciplinary action by the<br>\r\n                University.\r\n            </li>\r\n            <li>\r\n                Residents who are requesting an appeal of their meal plans will need to contact the resident district manager<br>\r\n                of Chartwells <a href="mailto:Jason.Fitch@compass-usa.com">(Jason.Fitch@compass-usa.com)</a>. A final decision will be made by Business Services in<br>\r\n                conjunction with the resident manager of Chartwells on all appeals.\r\n            </li>\r\n            <li>\r\n                Mandatory Declining Balance Plan participants will not be issued a refund for unused funds.<br>\r\n                Both Mandatory and Optional Declining Balance Plans can be used at all NSU Dining locations.\r\n            </li>\r\n            <li>The end date for an Optional Declining Balance Plan will be 5 years from the date of purchase.</li>\r\n        </ul>\r\n	</div>\r\n</div>\r\n'),
                e.put("app/step8/step8.grad.tpl.html", '<p>For the office of Residential Life and Housing graduate residents, semesters will be defined by the graduate housing contract calendar meaning; </p>\r\n<div class="row cancelation">\r\n	<div class="col col3_1 ">\r\n		<div class="featurebox">\r\n			<span class="ico fall featuretop"></span>\r\n			<h3>Fall Semester</h3>\r\n			<h4>August 1 - December 12</h4>\r\n			<p>After the 10th week of the semester the resident will need to buyout of the winter semester.</p>\r\n		</div>\r\n	</div>\r\n	<div class="col col3_1">\r\n		<div class="featurebox">\r\n			<span class="ico winter featuretop"></span>\r\n			<h3>Winter Semester</h3>\r\n			<h4>January 9 - May 7</h4>\r\n			<p>After the 10th week of the semester the resident will need to buyout of the summer semester if they completed a summer housing contract.</p>           \r\n		</div>\r\n	</div>\r\n	<div class="col col3_1">\r\n		<div class="featurebox">\r\n			<span class="ico summer featuretop"></span>\r\n			<h3>Summer Semester</h3>\r\n			<h4>May 8 - July 16</h4>\r\n			<p>After the 10th week of the semester the resident will need to buyout of the winter semester.</p>            \r\n		</div>\r\n	</div>\r\n</div>'), e.put("app/step8/step8.tpl.html", '<p>\r\n    A contract buyout is only available to residents who after the designated check-in date for their respective halls are not required to reside on campus but will remain a student at Nova Southeastern University. In order to be eligible for a Residence Hall Contract Buyout, the resident must submit a written request and complete a Housing Contract Release Form to the Office of Residential Life and Housing and not be in breach of any of the provisions of this Contract or related Nova Southeastern University policies. A resident will be assessed 50% of the semester remaining balance and will be prorated up until the day of an official check out. After the 10th week of classes a resident who is electing to buyout of their housing contract will be assessed the aforementioned 50% of the following semester.\r\n</p>\r\n\r\n<div ng-include="termsTmpl"></div>\r\n\r\n<div class="box bluebox">\r\n    <p style="text-align:center">\r\n        <em>\r\n            Please note that university start and end dates are subject to change. It is important to understand that there are transitioning times between contracted semesters.\r\n            If a student has a contract for the following semester, they will be allowed to remain in the halls during transitional periods.\r\n        </em>\r\n    </p>\r\n</div>\r\n<div class="box greenbox">\r\n    <p style="">\r\n        In the event that a Residence Hall Contract Buyout occurs the resident\r\n    </p>\r\n    <ul>\r\n        <li>(i) shall promptly and properly complete the checkout process,</li>\r\n        <li>(ii) shall vacate the premises no later than 24 hours after notification, and</li>\r\n        <li>(iii) shall pay all amounts due and owing.</li>\r\n    </ul>\r\n    <p>\r\n        Failure to check out properly, as defined in the Residential Living Guide will result in a $100.00 assessment. Failure to timely follow proper procedures in the event of a buyout of the Contract will result in the imposition of a $200.00 fee.\r\n    </p>\r\n</div>'), e.put("app/step8/step8.undergrad.tpl.html", '<p>For the office of Residential Life and Housing undergraduate residents, semesters will be defined by the undergraduate academic calendar meaning;</p>\r\n<div class="row cancelation">\r\n	<div class="col col3_1 ">\r\n		<div class="featurebox">\r\n			<span class="ico fall featuretop"></span>\r\n			<h3>Fall Semester</h3>\r\n			<h4>August 22 - December 12</h4>\r\n			<p>After the 10th week of the semester the resident will need to buyout of the winter semester.</p>\r\n		</div>\r\n	</div>\r\n	<div class="col col3_1">\r\n		<div class="featurebox">\r\n			<span class="ico winter featuretop"></span>\r\n			<h3>Winter Semester</h3>\r\n			<h4>January 9 - May 7</h4>\r\n			<p>After the 10th week of the semester the resident will need to buyout of the summer semester if they completed a summer housing contract.</p>           \r\n		</div>\r\n	</div>\r\n	<div class="col col3_1">\r\n		<div class="featurebox">\r\n			<span class="ico summer featuretop"></span>\r\n			<h3>Summer Semester</h3>\r\n			<h4>May 8 - July 16</h4>\r\n			<p>After the 10th week of the semester the resident will need to buyout of the winter semester.</p>            \r\n		</div>\r\n	</div>\r\n</div>'), e.put("app/step9/step9.tpl.html", '      <p>This Residence Hall Contract will be cancelled during the academic year for the following reasons only: <strong>RESIDENT GRADUATES FROM NSU, WITHDRAWS FROM NOVA SOUTHEASTERN UNIVERSITY OR IS SUSPENDED, DISMISSED, OR EXPELLED FOR ACADEMIC OR DISCIPLINARY REASONS</strong>. The resident must comply with Nova Southeastern University cancellation rules. In the event that one of the above cancellation criteria is met, the resident (i) shall inform the Office of Residence Life/Housing within 24 hours of the occurrence in writing, (ii) shall promptly and properly complete the check out process, (iii) shall vacate the premises no later than 24 hours after notification, and (iv) shall pay all amounts due and owing. Mandatory Declining Balance plan rates will only be prorated up to the 3rd week after the academic semester begins. There will be no housing refunds after the start of the 10th week of the academic term. If a resident exhibits inappropriate behavior according to Nova Southeastern University standards that constitutes a detriment to orderly community living, or otherwise affects the health, safety or welfare of other students, the Director of Residential Life or the Director of Housing and/or her/his designee may change the room assignment or cancel this Agreement immediately without refund. Nova Southeastern University reserves the right, in its sole discretion, to determine that past behavior is such that cancellation of the Residence Hall Contract would best serve the interests of Nova Southeastern University, the resident, and/or other residents. If a student is either not registered or enrolled during any part of the academic year or has failed to timely make any payment to Nova Southeastern University, the student will be removed from housing and will be obligated to pay all housing fees due and owing through the date of removal. Failure to check out properly, as defined in the <a href="#">Residential Living Guide</a>, will result in a $100.00 assessment. Failure to timely follow proper procedures in the event of a cancellation of the Contract may result in the imposition of a $500.00 cancellation fee. </p>\r\n      <h2>Cancellation Fees</h2>\r\n      <p>If a student has paid a housing deposit and decides not to enroll at Nova Southeastern University, the student will incur a cancellation fee based on the date of cancellation below. If a student has submitted a housing contract and elects to cancel their contract prior to check-in day, the student will incur a cancellation fee based on the date of cancellation below. A contract cancellation is only available to students who are not required to reside on campus as per Nova Southeastern University residency requirement.</p>\r\n      <div class="row">\r\n        \r\n        <div class="col col3_1">\r\n          <table border="0" cellpadding="0" cellspacing="0" class="small">\r\n            <tbody><tr>\r\n              <th><span class="ico fall"></span>Fall Semester</th>\r\n              <th align="center">Fee</th>\r\n            </tr>\r\n            <tr>\r\n              <td>January 1st and May 31st</td>\r\n              <td align="center">$200</td>\r\n            </tr>\r\n            <tr>\r\n              <td>June 1st and June 30th</td>\r\n              <td align="center">$300</td>\r\n            </tr>\r\n            <tr>\r\n              <td>July 1st and check-in day</td>\r\n              <td align="center">$500</td>\r\n            </tr>\r\n          </tbody></table>\r\n        </div>\r\n        <div class="col col3_1">\r\n          <table border="0" cellspacing="0" cellpadding="0" class="small">\r\n            <tbody><tr>\r\n              <th><span class="ico winter"></span>Winter Semester</th>\r\n              <th align="center">Fee</th>\r\n            </tr>\r\n            <tr>\r\n              <td>September 1st and October 31st</td>\r\n              <td align="center">$200</td>\r\n            </tr>\r\n            <tr>\r\n              <td>November 1st and November 30th </td>\r\n              <td align="center">$300</td>\r\n            </tr>\r\n            <tr>\r\n              <td>December 1st and check-in day</td>\r\n              <td align="center">$500</td>\r\n            </tr>\r\n          </tbody></table>\r\n        </div>\r\n        <div class="col col3_1">\r\n          <table border="0" cellspacing="0" cellpadding="0" class="small">\r\n            <tbody><tr>\r\n              <th><span class="ico summer"></span>Summer Semester</th>\r\n              <th align="center">Fee</th>\r\n            </tr>\r\n            <tr>\r\n              <td>January 1st and February 28th</td>\r\n              <td align="center">$200</td>\r\n            </tr>\r\n            <tr>\r\n              <td>March 1st and March 31st</td>\r\n              <td align="center">$300</td>\r\n            </tr>\r\n            <tr>\r\n              <td>April 1st and check-in day</td>\r\n              <td align="center">$500</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>'), e.put("app/summary/parental.tpl.html", '<div class="greenbox">\r\n<p>\r\n   If you are under the age of 18, please make sure to print out your housing contract,\r\n   have your parent or legal guardian sign it and mail it to:\r\n   </p>\r\n   <p>\r\n   <b>Office of Residential Life and Housing</b><br/>\r\n   Nova Southeastern University<br/>\r\n   3625 College Avenue<br/>\r\n   Fort Lauderdale, Fl 33314-7796<br/>\r\n      </p>\r\n<p class="signature">Signature of Parent or Legal Guardian</p>\r\n   <p class="signature">Signature of Student</p>\r\n\r\n   <p>&nbsp;</p>\r\n  </div>'), e.put("app/summary/pay.tpl.html", '<div id="parental" ng-if="user.age < 18">\r\n    <div ng-include="\'app/summary/parental.tpl.html\'"></div>\r\n</div>\r\n\r\n\r\n<form name="payform" id="payform" action="{{upayUrl}}" method="post">\r\n	<input type="hidden" name="form_id" value="{{upayFormId}}"/>\r\n	<div ng-show="user.deposit === true">\r\n		<p>\r\n			You must pay your <strong>$500 deposit</strong>. Once you complete your payment you will be redirected here to submit your application.\r\n		</p>\r\n	</div>\r\n	<div ng-show="user.deposit !== true">\r\n		<p>\r\n			You have successfully reviewed and paid your <strong>$500 deposit</strong>. Please submit your application using the button below.\r\n		</p>\r\n        <p>\r\n            Signature:______________________________________________________________________	Date:______________________________\r\n        </p>\r\n        <p>\r\n            If you are under the age of 18, please make sure to print out your housing contract, have your parent or legal guardian sign it and send to the Office of Residential Life and Housing via email at <a href="mailto:housing@nova.edu">(housing@nova.edu)</a> or fax at (954) 262-3812.\r\n        </p>\r\n	</div>\r\n	<p ng-hide="true" ng-repeat="(key, value) in user">\r\n		<input type="hidden" ng-if="key !== \'contacts\' && key !== \'contractDates\' && key !== \'contracts\' " name="{{key}}" value="{{value}}" />\r\n	</p>\r\n\r\n	<p ng-hide="true" ng-repeat="contact in user.contacts">\r\n		<input type="hidden"  name="contacts{{$index}}_name" value="{{contact.name}}" />\r\n		<input type="hidden"  name="contacts{{$index}}_relationship" value="{{contact.relationship}}" />\r\n		<input type="hidden"  name="contacts{{$index}}_phone" value="{{contact.phone}}" />\r\n	</p>\r\n	<input type="hidden"  name="contract_date" value="{{user.contractDates.type}} {{user.contractDates.title}} {{user.contractDates.hint}} {{user.contractDates.dates}} " />\r\n	<input type="hidden"  name="contractDates_id" value="{{user.contractDates.id}}" />\r\n</form>'), e.put("app/summary/summary.tpl.html", '<p>Below you will find a summary of choices you have made thoroughout this entire process.\r\n\r\n\r\n<div ng-repeat="step in steps" class="step{{$index}}summary">\r\n	<div class="bluebar" ng-show="step.html !== \'\'">{{step.header}} <a id="showModal" ng-click="showModal()" class="edit btn">Edit</a></div>\r\n	<div ng-html-compile="step.html" ng-compile></div>\r\n</div>\r\n<div id="newContract" class="box" style="display: none">\r\n<h2>Selecting A New Contract</h2>\r\n<p>By selecting a new contract you will need to additionally edit steps 3 - 9 again.\r\n<p>Are you sure you want to make a change?</p>\r\n<button type="button" id="nextStep" class="continue" ng-click="newContract()">Select a New Contract</button>\r\n<button class="cancel" type="button" ng-click="hideModal()">Do Not Change</button>\r\n\r\n</div>')
        }])
    }, {}]
}, {}, [1]);
