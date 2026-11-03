window.QUESTIONS=[
  {
    "id": "N03",
    "topic": "ネットワーク",
    "level": 1,
    "question": "プライベートIPv4アドレスの説明として、誤っているものはどれか。",
    "answer": "誤っているのは「組織間で一意に割り当てられるので、VPN接続時に重複確認は不要である」。",
    "explanation": "10/8、172.16/12、192.168/16は私的利用の範囲。インターネット全体で一意な割当てではない。",
    "example": "共同利用基盤とのVPN接続前に、双方のアドレス計画を突き合わせる。",
    "pitfall": "プライベートアドレスを暗号化や安全性の保証と思う。",
    "sources": [
      {
        "title": "RFC 1918：プライベートアドレス",
        "url": "https://www.rfc-editor.org/info/rfc1918/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "共同利用基盤との接続前には、双方のアドレス計画を確認する",
        "explanation": "正しい。重複は経路設計や接続方式に影響する。"
      },
      {
        "id": "b",
        "text": "組織間で一意に割り当てられるので、VPN接続時に重複確認は不要である",
        "explanation": "誤り。別組織が同じ範囲を使えるため、相互接続前の重複確認が必要。これが選ぶ対象。"
      },
      {
        "id": "c",
        "text": "10.0.0.0/8はプライベートアドレスの範囲である",
        "explanation": "正しい。RFC 1918が定める私的利用の範囲に含まれる。"
      },
      {
        "id": "d",
        "text": "プライベートアドレスの使用自体は、通信内容の暗号化を意味しない",
        "explanation": "正しい。アドレスの区分と暗号化は別の仕組み。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "W01",
    "topic": "Windows・認証",
    "level": 1,
    "question": "AD環境における認証と認可について、誤っている説明はどれか。",
    "answer": "誤っているのは「ADで認証に成功すれば、すべての共有フォルダを利用できる」。",
    "explanation": "認証は誰かを確認し、認可は何を許すかを決める。アクセス権とグループ所属の双方を確認する。",
    "example": "異動後に不要な共有領域が見えるなら、旧所属グループも点検する。",
    "pitfall": "ログオン成功をアクセス権の正しさの証明とする。",
    "sources": [
      {
        "title": "Microsoft：Active Directory security groups",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "認証は、利用者が誰であるかを確認することに関わる",
        "explanation": "正しい。何を許可するかを決める認可とは区別する。"
      },
      {
        "id": "b",
        "text": "共有フォルダへのアクセスには、アクセス権やグループ所属が関係する",
        "explanation": "正しい。認証成功だけでなく、実際の権限設定を確認する。"
      },
      {
        "id": "c",
        "text": "認可は、対象の操作や資源へのアクセスを許すかを決める",
        "explanation": "正しい。認証済みの利用者にも許可されない操作があり得る。"
      },
      {
        "id": "d",
        "text": "ADで認証に成功すれば、すべての共有フォルダを利用できる",
        "explanation": "誤り。本人確認に成功しても、資源へのアクセスは別の権限で制御される。これが選ぶ対象。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "S01",
    "topic": "セキュリティ・復旧",
    "level": 1,
    "question": "業務システムのRPOを1時間とした。目標として正しいものはどれか。",
    "answer": "正しい選択肢は「障害時に失うデータの時間幅を、1時間以内に抑える」。",
    "explanation": "復旧先の時点を定める。バックアップ間隔だけでなく、取得失敗や転送遅延も影響する。",
    "example": "申請データを最悪何件再入力することになるか、業務課と確認する。",
    "pitfall": "RPOをサービスの復旧所要時間と取り違える。",
    "sources": [
      {
        "title": "NIST：Recovery Point Objective",
        "url": "https://csrc.nist.gov/glossary/term/recovery_point_objective"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "RPOの時間軸",
      "steps": [
        "復旧できる最終時点",
        "この間のデータを失う",
        "障害が発生"
      ],
      "caption": "RPOは、障害発生からどこまで戻る損失を許容するかの目標。復旧作業の長さではない。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "障害発生から1時間以内に、必ずサービスを復旧する",
        "explanation": "誤り。復旧までの時間の目標はRTOである。"
      },
      {
        "id": "b",
        "text": "バックアップの取得処理時間だけを、1時間以内にする",
        "explanation": "誤り。取得処理の所要時間ではなく、復元できる時点と障害時点との差に関わる目標。"
      },
      {
        "id": "c",
        "text": "1時間ごとにバックアップを開始すれば、失敗や転送遅延に関係なく達成できる",
        "explanation": "誤り。実際に復元できる時点には取得成功や転送遅延も影響する。"
      },
      {
        "id": "d",
        "text": "障害時に失うデータの時間幅を、1時間以内に抑える",
        "explanation": "正しい。どの時点までのデータを復旧できるかに関わる目標。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "D01",
    "topic": "データベース",
    "level": 1,
    "question": "データベースの主キーに関する説明で、誤っているものは？",
    "answer": "「氏名は必ず一意なので、検討せず主キーにできる」が誤り。同姓同名や改姓がある。識別子の性質と業務要件を確認する。",
    "explanation": "同じ番号の重複と未設定を防ぐ。氏名は同姓同名や変更があるため、それだけでは識別子に向かない。",
    "example": "申請IDを主キーにし、氏名は属性として保持する。",
    "pitfall": "画面の重複チェックだけでは同時登録を防げない。",
    "sources": [
      {
        "title": "PostgreSQL: Constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "各行を一意に識別する",
        "explanation": "正しい説明。同一の主キー値を持つ複数行を許さない。"
      },
      {
        "id": "b",
        "text": "NULLを許さない",
        "explanation": "正しい説明。未設定の識別子では行を確実に特定できない。"
      },
      {
        "id": "c",
        "text": "複数列の組合せを主キーにする設計もある",
        "explanation": "正しい説明。組合せ全体が一意となる複合主キーを定義できる。"
      },
      {
        "id": "d",
        "text": "氏名は必ず一意なので、検討せず主キーにできる",
        "explanation": "誤り。同姓同名や改姓がある。識別子の性質と業務要件を確認する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "A01",
    "topic": "開発・アルゴリズム",
    "level": 1,
    "question": "s=0から配列[3,1,4]の各要素xに対し、順にs=s+xを実行する。最後のsとして正しいものは？",
    "answer": "8。",
    "explanation": "sは0→3→4→8と変化する。各反復後の値を書くと追いやすい。",
    "example": "集計スクリプトを小さい架空データで手計算と照合する。",
    "pitfall": "ループ内で毎回s=0に初期化する。",
    "sources": [
      {
        "title": "Python: Control flow",
        "url": "https://docs.python.org/3/tutorial/controlflow.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "変数の値を追う",
      "steps": [
        "初期値 s = 0",
        "x = 3 → s = 3",
        "x = 1 → s = 4",
        "x = 4 → s = 8"
      ],
      "caption": "各反復が終わった時点の値を記録する。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "8",
        "explanation": "正しい。0+3=3、3+1=4、4+4=8と累積する。"
      },
      {
        "id": "b",
        "text": "4",
        "explanation": "誤り。最後の要素の値であり、累積結果ではない。"
      },
      {
        "id": "c",
        "text": "3",
        "explanation": "誤り。要素数または最初の加算結果であり、全要素の合計ではない。"
      },
      {
        "id": "d",
        "text": "12",
        "explanation": "誤り。各要素は一度ずつ加える。途中の合計を重ねて足す処理ではない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C01",
    "topic": "クラウド・設計",
    "level": 1,
    "question": "クラウドの責任分担について、誤っている説明は？",
    "answer": "「事業者が基盤を保護していれば、利用側の権限設定は不要である」が誤り。基盤の保護と、誰にどのデータを許可するかの設定は別の責任である。",
    "explanation": "IaaSではOSやアプリ管理も残ることが多い。SaaSでもデータ、利用者、設定の責任を仕様と契約で確認する。",
    "example": "管理者付与と退職者削除の担当を明記する。",
    "pitfall": "クラウド化をセキュリティ運用の全委託と捉える。",
    "sources": [
      {
        "title": "AWS: Shared Responsibility Model",
        "url": "https://aws.amazon.com/compliance/shared-responsibility-model/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "責任分担はサービスごとに確認",
      "columns": [
        {
          "label": "利用側で確認",
          "items": [
            "利用者・権限管理",
            "データの扱い",
            "契約上の設定責任"
          ]
        },
        {
          "label": "提供側で確認",
          "items": [
            "物理基盤の保護",
            "提供サービスの管理範囲",
            "契約上の運用責任"
          ]
        }
      ],
      "caption": "概念図。OS・アプリ等の管理範囲はIaaS／PaaS／SaaSや契約で変わる。"
    },
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "サービス形態によって利用者側の管理範囲は異なる",
        "explanation": "正しい説明。IaaS、PaaS、SaaSなどで責任の境界を確認する。"
      },
      {
        "id": "b",
        "text": "SaaSでも利用者やアクセス権の管理が利用側に残る場合がある",
        "explanation": "正しい説明。サービスを使うだけで設定責任まで全て移るとは限らない。"
      },
      {
        "id": "c",
        "text": "仕様と契約を見て、管理主体を具体的に確認する",
        "explanation": "正しい説明。抽象的な区分だけで個々の運用責任を決めない。"
      },
      {
        "id": "d",
        "text": "事業者が基盤を保護していれば、利用側の権限設定は不要である",
        "explanation": "誤り。基盤の保護と、誰にどのデータを許可するかの設定は別の責任である。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "G01",
    "topic": "自治体・制度",
    "level": 1,
    "question": "LGWANに関する説明で、誤っているものは？",
    "answer": "「LGWANに接続した端末は、利用者や設定に関係なく常に安全である」が誤り。専用網だけでは端末感染、権限の過大付与、操作ミス等を防ぎきれない。",
    "explanation": "専用網であることと、端末や利用者が常に安全であることは別。接続後も権限管理や監視が必要。",
    "example": "LGWAN経由のサービスでも、異動者の権限を棚卸しする。",
    "pitfall": "「閉域だから内部のアクセス制御は不要」と考える。",
    "sources": [
      {
        "title": "J-LIS 総合行政ネットワーク",
        "url": "https://www.j-lis.go.jp/lgwan/cms_15.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "地方公共団体等を結ぶ行政専用ネットワークである",
        "explanation": "正しい説明。一般公開のインターネットとは用途や接続管理が異なる。"
      },
      {
        "id": "b",
        "text": "LGWANを使う場合も、端末や利用者の権限管理が必要である",
        "explanation": "正しい説明。専用網であることと、個々の端末や操作が安全であることは別。"
      },
      {
        "id": "c",
        "text": "専用網の中でも、運用状況を監視する必要がある",
        "explanation": "正しい説明。接続後の不適切な利用や障害にも備える。"
      },
      {
        "id": "d",
        "text": "LGWANに接続した端末は、利用者や設定に関係なく常に安全である",
        "explanation": "誤り。専用網だけでは端末感染、権限の過大付与、操作ミス等を防ぎきれない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "M01",
    "topic": "調達・マネジメント",
    "level": 1,
    "question": "「使いやすいシステム」という調達要件を、受入確認できる形へ改善するには？",
    "answer": "誰が・どの業務を・どの条件で・どの水準まで行えるかという確認可能な条件。",
    "explanation": "抽象語のままでは提案も検査も一致しない。代表的な操作と達成基準に具体化する。",
    "example": "初めての職員が手順書を見て申請検索を完了できるか試す。",
    "pitfall": "製品名や画面の好みだけで要件を決める。",
    "sources": [
      {
        "title": "デジタル庁 標準ガイドライン群（政府向け、自治体では参考）",
        "url": "https://www.digital.go.jp/resources/standard_guidelines"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "利用者・対象業務・利用条件・達成水準を、確認できる条件として定める",
        "explanation": "正しい。抽象語のままでは提案も検査も一致しない。代表的な操作と達成基準に具体化する。"
      },
      {
        "id": "b",
        "text": "「非常に使いやすい」と表現を強める",
        "explanation": "誤り。強い形容詞に変えても、合否を判断する条件は明らかにならない。"
      },
      {
        "id": "c",
        "text": "ベンダーが使いやすいと言えば適合するという条件にする",
        "explanation": "誤り。利用者や業務に照らした客観的な確認基準にならない。"
      },
      {
        "id": "d",
        "text": "画面の色だけを指定し、対象操作や利用者は書かない",
        "explanation": "誤り。色の指定だけでは業務の達成や操作の容易さを検証できない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N04",
    "topic": "ネットワーク",
    "level": 1,
    "question": "IPv4のARPの役割として正しいものはどれか。",
    "answer": "正しい選択肢は「同一リンク上のIPv4アドレスに対応するMACアドレスを調べる」。",
    "explanation": "別ネットワーク宛てでは、通常、最終宛先ではなく次の中継先のMACアドレスを調べる。",
    "example": "庁外宛て通信で端末のARP表にデフォルトゲートウェイが載る理由を説明する。",
    "pitfall": "ARPがインターネット全体の宛先MACを調べると思う。",
    "sources": [
      {
        "title": "RFC 826：ARP",
        "url": "https://www.rfc-editor.org/info/rfc826/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "同一リンク上のIPv4アドレスに対応するMACアドレスを調べる",
        "explanation": "正しい。別ネットワーク宛てなら、通常は次の中継先のMACアドレスを調べる。"
      },
      {
        "id": "b",
        "text": "ホスト名に対応するIPv4アドレスを調べる",
        "explanation": "誤り。通常これはDNSによる名前解決の役割。"
      },
      {
        "id": "c",
        "text": "端末へリース期間付きのIPアドレスを配布する",
        "explanation": "誤り。これはDHCPの役割。"
      },
      {
        "id": "d",
        "text": "別ネットワークにある最終宛先までの全ルータを一覧化する",
        "explanation": "誤り。ARPは経路全体の調査ではなく、リンク上のアドレス解決を行う。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "W05",
    "topic": "Windows・認証",
    "level": 1,
    "question": "GPOのユーザー設定とコンピューター設定の対象について、基本的な説明として正しいものはどれか。",
    "answer": "正しい選択肢は「ユーザー設定はユーザー、コンピューター設定はコンピューターに対する設定である」。",
    "explanation": "対象オブジェクトの位置やリンク先等が適用範囲に関わる。端末と利用者のOUが違えば結果も異なる。",
    "example": "特定端末だけの不具合か、特定職員だけの不具合かを切り分ける。",
    "pitfall": "ユーザーを移動しただけで端末設定も必ず変わると思う。",
    "sources": [
      {
        "title": "Microsoft：Group Policy overview",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "ユーザー設定は、コンピューターのOUだけで常に決まる",
        "explanation": "誤り。ユーザー設定の通常の対象と適用範囲を取り違えている。ループバック等の例外は別途確認する。"
      },
      {
        "id": "b",
        "text": "コンピューター設定は、ログオンしたユーザーのOUだけで決まる",
        "explanation": "誤り。コンピューター側の対象オブジェクトと適用範囲を確認する必要がある。"
      },
      {
        "id": "c",
        "text": "同じドメインの端末には、すべてのGPOが無条件で同じように適用される",
        "explanation": "誤り。リンクや対象、フィルター等によって適用結果は異なる。"
      },
      {
        "id": "d",
        "text": "ユーザー設定はユーザー、コンピューター設定はコンピューターに対する設定である",
        "explanation": "正しい。対象オブジェクト、リンク先、フィルター等と実際の適用結果を確認する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "S02",
    "topic": "セキュリティ・復旧",
    "level": 1,
    "question": "業務システムのRTOを4時間とした。目標として正しいものはどれか。",
    "answer": "正しい選択肢は「中断から目標とするサービス水準へ復旧するまでを、4時間以内にする」。",
    "explanation": "データの復元だけでなく、環境再構築や業務確認等を含めて実現性を検証する。",
    "example": "住民窓口が再開できるまでの手順を計測する。",
    "pitfall": "バックアップソフトの復元時間だけでRTOを満たしたとする。",
    "sources": [
      {
        "title": "NIST：Recovery Time Objective",
        "url": "https://csrc.nist.gov/glossary/term/recovery_time_objective"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "RTOの時間軸",
      "steps": [
        "業務が中断",
        "復旧作業と確認",
        "目標のサービス水準へ復旧"
      ],
      "caption": "最初から最後までの時間を目標内に収める。データ復元の時間だけではない。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "バックアップの保存期間を4時間だけにする",
        "explanation": "誤り。RTOはバックアップ保持期間を決める値ではない。"
      },
      {
        "id": "b",
        "text": "復元コマンドの実行時間だけを4時間以内にすれば、業務再開が遅れても達成となる",
        "explanation": "誤り。目標のサービス水準への復旧で評価し、コマンドだけで完了とはしない。"
      },
      {
        "id": "c",
        "text": "中断から目標とするサービス水準へ復旧するまでを、4時間以内にする",
        "explanation": "正しい。データ復元だけでなく、環境再構築や業務確認も含めて検証する。"
      },
      {
        "id": "d",
        "text": "障害前4時間分のデータは必ず失ってよい",
        "explanation": "誤り。許容するデータ喪失の時間幅はRPOに関わる。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "D04",
    "topic": "データベース",
    "level": 1,
    "question": "SQLのNULLに関する説明で、誤っているものは？",
    "answer": "「WHERE 処理日 = NULLで、NULLの処理日だけを取得できる」が誤り。通常の等号比較は真にならないため、IS NULLを使う。",
    "explanation": "NULLは不明・未設定を表し、通常の等号比較は真にならない。空文字やゼロとは別物。",
    "example": "未処理抽出をNULLを含むデータで確認する。",
    "pitfall": "NULLを空文字と同じものとして扱う。",
    "sources": [
      {
        "title": "PostgreSQL: Comparison functions",
        "url": "https://www.postgresql.org/docs/current/functions-comparison.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "未設定の処理日を検索するには、処理日 IS NULLを使う",
        "explanation": "正しい説明。NULL判定にはIS NULLを使う。"
      },
      {
        "id": "b",
        "text": "NULLと空文字列は同じものとは限らない",
        "explanation": "正しい説明。未設定と長さゼロの文字列は区別して考える。"
      },
      {
        "id": "c",
        "text": "通常の等号比較でNULL同士を比べても真にはならない",
        "explanation": "正しい説明。NULLを含む比較は通常UNKNOWNとなり、WHEREで採用されない。"
      },
      {
        "id": "d",
        "text": "WHERE 処理日 = NULLで、NULLの処理日だけを取得できる",
        "explanation": "誤り。通常の等号比較は真にならないため、IS NULLを使う。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "A04",
    "topic": "開発・アルゴリズム",
    "level": 1,
    "question": "A、B、Cの順に入れ、最後に入れたものから取り出す。データ構造と最初の出力の正しい組合せは？",
    "answer": "スタック。最初はC。",
    "explanation": "後入れ先出し（LIFO）。直前の操作から戻る処理に適する。",
    "example": "操作履歴を逆順にたどる。",
    "pitfall": "到着順で公平に処理したい受付待ちにそのまま使う。",
    "sources": [
      {
        "title": "Python: Data Structures",
        "url": "https://docs.python.org/3/tutorial/datastructures.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "スタック／C",
        "explanation": "正しい。スタックは後入れ先出し（LIFO）なので最後のCが先に出る。"
      },
      {
        "id": "b",
        "text": "スタック／A",
        "explanation": "誤り。Aは最初に入れた要素であり、スタックでは最後に取り出す。"
      },
      {
        "id": "c",
        "text": "キュー／C",
        "explanation": "誤り。通常のFIFOキューならAが先に出る。"
      },
      {
        "id": "d",
        "text": "キュー／B",
        "explanation": "誤り。FIFOキューは挿入順に取り出すため、最初はBではない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C02",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "同じ障害区画にサーバーを2台置いた。区画全体の停止への対策として適切な考え方は？",
    "answer": "障害領域を分け、アプリ・DB・接続経路を含めて切替を設計する。",
    "explanation": "AWSのAZはリージョン内で分離された場所。複数AZでもアプリ・DB・接続経路の切替設計が必要。",
    "example": "Web層だけでなくDBの単一障害点も確認する。",
    "pitfall": "2台なら可用性要件を満たすと判断する。",
    "sources": [
      {
        "title": "AWS: Regions and Zones",
        "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "障害領域を分け、アプリやDB・接続経路の切替も設計する",
        "explanation": "正しい。同一の原因で両方止まるリスクと、切替後に業務が続く条件を確認する。"
      },
      {
        "id": "b",
        "text": "同じ区画内で台数を2台にすれば、区画全体の停止にも必ず耐える",
        "explanation": "誤り。区画に共通する電源等の障害では両方停止し得る。"
      },
      {
        "id": "c",
        "text": "別AZへ1台置くだけで、アプリやDBの切替は必ず自動化される",
        "explanation": "誤り。配置分散だけではデータ同期やアプリの切替動作は保証されない。"
      },
      {
        "id": "d",
        "text": "サーバー名を別々にすれば、物理的な障害領域も別になる",
        "explanation": "誤り。名前ではなく実際の配置と依存関係で判断する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G03",
    "topic": "自治体・制度",
    "level": 1,
    "question": "情報セキュリティの基本方針・対策基準・実施手順の役割として、適切な説明は？",
    "answer": "方針は組織の考え方、基準は守る規則、手順は具体的な作業方法。",
    "explanation": "規則と操作説明を分けると、機器交換時に方針まで変更する必要がなくなる。具体的な文書構成は団体の規程を確認する。",
    "example": "「権限を適切に管理する」を申請・承認・設定・点検の手順に落とす。",
    "pitfall": "国の例文を自団体の承認済み規程とみなす。",
    "sources": [
      {
        "title": "総務省説明資料：情報セキュリティポリシー（2025年資料・構成の参考）",
        "url": "https://www.cyber.go.jp/pdf/council/cs/cs_expert/05/05document4.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "visual": {
      "title": "方針を作業まで具体化する",
      "steps": [
        "基本方針：何を守るか",
        "対策基準：守る規則",
        "実施手順：誰がどう行うか"
      ],
      "caption": "文書の階層を示す概念図。団体の正式な文書体系を確認する。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "方針は組織の考え方、基準は守る規則、手順は具体的な作業方法",
        "explanation": "正しい。規則と操作説明を分けると、機器交換時に方針まで変更する必要がなくなる。具体的な文書構成は団体の規程を確認する。"
      },
      {
        "id": "b",
        "text": "方針はコマンド集、基準は組織の理念、手順は守る規則である",
        "explanation": "誤り。抽象度の順序を取り違えている。具体的操作は手順で扱う。"
      },
      {
        "id": "c",
        "text": "方針・基準・手順は同じ内容を同じ粒度で書くための三つの名称である",
        "explanation": "誤り。考え方、守る条件、実行方法を分けることで保守しやすくする。"
      },
      {
        "id": "d",
        "text": "手順を作れば、組織として何を守るかの方針は不要である",
        "explanation": "誤り。作業方法だけでは組織全体の判断基準や目的を共有できない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M02",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "性能要件「画面応答3秒以内」を明確にするために、追加すべき条件として適切なものは？",
    "answer": "対象操作、同時利用数、データ量、測定区間、達成割合などを決める。",
    "explanation": "平均値だけだと一部の非常に遅い処理を隠す。業務上必要な条件で測定する。",
    "example": "ピーク時100同時利用、検索の95%以上が3秒以内、などと定義する。",
    "pitfall": "空のデータベースでの単独操作だけで受入れする。",
    "sources": [
      {
        "title": "IPA 非機能要求グレード2018",
        "url": "https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/hikinou/ent03-b.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "対象操作・同時利用数・データ量・測定区間・達成割合を決める",
        "explanation": "正しい。平均値だけだと一部の非常に遅い処理を隠す。業務上必要な条件で測定する。"
      },
      {
        "id": "b",
        "text": "同時利用者が1人の試験だけで、全ての利用条件を代表させる",
        "explanation": "誤り。想定する負荷やデータ量と異なる条件では必要性能を確認できない。"
      },
      {
        "id": "c",
        "text": "測定開始点と終了点を決めず、ベンダーごとの数値を比較する",
        "explanation": "誤り。測る範囲が違う数値はそのまま比較できない。"
      },
      {
        "id": "d",
        "text": "平均3秒であれば、一部の操作が非常に遅くても必ず合格とする",
        "explanation": "誤り。業務上許容できる達成割合や対象操作等を決める必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N05",
    "topic": "ネットワーク",
    "level": 1,
    "question": "DNSの権威サーバと再帰リゾルバの役割の組合せとして正しいものはどれか。",
    "answer": "正しい選択肢は「権威サーバは担当ゾーンの情報を提供し、再帰リゾルバは利用者に代わって名前解決する」。",
    "explanation": "問い合わせ先をたどる役割と、正式なゾーン情報を持つ役割を分けて考える。",
    "example": "庁内端末が参照するDNSと、市公式ドメインを管理するDNSを区別する。",
    "pitfall": "DNSサーバをすべて同じ役割だと思う。",
    "sources": [
      {
        "title": "RFC 1034：DNS",
        "url": "https://www.rfc-editor.org/info/rfc1034/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "名前解決の役割",
      "steps": [
        "端末が名前を問い合わせ",
        "再帰リゾルバが探索",
        "権威サーバから応答",
        "再帰リゾルバが端末へ返答"
      ],
      "caption": "キャッシュがない場合の概略。権威サーバの探索では複数の問い合わせが起きる。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "権威サーバが利用者に代わって全問い合わせをたどり、再帰リゾルバが各ゾーンの正式情報を管理する",
        "explanation": "誤り。名前解決を代行する役割と、担当ゾーンの正式情報を提供する役割を取り違えている。"
      },
      {
        "id": "b",
        "text": "再帰リゾルバは、存在する全ドメインの正式なゾーン情報を保持する",
        "explanation": "誤り。必要な情報を問い合わせ、応答をキャッシュするのであり、全ゾーンの権威ではない。"
      },
      {
        "id": "c",
        "text": "権威サーバの情報は、再帰リゾルバのキャッシュが更新されると書き換わる",
        "explanation": "誤り。キャッシュ更新は権威情報の管理・更新とは別である。"
      },
      {
        "id": "d",
        "text": "権威サーバは担当ゾーンの情報を提供し、再帰リゾルバは利用者に代わって名前解決する",
        "explanation": "正しい。正式なゾーン情報を持つ役割と、問い合わせをたどる役割を区別する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "W09",
    "topic": "Windows・認証",
    "level": 1,
    "question": "共有フォルダの権限を職員一人ずつ直接設定するより、役割に対応したグループで管理する利点はどれか。",
    "answer": "正しい選択肢は「権限付与・異動時の変更・棚卸しを、職務や役割に対応付けやすい」。",
    "explanation": "グループと資源の権限を対応付け、異動時は所属を更新する。入れ子による間接権限も点検対象になる。",
    "example": "年度替わりに課別グループの所有者へ所属確認を依頼する。",
    "pitfall": "グループ化すれば棚卸しが不要になると思う。",
    "sources": [
      {
        "title": "Microsoft：Active Directory security groups",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "グループに入れれば、権限の棚卸しを永久に省略できる",
        "explanation": "誤り。グループ管理でも不要な所属や入れ子の見直しが必要。"
      },
      {
        "id": "b",
        "text": "グループ管理にすると、すべての利用者に自動で管理者権限が与えられる",
        "explanation": "誤り。必要な権限をグループへ割り当てる設計であり、全員を管理者にする仕組みではない。"
      },
      {
        "id": "c",
        "text": "グループを使えば、フォルダ側のアクセス権設定は不要になる",
        "explanation": "誤り。グループと資源の権限を対応させる設定は必要。"
      },
      {
        "id": "d",
        "text": "権限付与・異動時の変更・棚卸しを、職務や役割に対応付けやすい",
        "explanation": "正しい。グループと資源の関係を整理し、入れ子による間接権限も確認する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "S10",
    "topic": "セキュリティ・復旧",
    "level": 1,
    "question": "多要素認証について、誤っているものはどれか。",
    "answer": "誤っているのは「パスワードと秘密の質問は二つの手段なので、通常は異なる二要素となる」。",
    "explanation": "知識・所持・生体など異なる要素を組み合わせる。認証手段の強さや復旧手続きも評価する。",
    "example": "管理者向けMFAでは、端末紛失時の再登録手順も設計する。",
    "pitfall": "二回質問されることを二要素だと考える。",
    "sources": [
      {
        "title": "カナダCyber Centre：管理者権限とMFA",
        "url": "https://www.cyber.gc.ca/en/guidance/top-10-it-security-actions-no3-managing-controlling-administrative-privileges-itsm10094"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "認証手段だけでなく、アカウント復旧手続きの安全性も評価する",
        "explanation": "正しい。弱い復旧経路があれば、通常の認証を迂回される危険がある。"
      },
      {
        "id": "b",
        "text": "認証方式ごとに、フィッシング等への耐性も確認する",
        "explanation": "正しい。多要素という呼称だけで、すべての方式が同じ強さとは限らない。"
      },
      {
        "id": "c",
        "text": "パスワードと秘密の質問は二つの手段なので、通常は異なる二要素となる",
        "explanation": "誤り。どちらも知識要素であり、手段の個数だけでは異なる要素にならない。これが選ぶ対象。"
      },
      {
        "id": "d",
        "text": "知識・所持・生体など、異なる要素の組合せを考える",
        "explanation": "正しい。異なる種類の要素を組み合わせることが基本。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "D08",
    "topic": "データベース",
    "level": 1,
    "question": "同じDB上の「申請の承認」と「履歴追加」を、片方だけ確定させたくない。適切な設計は？",
    "answer": "同じトランザクションにして、全体をCOMMITまたはROLLBACKする。",
    "explanation": "原子性は処理を一まとまりで確定・取消する性質。外部への通知は同じDBトランザクションに自動では含まれない。",
    "example": "履歴追加が失敗したら承認更新も戻す。",
    "pitfall": "DBが成功したのでメールも必ず送信済みと考える。",
    "sources": [
      {
        "title": "PostgreSQL: Transactions",
        "url": "https://www.postgresql.org/docs/current/tutorial-transactions.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "履歴追加で失敗した場合",
      "steps": [
        "BEGIN：処理を開始",
        "申請を承認済みに更新",
        "履歴追加が失敗",
        "ROLLBACK：承認更新も取消し"
      ],
      "caption": "両処理が同じDBトランザクションに含まれる例。外部通知は別途設計する。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "同じトランザクションに含め、全体をCOMMITまたはROLLBACKする",
        "explanation": "正しい。原子性により一まとまりで確定または取消する。"
      },
      {
        "id": "b",
        "text": "承認更新を先にCOMMITし、履歴追加に失敗しても成功とする",
        "explanation": "誤り。片方だけ確定しないという要件に反する。"
      },
      {
        "id": "c",
        "text": "二つのSQLを別々に送るだけで、必ず一体として確定されるとする",
        "explanation": "誤り。送る順番だけではトランザクション境界を定義できない。"
      },
      {
        "id": "d",
        "text": "履歴追加のエラーを表示しなければ、DB状態の不整合は起きない",
        "explanation": "誤り。表示を隠しても、一部だけ確定したデータは変わらない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A05",
    "topic": "開発・アルゴリズム",
    "level": 1,
    "question": "A、B、Cの順に受け付けた仕事を、受け付け順に取り出す。構造と最初に取り出す仕事の正しい組合せは？",
    "answer": "キュー。最初はA。",
    "explanation": "先入れ先出し（FIFO）。複数担当で並列処理すると完了順まで同じとは限らない。",
    "example": "帳票生成依頼を受付順に取り出す。",
    "pitfall": "取出し順の保証を完了順の保証と混同する。",
    "sources": [
      {
        "title": "Python: Data Structures",
        "url": "https://docs.python.org/3/tutorial/datastructures.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "キュー／A",
        "explanation": "正しい。FIFOキューは先入れ先出し。ただし並列実行時の完了順まで保証するとは限らない。"
      },
      {
        "id": "b",
        "text": "キュー／C",
        "explanation": "誤り。Cは最後に受け付けた仕事であり、FIFOでは最後に取り出す。"
      },
      {
        "id": "c",
        "text": "スタック／A",
        "explanation": "誤り。スタックなら最後に入れたCを先に取り出す。"
      },
      {
        "id": "d",
        "text": "スタック／B",
        "explanation": "誤り。LIFOの最初の出力はCで、Bではない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C03",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "複数AZで運用するシステムの復旧計画について、誤っているものは？",
    "answer": "「複数AZなら、広域障害を含むあらゆる復旧計画が不要になる」が誤り。AZ分散では対処しきれない共通障害もあり、想定に応じた復旧計画が必要。",
    "explanation": "AZ分散とリージョンをまたぐ復旧では対象障害が異なる。複雑さと費用を考慮して要件を決め、手順を試す。",
    "example": "災害時に最低限再開する受付機能と期限を決める。",
    "pitfall": "多重化という言葉だけで地域全体の停止も対策済みとする。",
    "sources": [
      {
        "title": "AWS: Recovery strategies",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_disaster_recovery.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "対象とする障害の範囲を定義する",
        "explanation": "正しい説明。単一AZ障害と、より広い地域の障害では備えが異なる。"
      },
      {
        "id": "b",
        "text": "RTO・RPOを踏まえて復旧先や方式を選ぶ",
        "explanation": "正しい説明。必要な復旧時間と許容損失に合わせて設計する。"
      },
      {
        "id": "c",
        "text": "別リージョンへの復旧は、費用・複雑さも考慮して検討する",
        "explanation": "正しい説明。必要性と運用可能性を評価し、手順も試す。"
      },
      {
        "id": "d",
        "text": "複数AZなら、広域障害を含むあらゆる復旧計画が不要になる",
        "explanation": "誤り。AZ分散では対処しきれない共通障害もあり、想定に応じた復旧計画が必要。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "G05",
    "topic": "自治体・制度",
    "level": 1,
    "question": "地方公共団体情報システムの標準化について、誤っている説明は？",
    "answer": "「全国の自治体は、例外なく同一ベンダーの同一製品を使う制度である」が誤り。標準化基準への適合を求める取組であり、全国単一製品への統一ではない。",
    "explanation": "2026年11月確認時点の標準化対象は20事務。適合する製品・運用を選ぶ話と、単一製品への統一は別。",
    "example": "業務担当と必須機能・標準仕様との差分を確認する。",
    "pitfall": "製品が違えば標準化されていないと判断する。",
    "sources": [
      {
        "title": "デジタル庁 基幹業務システムの統一・標準化",
        "url": "https://www.digital.go.jp/policies/local_governments"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "標準化基準に適合するシステムへの移行を進める取組である",
        "explanation": "正しい説明。対象事務について標準化基準への適合を考える。"
      },
      {
        "id": "b",
        "text": "対象事務や適用する仕様・版を確認する必要がある",
        "explanation": "正しい説明。標準化の対象範囲と適用条件を確認して判断する。"
      },
      {
        "id": "c",
        "text": "基準への適合と、すべて同一製品を選ぶことは別である",
        "explanation": "正しい説明。特定の単一製品への統一そのものを意味しない。"
      },
      {
        "id": "d",
        "text": "全国の自治体は、例外なく同一ベンダーの同一製品を使う制度である",
        "explanation": "誤り。標準化基準への適合を求める取組であり、全国単一製品への統一ではない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "M03",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "月720時間のサービスで、対象停止時間が36分だった。除外する停止がない場合の稼働率として正しいものは？",
    "answer": "99.9167%（約99.917%）。",
    "explanation": "(720−0.6)÷720×100。除外する計画停止や測定単位はSLAで事前合意する。この数値は除外なしの設問条件。",
    "example": "目標99.9%ならこの条件では達成。他のSLA項目は別判定。",
    "pitfall": "36分を36時間として引く。",
    "sources": [
      {
        "title": "IPA 非機能要求グレード2018",
        "url": "https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/hikinou/ent03-b.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "約99.9167%",
        "explanation": "正しい。(720−0.6)÷720×100。除外する計画停止や測定単位はSLAで事前合意する。この数値は除外なしの設問条件。"
      },
      {
        "id": "b",
        "text": "95%",
        "explanation": "誤り。36分を36時間として計算するとこの値になる。時間の単位をそろえる。"
      },
      {
        "id": "c",
        "text": "99.95%",
        "explanation": "誤り。36分は0.36時間ではなく0.6時間である。"
      },
      {
        "id": "d",
        "text": "0.0833%",
        "explanation": "誤り。これはおおよその停止時間割合で、稼働率は100%からその割合を引く。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N08",
    "topic": "ネットワーク",
    "level": 1,
    "question": "VLANと通信制御について、誤っている説明はどれか。",
    "answer": "誤っているのは「VLAN番号が異なれば、ルーティング設定にかかわらずVLAN間通信は禁止される」。",
    "explanation": "VLANはL2のブロードキャスト範囲を分ける仕組み。部門間の通信可否はL3機器やファイアウォール等の設定で決まる。",
    "example": "窓口端末と管理端末の経路・許可ポートを併せてレビューする。",
    "pitfall": "VLAN番号を分けただけで業務上の分離が完成したと思う。",
    "sources": [
      {
        "title": "Cisco：Routing Between VLANs",
        "url": "https://www.cisco.com/en/US/docs/ios/lanswitch/configuration/guide/lsw_rtng_vlan_ovw.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "VLAN番号が異なれば、ルーティング設定にかかわらずVLAN間通信は禁止される",
        "explanation": "誤り。L3機器等でルーティングされれば通信できる。これが選ぶ対象。"
      },
      {
        "id": "b",
        "text": "VLANはL2のブロードキャスト範囲を分ける",
        "explanation": "正しい。ブロードキャストドメインを分離する仕組みである。"
      },
      {
        "id": "c",
        "text": "VLAN間の通信可否には、ルーティングやファイアウォールの設定が関係する",
        "explanation": "正しい。L2分離とL3以上の許可制御を分けて設計する。"
      },
      {
        "id": "d",
        "text": "部門をVLANで分けても、許可する通信を別途整理する必要がある",
        "explanation": "正しい。業務要件に沿った通信制御は、VLAN分割だけでは完成しない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "W11",
    "topic": "Windows・認証",
    "level": 1,
    "question": "高権限アカウントの扱いとして最も適切なものはどれか。",
    "answer": "正しい選択肢は「日常のメール・Web閲覧と管理作業で、アカウントや環境を分ける」。",
    "explanation": "高権限の資格情報を一般作業の脅威にさらさない。最小権限と管理経路の保護を組み合わせる。",
    "example": "問い合わせ確認は通常アカウント、変更作業は承認された管理環境で行う。",
    "pitfall": "管理者だから何でも同じアカウントで済ませる。",
    "sources": [
      {
        "title": "NCSC：Preventing lateral movement",
        "url": "https://www.ncsc.gov.uk/guidance/preventing-lateral-movement"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "管理者の人数を記録しなければ、攻撃者にも見つからないので安全になる",
        "explanation": "誤り。台帳や棚卸しを省くことは、権限の適正管理を妨げる。"
      },
      {
        "id": "b",
        "text": "日常のメール・Web閲覧と管理作業で、アカウントや環境を分ける",
        "explanation": "正しい。一般作業の脅威に高権限資格情報をさらさず、最小権限を組み合わせる。"
      },
      {
        "id": "c",
        "text": "利便性のため、日常作業もすべてドメイン管理者で行う",
        "explanation": "誤り。一般作業で侵害された場合の影響が広がりやすい。"
      },
      {
        "id": "d",
        "text": "強いパスワードなら、管理者権限で未知の添付ファイルを開いてよい",
        "explanation": "誤り。パスワード強度は、ログオン後の不正コード実行を防ぐ保証ではない。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "S12",
    "topic": "セキュリティ・復旧",
    "level": 1,
    "question": "暗号化と暗号学的ハッシュの役割の違いとして、正しいものはどれか。",
    "answer": "正しい選択肢は「暗号化は鍵による復号を想定するが、ハッシュは元データへ戻すための処理ではない」。",
    "explanation": "ハッシュ値は改変確認等に使う。値だけでは作成者の正当性は確認できず、比較元の信頼性も必要。",
    "example": "配布ファイルのハッシュは、信頼できる別経路の値と比較する。",
    "pitfall": "ハッシュ値を「復号して元データに戻す」と説明する。",
    "sources": [
      {
        "title": "NIST：Hash function",
        "url": "https://csrc.nist.gov/glossary/term/hash_function"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "暗号化は鍵による復号を想定するが、ハッシュは元データへ戻すための処理ではない",
        "explanation": "正しい。ハッシュは改変確認等に使うが、比較元の信頼性も必要。"
      },
      {
        "id": "b",
        "text": "ハッシュ値は、復号鍵があれば必ず元の文書へ戻せる",
        "explanation": "誤り。ハッシュは暗号文ではなく、復号する仕組みではない。"
      },
      {
        "id": "c",
        "text": "ハッシュ値が一致すれば、その値を誰が作ったかも必ず証明できる",
        "explanation": "誤り。値だけでは作成者の正当性まで確認できない。"
      },
      {
        "id": "d",
        "text": "暗号化は、必ずデータを短く圧縮するために行う",
        "explanation": "誤り。暗号化の目的と圧縮の目的を混同している。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "D02",
    "topic": "データベース",
    "level": 2,
    "question": "申請の部署IDに、部署マスターに存在しない非NULL値を登録させない仕組みは？",
    "answer": "外部キー制約。",
    "explanation": "子の参照値を親のキーに対応させ、参照整合性を守る。親を削除した場合の動作も設計する。",
    "example": "部署廃止時に申請履歴をどう残すか決める。",
    "pitfall": "連鎖削除を便利さだけで選ぶと履歴まで消える。",
    "sources": [
      {
        "title": "PostgreSQL: Constraints",
        "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "外部キー制約",
        "explanation": "正しい。子の参照値と親テーブルのキーを対応させ、参照整合性を守る。"
      },
      {
        "id": "b",
        "text": "部署ID列のNOT NULL制約だけ",
        "explanation": "誤り。未設定は防げても、存在しない番号の登録までは防げない。"
      },
      {
        "id": "c",
        "text": "部署ID列のUNIQUE制約だけ",
        "explanation": "誤り。同じ値の重複は制限できても、その値が部署マスターに存在するかは保証しない。"
      },
      {
        "id": "d",
        "text": "部署IDが正の整数であるというCHECK制約だけ",
        "explanation": "誤り。形式や範囲が正しくても、マスターに登録されていない番号はあり得る。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A10",
    "topic": "開発・アルゴリズム",
    "level": 1,
    "question": "単体テストと受入テストの主な確認対象の組合せとして正しいものは？",
    "answer": "単体は部品の動作、受入は利用目的・業務要件を満たすか。",
    "explanation": "計算関数が正しくても、職員の承認手順や住民の操作が成立するとは限らない。",
    "example": "料金計算の確認と、申請から交付までの業務確認を分ける。",
    "pitfall": "単体テスト成功を理由に利用課の受入確認を省く。",
    "sources": [
      {
        "title": "Microsoft: Testing strategy",
        "url": "https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/testing"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "単体：部品の動作／受入：業務要件や利用目的の充足",
        "explanation": "正しい。部品の正しさと、利用者の目的を満たすことは異なる観点である。"
      },
      {
        "id": "b",
        "text": "単体：複数システム間の接続／受入：個々の関数の分岐網羅",
        "explanation": "誤り。接続の確認は主に結合・システムテストの観点で、関数内部の分岐だけでは受入要件を評価できない。"
      },
      {
        "id": "c",
        "text": "単体：部品の動作／受入：開発者の設計書どおりかだけ",
        "explanation": "不十分。受入では、実際の利用目的や業務要件を満たすかを確認する。内部設計への適合だけでは足りない。"
      },
      {
        "id": "d",
        "text": "単体：本番全体の性能／受入：ソースコードの書式",
        "explanation": "誤り。全体性能や書式確認を、それぞれの主目的と取り違えている。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C04",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "クラウドの案を比較するとき、費用評価として最も適切なものは？",
    "answer": "通信、保存、バックアップ、監視、支援、運用なども含める。",
    "explanation": "利用量と費用要因を分け、業務別に見えるようにする。無料枠や一時的割引だけで判断しない。",
    "example": "通常月・繁忙月・データ増加後で比較する。",
    "pitfall": "従量課金なら予算超過は起きないと思う。",
    "sources": [
      {
        "title": "AWS: Expenditure and usage awareness",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "計算資源に加え、通信・保存・バックアップ・監視・支援・運用も見積もる",
        "explanation": "正しい。利用量の想定と費目をそろえ、継続利用に必要な総費用で比較する。"
      },
      {
        "id": "b",
        "text": "仮想サーバーの月額だけ比較する",
        "explanation": "誤り。通信量や運用支援など、サーバー以外の費用が大きくなる場合がある。"
      },
      {
        "id": "c",
        "text": "初月の無料枠だけで5年間の総費用を判断する",
        "explanation": "誤り。一時的な割引は継続利用時の費用を表さない。"
      },
      {
        "id": "d",
        "text": "安いサービス名を選べば、利用量の想定は不要である",
        "explanation": "誤り。従量料金では利用量や構成により費用が変わる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G08",
    "topic": "自治体・制度",
    "level": 1,
    "question": "自治体の個人情報保護ルールを確認する際の説明で、誤っているものは？",
    "answer": "「自団体条例だけ読めば、個人情報保護法の確認は不要である」が誤り。条例だけで判断せず、適用される法律上の規律を確認する。",
    "explanation": "全国共通ルールに加え団体の手続や運用が関係する。民間事業者向けの説明をそのまま当てはめない。",
    "example": "改修で取扱いが変わるときは個人情報担当と確認する。",
    "pitfall": "民間の「本人同意があればよい」を万能な根拠にする。",
    "sources": [
      {
        "title": "個人情報保護委員会 ガイドライン（行政機関等編）",
        "url": "https://www.ppc.go.jp/personalinfo/legal/guidelines_administrative/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "個人情報保護法の行政機関等への規律を確認する",
        "explanation": "正しい説明。自治体に適用される全国共通の規律を確認する。"
      },
      {
        "id": "b",
        "text": "法の範囲内の条例や団体の手続も確認する",
        "explanation": "正しい説明。全国共通ルールと、団体固有の手続・運用を整理する。"
      },
      {
        "id": "c",
        "text": "民間事業者向けの説明が、そのまま同じ形で適用されるとは限らない",
        "explanation": "正しい説明。行政機関等に関する規律との違いを確認する。"
      },
      {
        "id": "d",
        "text": "自団体条例だけ読めば、個人情報保護法の確認は不要である",
        "explanation": "誤り。条例だけで判断せず、適用される法律上の規律を確認する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "M04",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "SLAの「一次回答30分」と「復旧30分」に関する説明で、誤っているものは？",
    "answer": "「一次回答を30分以内に行えば、復旧も30分以内に完了したことになる」が誤り。応答の速さと復旧の速さは別の指標である。",
    "explanation": "開始点・対象時間帯・重要度区分を含めて合意する。連絡が早くても復旧が遅い場合はある。",
    "example": "電話受付、暫定回避、完全復旧を別々に追う。",
    "pitfall": "メール返信が来た時点で障害解決と記録する。",
    "sources": [
      {
        "title": "IPA APシラバス Ver.7.2（学習範囲）",
        "url": "https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "一次回答と復旧では、達成したとみなす状態が異なる",
        "explanation": "正しい説明。連絡を返すことと、サービスを使える状態へ戻すことは別。"
      },
      {
        "id": "b",
        "text": "計測の開始点や対象時間帯を合意する必要がある",
        "explanation": "正しい説明。受付や検知のどこから数えるか、営業時間だけか等を定める。"
      },
      {
        "id": "c",
        "text": "重要度に応じた目標や対応範囲を整理する",
        "explanation": "正しい説明。障害影響に応じて適用する条件を明確にする。"
      },
      {
        "id": "d",
        "text": "一次回答を30分以内に行えば、復旧も30分以内に完了したことになる",
        "explanation": "誤り。応答の速さと復旧の速さは別の指標である。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "N13",
    "topic": "ネットワーク",
    "level": 1,
    "question": "UDPの信頼性について正しい説明はどれか。",
    "answer": "正しい選択肢は「UDP自体は到着・順序・再送を保証せず、必要なら上位で補う」。",
    "explanation": "必要な再送や整列は上位プロトコル側で実装できる。「UDP利用＝信頼性がないアプリ」とは限らない。",
    "example": "DNSやリアルタイム通信の要件を、転送プロトコルだけで決めつけない。",
    "pitfall": "UDPならアプリも必ず再送しないと思う。",
    "sources": [
      {
        "title": "RFC 768：UDP",
        "url": "https://www.rfc-editor.org/info/rfc768/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "UDPは、欠落したデータを必ず自動再送する",
        "explanation": "誤り。再送保証はUDP自体の機能ではない。"
      },
      {
        "id": "b",
        "text": "UDPを使うアプリケーションは、再送処理を実装できない",
        "explanation": "誤り。上位のアプリケーション等が再送を実装することは可能。"
      },
      {
        "id": "c",
        "text": "UDPは送信順の到着を必ず保証する",
        "explanation": "誤り。順序の保証もUDP自体にはない。"
      },
      {
        "id": "d",
        "text": "UDP自体は到着・順序・再送を保証せず、必要なら上位で補う",
        "explanation": "正しい。UDPを使うアプリでも、上位プロトコルで再送や整列を実装できる。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "W02",
    "topic": "Windows・認証",
    "level": 2,
    "question": "KerberosのTGTとサービスチケットの役割として正しい組合せはどれか。",
    "answer": "正しい選択肢は「TGTはサービスチケットを得るため、サービスチケットは対象サービスでの認証に使う」。",
    "explanation": "KDCを介してチケットを取得し、同じパスワードを各サービスへ毎回提示せずに認証する。",
    "example": "ファイル共有だけ失敗するなら、ログオン全体とは別にサービス側を調べる。",
    "pitfall": "TGTを持てば、どのサービスにも無条件で入れると思う。",
    "sources": [
      {
        "title": "Microsoft：Kerberos authentication overview",
        "url": "https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "Kerberosの基本手順",
      "steps": [
        "KDCからTGTを取得",
        "TGTで利用先を申請",
        "サービスチケットを取得",
        "対象サービスへ提示"
      ],
      "caption": "初回の概略。取得済みチケットは有効期間内に再利用される。権限の確認は別に必要。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "TGTを持つ利用者は、すべてのサービスに無条件の管理者権限を得る",
        "explanation": "誤り。チケットによる認証と、サービスでの認可は別。"
      },
      {
        "id": "b",
        "text": "サービスチケットは、利用者の平文パスワードを各サービスへ渡すために使う",
        "explanation": "誤り。同じパスワードを毎回サービスに提示する方式とは異なる。"
      },
      {
        "id": "c",
        "text": "TGTはサービスチケットを得るため、サービスチケットは対象サービスでの認証に使う",
        "explanation": "正しい。KDCを介した取得と、対象サービスでの利用を区別する。"
      },
      {
        "id": "d",
        "text": "TGTは対象サービスへ直接提示する専用チケットで、サービスチケットはTGT取得に使う",
        "explanation": "誤り。役割が逆。TGTを使ってサービスチケットを取得し、対象サービスに利用する。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "S03",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "バックアップの成功ログに加えて、復元試験が必要な理由として最も適切なものはどれか。",
    "answer": "正しい選択肢は「必要な環境・手順・時間で実際に復旧できるかを確かめるため」。",
    "explanation": "復元試験で依存する設定、鍵、ソフトウェア、手順の不足を見つける。取得と復旧を一続きで管理する。",
    "example": "ファイル1個だけでなく、業務システムとしての再開も段階的に試験する。",
    "pitfall": "ファイルが取り出せれば業務も復旧したと思う。",
    "sources": [
      {
        "title": "NIST：バックアップの作成・維持・試験",
        "url": "https://csrc.nist.gov/pubs/other/2020/04/24/protecting-data-from-ransomware-and-other-data-los/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "復元試験をすれば、元データのバックアップを取得しなくてよくなるため",
        "explanation": "誤り。試験はバックアップ取得を代替しない。"
      },
      {
        "id": "b",
        "text": "必要な環境・手順・時間で実際に復旧できるかを確かめるため",
        "explanation": "正しい。鍵、設定、ソフトウェア等の不足は、取得成功ログだけでは分からない。"
      },
      {
        "id": "c",
        "text": "成功ログがあれば必ず復元できるので、試験は担当者の操作速度だけを競うため",
        "explanation": "誤り。取得成功と実際の復旧可能性は別であり、競争が目的ではない。"
      },
      {
        "id": "d",
        "text": "復元試験を一度行えば、その後の構成変更を管理しなくてよくなるため",
        "explanation": "誤り。変更で前提が変わるため、継続的な確認が必要。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "D03",
    "topic": "データベース",
    "level": 2,
    "question": "現在の部署名を申請行ごとに重複保存すると、部署改称時に起きやすい問題は？ 申請時点の名称を残す履歴要件はないものとする。",
    "answer": "一部だけ更新される更新異常。部署マスターへの分離で抑える。",
    "explanation": "正規化は同じ事実の重複管理を減らす設計。ただし申請時点の部署名を残す履歴要件は別に扱う。",
    "example": "現在名と当時の帳票表記を区別する。",
    "pitfall": "重複を全て削ると、必要な過去の状態まで失う。",
    "sources": [
      {
        "title": "Microsoft: Database normalization",
        "url": "https://learn.microsoft.com/en-us/previous-versions/troubleshoot/microsoft-365/microsoft-365-apps/access/database-normalization-description"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "一部の行だけ更新され、同じ部署の名称が食い違う更新異常",
        "explanation": "正しい。同じ事実を複数箇所で管理するため、更新漏れが起きやすい。"
      },
      {
        "id": "b",
        "text": "主キー制約があれば、すべての部署名が自動で同時更新される",
        "explanation": "誤り。行の一意性を守る主キーは、他行の名称の一括更新を保証しない。"
      },
      {
        "id": "c",
        "text": "名称を重複保存するだけで、データの更新漏れは必ずなくなる",
        "explanation": "誤り。管理箇所が増え、むしろ更新漏れの原因になり得る。"
      },
      {
        "id": "d",
        "text": "部署マスターに分離すると、参照整合性を考える必要がなくなる",
        "explanation": "誤り。分離後も部署IDの参照関係などを適切に設計する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A12",
    "topic": "開発・アルゴリズム",
    "level": 1,
    "question": "ソースコードの版管理に関する説明で、誤っているものは？",
    "answer": "「秘密鍵をコミットしても、最新版から消せば履歴にも残らない」が誤り。通常は過去のコミットに残る。秘密情報を入れず、漏えい時は鍵の失効等も検討する。",
    "explanation": "変更理由と対象の記録が原因調査や引継ぎに役立つ。秘密情報は履歴へ入れない。",
    "example": "検証用設定の差分をレビューする。",
    "pitfall": "版管理に入れればパスワードも安全と思う。",
    "sources": [
      {
        "title": "Git: About Version Control",
        "url": "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "過去の版との差分を確認できる",
        "explanation": "正しい説明。変更箇所を追跡し、影響範囲の検討に使える。"
      },
      {
        "id": "b",
        "text": "変更者や変更理由の記録が引継ぎに役立つ",
        "explanation": "正しい説明。意図が分かると原因調査や保守がしやすくなる。"
      },
      {
        "id": "c",
        "text": "必要に応じて過去の版を取り出せる",
        "explanation": "正しい説明。ただし本番に戻す際はデータ互換性なども別途確認する。"
      },
      {
        "id": "d",
        "text": "秘密鍵をコミットしても、最新版から消せば履歴にも残らない",
        "explanation": "誤り。通常は過去のコミットに残る。秘密情報を入れず、漏えい時は鍵の失効等も検討する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "C05",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "古いデータを自動削除する設定を導入する前に、最も適切な確認は？",
    "answer": "保存期間、復元要件、削除してよい対象と承認手順。",
    "explanation": "保存階層変更と削除は異なる。安価な階層は取得時間・費用の制約も利用頻度と照合する。",
    "example": "帳票の保存要件を確認してからライフサイクルを設定する。",
    "pitfall": "古いから不要とみなす。法令・契約・庁内規程は別途確認する。",
    "sources": [
      {
        "title": "AWS: Object lifecycle",
        "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "保存期間・復元要件・削除対象・承認手順を決める",
        "explanation": "正しい。業務上残す必要と、削除してよい条件を確認してから自動化する。"
      },
      {
        "id": "b",
        "text": "保存料金が下がるなら、保存期間の規定を確認せず削除する",
        "explanation": "誤り。費用だけで保存義務や業務上の必要性を無視できない。"
      },
      {
        "id": "c",
        "text": "低価格の保存階層への移動と完全削除を同じ操作として扱う",
        "explanation": "誤り。保存先の変更と、データを失う削除は別の判断である。"
      },
      {
        "id": "d",
        "text": "安い保存階層なら、取得時間や取得料金は確認しなくてよい",
        "explanation": "誤り。取出しに時間や追加料金がかかる方式がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G12",
    "topic": "自治体・制度",
    "level": 1,
    "question": "JPKIの利用者証明と電子署名について、誤っている説明は？",
    "answer": "「個人番号そのものを、他人に知られないログイン用の秘密として使う」が誤り。個人番号は認証用の秘密鍵やパスワードではない。電子証明書等の仕組みと区別する。",
    "explanation": "必要な保証に応じて使い分ける。電子証明書を使い、個人番号そのものを認証用秘密として使わない。",
    "example": "ログインできたことと特定の申請内容に署名したことを区別する。",
    "pitfall": "ログイン認証だけで申請文書への署名も済んだと扱う。",
    "sources": [
      {
        "title": "デジタル庁 公的個人認証サービス",
        "url": "https://www.digital.go.jp/policies/mynumber/private-business/jpki-introduction"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "利用者証明は、ログイン等で本人であることを確かめるために使う",
        "explanation": "正しい説明。利用者の本人性を確かめる用途がある。"
      },
      {
        "id": "b",
        "text": "電子署名は、電子文書の本人性や改ざんの有無の確認に使う",
        "explanation": "正しい説明。ログインと、特定文書に対する署名は保証する対象が異なる。"
      },
      {
        "id": "c",
        "text": "手続に必要な保証に応じて、利用する仕組みを選ぶ",
        "explanation": "正しい説明。認証と文書の署名が必要な範囲を分けて設計する。"
      },
      {
        "id": "d",
        "text": "個人番号そのものを、他人に知られないログイン用の秘密として使う",
        "explanation": "誤り。個人番号は認証用の秘密鍵やパスワードではない。電子証明書等の仕組みと区別する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "M05",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "ベンダーから「完成した」と連絡があった。検収に向けた対応として適切なものは？",
    "answer": "合意済みの成果物と受入基準に照らして確認する。",
    "explanation": "検収方法・期限・不具合の扱いを契約前から明確にする。モデル契約は参考資料であり、実際の契約や最新法令を確認する。",
    "example": "試験結果、構成図、運用手順、移行結果を一覧で確認する。",
    "pitfall": "本番が起動したことだけを完成条件にする。",
    "sources": [
      {
        "title": "IPA モデル取引・契約書 第二版（適用法改正に注意）",
        "url": "https://www.ipa.go.jp/digital/model/model20201222.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "visual": {
      "title": "受入れ確認の進め方の例",
      "steps": [
        "契約前に成果物・基準を合意",
        "成果物と試験結果を受領",
        "基準と照合・不備を記録",
        "是正確認と所定の検査・検収"
      ],
      "caption": "一般的な整理例。実際の順序・権限・期限は団体規程と契約に従う。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "合意済みの成果物と受入基準に照らして確認する",
        "explanation": "正しい。検収方法・期限・不具合の扱いを契約前から明確にする。モデル契約は参考資料であり、実際の契約や最新法令を確認する。"
      },
      {
        "id": "b",
        "text": "完成の連絡だけで、受入基準や成果物の確認を省略する",
        "explanation": "誤り。合意した内容が納められたか、確認できる証拠に基づいて判断する。"
      },
      {
        "id": "c",
        "text": "検収後に初めて、何を受け入れるかの基準を相談する",
        "explanation": "誤り。合否基準や不具合の扱いは契約前から明確にしておく。"
      },
      {
        "id": "d",
        "text": "担当者の印象だけで合格とし、確認結果を残さない",
        "explanation": "誤り。要求との対応や検証結果を記録し、判断根拠を追えるようにする。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N14",
    "topic": "ネットワーク",
    "level": 1,
    "question": "TLSの主な目的として正しいものはどれか。",
    "answer": "正しい選択肢は「通信相手の認証と、通信内容の機密性・完全性の保護」。",
    "explanation": "証明書によるサーバ認証が一般的。TLSは通信路を守るもので、端末侵害やアプリの認可不備までは解決しない。",
    "example": "電子申請のHTTPS接続でも、管理者権限や端末の安全性は別に確認する。",
    "pitfall": "鍵マークだけでサービス全体が安全と判断する。",
    "sources": [
      {
        "title": "RFC 8446：TLS 1.3の設計",
        "url": "https://datatracker.ietf.org/doc/rfc8446/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "アプリのすべての操作に正しいアクセス権を設定する",
        "explanation": "誤り。認可ロジックの不備はTLSだけでは解決できない。"
      },
      {
        "id": "b",
        "text": "通信先サービスが必ず停止しないようにする",
        "explanation": "誤り。TLSは可用性や無停止を保証するものではない。"
      },
      {
        "id": "c",
        "text": "通信相手の認証と、通信内容の機密性・完全性の保護",
        "explanation": "正しい。サーバ証明書による認証が一般的で、通信路の盗聴や改変への対策となる。"
      },
      {
        "id": "d",
        "text": "感染した端末からマルウェアを自動的に除去する",
        "explanation": "誤り。TLSは通信路の保護であり、端末の駆除機能ではない。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "W03",
    "topic": "Windows・認証",
    "level": 2,
    "question": "AD環境で大きな時計のずれが認証障害につながる理由として正しいものはどれか。",
    "answer": "正しい選択肢は「Kerberosが時刻を使って、認証情報の有効性等を確認するため」。",
    "explanation": "時刻同期は表示用だけでなく、認証とログ突合せの基盤。許容値は実際のポリシーを確認する。",
    "example": "拠点障害後のログオン失敗で、端末とDCの時刻・同期先を確認する。",
    "pitfall": "時計を手作業で直すだけで、同期元の不調を放置する。",
    "sources": [
      {
        "title": "Microsoft：Windows Time Service",
        "url": "https://learn.microsoft.com/en-us/windows-server/networking/windows-time-service/windows-time-service-top"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "時刻同期は画面表示だけに使い、認証障害とは無関係だから",
        "explanation": "誤り。時刻は認証やログの突合せにも関わる。"
      },
      {
        "id": "b",
        "text": "Kerberosが時刻を使って、認証情報の有効性等を確認するため",
        "explanation": "正しい。許容される時刻差は実際のポリシーを確認する。"
      },
      {
        "id": "c",
        "text": "時計がずれると、TCP/IP通信が例外なくすべて成立しなくなるため",
        "explanation": "誤り。すべてのIP通信が必ず止まるという説明ではなく、Kerberosの時刻検証に着目する。"
      },
      {
        "id": "d",
        "text": "ADの認証は、常にDNSのTTLと現在時刻が完全一致しないと失敗するため",
        "explanation": "誤り。DNSのTTLとの一致条件ではなく、Kerberosの時刻検証が関係する。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "S04",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "ランサムウェア等に備えるバックアップ設計について、誤っているものはどれか。",
    "answer": "誤っているのは「本番と同じ管理者資格情報だけでバックアップも削除できれば、同時被害を防げる」。",
    "explanation": "権限分離、オフライン保管、変更不能性などで同時被害を抑える。方式ごとの制限と復旧手順も確かめる。",
    "example": "バックアップ削除権限と通常サーバ管理権限の分離を点検する。",
    "pitfall": "保存先を別ディスクにするだけで攻撃から分離できると思う。",
    "sources": [
      {
        "title": "NIST：バックアップの作成・維持・試験",
        "url": "https://csrc.nist.gov/pubs/other/2020/04/24/protecting-data-from-ransomware-and-other-data-los/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "本番と同じ管理者資格情報だけでバックアップも削除できれば、同時被害を防げる",
        "explanation": "誤り。その資格情報の侵害で両方が破壊され得る。これが選ぶ対象。"
      },
      {
        "id": "b",
        "text": "本番とバックアップの管理権限を分離することを検討する",
        "explanation": "正しい。一つの資格情報の侵害が両方へ及ぶリスクを抑える。"
      },
      {
        "id": "c",
        "text": "オフライン保管や変更不能性を、方式の制約も含めて評価する",
        "explanation": "正しい。防御の仕組みと復旧可能性を両方確認する。"
      },
      {
        "id": "d",
        "text": "バックアップを保護するだけでなく、復旧手順も確かめる",
        "explanation": "正しい。残っているデータを必要時に復元できることが重要。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "D05",
    "topic": "データベース",
    "level": 2,
    "question": "申請件数が0の部署も一覧に残したい。部署テーブルと申請テーブルの結合方法として適切なものは？",
    "answer": "部署を左側とするLEFT JOIN。",
    "explanation": "INNER JOINは対応行のある組だけ返す。LEFT JOINは対応申請がなくても部署を残し、申請側をNULLにする。",
    "example": "部署別件数でゼロ件部署を落とさない。",
    "pitfall": "右側の条件をWHEREに置くと、NULLの行が除外される場合がある。",
    "sources": [
      {
        "title": "PostgreSQL: Joins",
        "url": "https://www.postgresql.org/docs/current/tutorial-join.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "部署を左側にしたLEFT JOIN",
        "explanation": "正しい。対応申請がなくても部署を残し、申請側の列をNULLにする。"
      },
      {
        "id": "b",
        "text": "部署と申請のINNER JOIN",
        "explanation": "誤り。対応する申請がない部署は結果から落ちる。"
      },
      {
        "id": "c",
        "text": "部署を右側にしたLEFT JOINで、申請行だけを残す",
        "explanation": "誤り。その指定では申請がない部署を必ず残す要件を満たさない。"
      },
      {
        "id": "d",
        "text": "部署と申請のCROSS JOINを、そのまま部署別一覧とする",
        "explanation": "誤り。全組合せを作るため、部署と申請の正しい対応にならない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A02",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "外側と内側のループがそれぞれn回動き、内側で毎回1回比較する。nを10倍にしたときの比較回数として正しいものは？",
    "answer": "n²回。件数が10倍なら比較は100倍。",
    "explanation": "内側が毎回n回動く二重ループの場合。実行時間の定数要因とは分けて考える。",
    "example": "千件で動いた照合が十万件で極端に遅くなる理由を見抜く。",
    "pitfall": "サーバーの小幅な高速化だけでデータ増加を吸収できると即断する。",
    "sources": [
      {
        "title": "NIST: Big-O notation",
        "url": "https://xlinux.nist.gov/dads/HTML/bigOnotation.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "100倍になる",
        "explanation": "正しい。比較回数はn×nなので、(10n)²/n²=100倍になる。"
      },
      {
        "id": "b",
        "text": "10倍になる",
        "explanation": "誤り。一重ループなら10倍だが、ここでは両方のループ回数が10倍になる。"
      },
      {
        "id": "c",
        "text": "20倍になる",
        "explanation": "誤り。二つのループの回数は足さず、掛け合わせる。"
      },
      {
        "id": "d",
        "text": "変わらない",
        "explanation": "誤り。各反復で比較するため、入力件数の増加が比較回数を増やす。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C06",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "Webサーバーを増設しても応答が速くならない。次の調査として最も適切なものは？",
    "answer": "DBや外部APIなど共有する処理先のボトルネック。",
    "explanation": "最も詰まる箇所が全体を制約する。Web層を増やすとDB接続数が増えることもある。",
    "example": "応答時間を区間別に計測し、待ちの場所を特定する。",
    "pitfall": "WebサーバーのCPUだけを監視する。",
    "sources": [
      {
        "title": "Microsoft: Queue-Based Load Leveling",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "DB・外部APIなど共有する処理先の待ち時間や上限を測る",
        "explanation": "正しい。最も詰まる箇所が全体を制約し、Web増設でDB接続数だけ増えることもある。"
      },
      {
        "id": "b",
        "text": "計測せずにWebサーバーだけを際限なく増やす",
        "explanation": "誤り。律速箇所が別なら、費用と共有先への負荷を増やすだけになり得る。"
      },
      {
        "id": "c",
        "text": "Web層を増やしたので、DB接続数の増加は調査対象から外す",
        "explanation": "誤り。各Webサーバーの接続プールが増え、DB側の接続上限や負荷に影響する場合がある。"
      },
      {
        "id": "d",
        "text": "WebサーバーのCPU使用率が低ければ、システム全体に待ちはないとする",
        "explanation": "誤り。DBや外部APIを待っている間、Web側CPUの使用率が低いこともある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G14",
    "topic": "自治体・制度",
    "level": 1,
    "question": "電子申請フォームの必須項目を赤色だけで示している。改善として適切なものは？",
    "answer": "色の違いを認識しにくい利用者に伝わらない。文字や適切なラベルでも示す。",
    "explanation": "見た目だけでなく支援技術・キーボード操作でも情報が伝わる設計が必要。",
    "example": "「氏名（必須）」をラベルにし、エラー理由も文で表示する。",
    "pitfall": "アクセシビリティを文字サイズ変更機能だけで済ませる。",
    "sources": [
      {
        "title": "デジタル庁 デザインシステムの活用例",
        "url": "https://digital-agency-news.digital.go.jp/articles/2025-10-14"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "「必須」の文字や適切なラベルも用い、色だけに情報を依存させない",
        "explanation": "正しい。見た目だけでなく支援技術・キーボード操作でも情報が伝わる設計が必要。"
      },
      {
        "id": "b",
        "text": "赤色をさらに鮮やかにすれば、色だけの表示のままでよい",
        "explanation": "誤り。色の認識が難しい利用者には、彩度を上げるだけでは情報が伝わらない。"
      },
      {
        "id": "c",
        "text": "入力後にエラーを出せば、事前のラベルは不要である",
        "explanation": "誤り。入力前にも要件を理解できるよう、明確なラベルや説明を用意する。"
      },
      {
        "id": "d",
        "text": "マウス操作ができれば、キーボードや支援技術の確認は省略する",
        "explanation": "誤り。さまざまな操作方法で必要な情報を取得・入力できることを確認する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M06",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "契約後、業務課から機能追加の希望が出た。着手前の対応として最も適切なものは？",
    "answer": "先に影響を評価し、変更の承認と契約・計画への反映を行う。",
    "explanation": "小さな変更でも費用・納期・試験範囲に波及する。承認前の口頭依頼は認識差を生む。",
    "example": "追加項目の帳票・外部連携・移行データへの影響を確認する。",
    "pitfall": "「ついでに」の依頼を議事録や見積りに残さない。",
    "sources": [
      {
        "title": "IPA モデル取引・契約書 第二版（適用法改正に注意）",
        "url": "https://www.ipa.go.jp/digital/model/model20201222.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "visual": {
      "title": "変更要求をそのまま実装しない",
      "steps": [
        "追加要望を記録",
        "費用・納期・品質への影響を評価",
        "所定の権限者が採否を判断",
        "契約・計画・試験へ反映"
      ],
      "caption": "変更管理の整理例。承認なしの実装依頼を避ける。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "費用・納期等への影響を評価し、承認を得て契約や計画に反映する",
        "explanation": "正しい。小さな変更でも費用・納期・試験範囲に波及する。承認前の口頭依頼は認識差を生む。"
      },
      {
        "id": "b",
        "text": "小さな希望なら、費用・納期を調べず口頭で実装を依頼する",
        "explanation": "誤り。小さな変更でも試験や契約範囲へ影響することがある。"
      },
      {
        "id": "c",
        "text": "まず本番へ実装し、費用と契約変更は完成後に整理する",
        "explanation": "誤り。未承認の実装は認識差や手戻りにつながる。"
      },
      {
        "id": "d",
        "text": "希望内容を受けた人だけで判断し、他の関係者への影響確認を省く",
        "explanation": "誤り。業務、費用、納期、保守等の関係者を含めて影響を評価する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N01",
    "topic": "ネットワーク",
    "level": 2,
    "question": "IPv4の192.168.10.64/26で、通常の端末に割り当てられる範囲と個数として正しいものはどれか。",
    "answer": "正しい選択肢は「192.168.10.65～126、62個」。",
    "explanation": "ホスト部は6ビットなので64個。先頭のネットワークアドレスと末尾のブロードキャストを除く。/31・/32などの例外とは区別する。",
    "example": "課の端末が55台でも、ゲートウェイやプリンタ分を加えて足りるか計算する。",
    "pitfall": "64台全部を端末に使えると思う。",
    "sources": [
      {
        "title": "RFC 4632：CIDR",
        "url": "https://www.rfc-editor.org/info/rfc4632/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "サブネット計算",
      "steps": [
        "32 − 26 = 6ビット",
        "2の6乗 = 64個",
        "先頭と末尾を除く",
        "利用可能は62台分"
      ],
      "caption": "一般的なIPv4端末用サブネットの例。ゲートウェイ等にもアドレスが必要。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "192.168.10.64～127、64個",
        "explanation": "誤り。先頭の.64と末尾の.127は、このサブネットで通常の端末に割り当てない。"
      },
      {
        "id": "b",
        "text": "192.168.10.65～127、63個",
        "explanation": "誤り。.127はブロードキャストアドレスなので除く。"
      },
      {
        "id": "c",
        "text": "192.168.10.1～254、254個",
        "explanation": "誤り。これは192.168.10.0/24の場合の範囲で、/26の計算ではない。"
      },
      {
        "id": "d",
        "text": "192.168.10.65～126、62個",
        "explanation": "正しい。ホスト部6ビットで64個から、ネットワークとブロードキャストの2個を除く。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "W04",
    "topic": "Windows・認証",
    "level": 2,
    "question": "AD参加端末のDNS参照先を一般の外部DNSだけに変更する際の懸念として、最も適切なものはどれか。",
    "answer": "正しい選択肢は「DC探索に必要な内部のSRVレコード等を解決できなくなる可能性がある」。",
    "explanation": "ADはSRVレコード等でサービスを探す。Web閲覧の名前解決だけ成功しても、AD用DNSが正常とは限らない。",
    "example": "ログオン遅延時は端末設定と内部SRVの解決結果を確認する。",
    "pitfall": "インターネットが引けるDNSならADでも使えると思う。",
    "sources": [
      {
        "title": "Microsoft：SRVレコードの確認",
        "url": "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/verify-srv-dns-records-have-been-created"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "DC探索に必要な内部のSRVレコード等を解決できなくなる可能性がある",
        "explanation": "正しい。Webサイトの名前解決が成功しても、AD用の名前解決が正常とは限らない。"
      },
      {
        "id": "b",
        "text": "外部DNSを使えば、内部のAD情報も必ず同じように取得できる",
        "explanation": "誤り。内部DNSの情報が外部DNSで提供されるとは限らない。"
      },
      {
        "id": "c",
        "text": "DNSはWeb閲覧だけに必要で、ADの動作には関係しない",
        "explanation": "誤り。ADはDNSを使ってドメインコントローラー等を探索する。"
      },
      {
        "id": "d",
        "text": "外部DNSに変えると、ADのアクセス権が自動で再設定される",
        "explanation": "誤り。DNS参照先の変更は、認可設定の修復手段ではない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "S07",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "平時に遮断・業務停止・公表等の判断権限を決めておく目的として、最も適切なものはどれか。",
    "answer": "正しい選択肢は「緊急時の判断遅れや、権限を越えた対応を減らす」。",
    "explanation": "技術対応だけでなく、業務継続と組織内外の連絡も必要。具体的な報告先・期限は自組織の規程と制度を確認する。",
    "example": "休日の代行者と、通常ネットワークが使えない場合の連絡先を確認する。",
    "pitfall": "情シス担当者だけで全ての対外説明を決める。",
    "sources": [
      {
        "title": "NIST SP 800-61 Rev.3：インシデント対応",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "計画を作れば、発生したインシデントの事実確認は不要になる",
        "explanation": "誤り。計画は判断を支援するが、実際の状況確認を置き換えない。"
      },
      {
        "id": "b",
        "text": "緊急時の判断遅れや、権限を越えた対応を減らす",
        "explanation": "正しい。技術対応と業務・組織内外の連絡をつなぐため、役割を明確にする。"
      },
      {
        "id": "c",
        "text": "技術担当者が、組織のルールに関係なくすべてを独断で公表できるようにする",
        "explanation": "誤り。権限と指揮系統を明確にすることが目的であり、独断を認めることではない。"
      },
      {
        "id": "d",
        "text": "判断者を決めれば、緊急連絡先の整備は不要になる",
        "explanation": "誤り。役割だけでなく、実際に連絡が届く手段も必要。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "D06",
    "topic": "データベース",
    "level": 2,
    "question": "部署テーブルdを左、申請テーブルaを右にLEFT JOINし、部署別の申請数を集計する。a.申請IDは元テーブルでNULL不可。申請ゼロの部署を0件と数える集計は？",
    "answer": "COUNT(a.申請ID)。LEFT JOINで生成されたNULLは数えない。",
    "explanation": "COUNT(*)は部署だけで残った行も数える。COUNT(列)はNULLを数えないため、申請ゼロを0件にできる。",
    "example": "ゼロ件部署が1件になったら集計式を確認する。",
    "pitfall": "ゼロ件のテストデータを用意しない。",
    "sources": [
      {
        "title": "PostgreSQL: Aggregate functions",
        "url": "https://www.postgresql.org/docs/current/tutorial-agg.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "COUNT(a.申請ID)",
        "explanation": "正しい。対応申請がない行では申請IDがNULLとなり、COUNT(列)はそれを数えない。"
      },
      {
        "id": "b",
        "text": "COUNT(*)",
        "explanation": "誤り。LEFT JOINで部署だけ残った行も1行として数える。"
      },
      {
        "id": "c",
        "text": "COUNT(d.部署ID)",
        "explanation": "誤り。左側の部署IDは対応申請がなくても残るので、申請ゼロの部署の残存行も数えてしまう。"
      },
      {
        "id": "d",
        "text": "COUNT(1)",
        "explanation": "誤り。定数1はNULLでないため、申請がない部署の残存行も数える。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A03",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "二分探索に関する説明で正しいものは？ 1,024件を毎回ちょうど半分に絞る場合を考える。",
    "answer": "探索順に整列済みであること。半減10回で1件。",
    "explanation": "1,024=2の10乗。実際の比較回数は実装と発見位置で異なり、半減回数と同一とは限らない。",
    "example": "整列済みの受付番号から探す。",
    "pitfall": "未整列の配列に適用する。",
    "sources": [
      {
        "title": "NIST: Binary search",
        "url": "https://xlinux.nist.gov/dads/HTML/binarySearch.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "候補を半分に絞る",
      "steps": [
        "1,024件",
        "半減5回：32件",
        "さらに半減5回：1件"
      ],
      "caption": "候補数の模式図。実際の比較回数は実装や発見位置で異なる。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "探索順に整列済みで、半減10回で候補が1件になる",
        "explanation": "正しい。1,024=2¹⁰なので10回の半減で1になる。実際の比較回数は実装や発見位置でも変わる。"
      },
      {
        "id": "b",
        "text": "未整列でも、半減10回で必ず目的の値を特定できる",
        "explanation": "誤り。どちらの半分を捨てられるか判断するには、探索順の整列が前提になる。"
      },
      {
        "id": "c",
        "text": "整列済みなら、半減5回で候補が1件になる",
        "explanation": "誤り。1,024÷2⁵=32で、まだ32件残る。"
      },
      {
        "id": "d",
        "text": "整列済みでも、候補を1件にするには1,024回半減する",
        "explanation": "誤り。線形に一件ずつ調べるのではなく、候補数を半分に減らす。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C07",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "一時的に大量の申請が届くが、後続処理は一定速度でしか動かせない。負荷を平準化する設計として最も適切なものは？",
    "answer": "キューを挟み、受付と処理を非同期に分ける。",
    "explanation": "負荷の山をならせるが、待ち時間と未処理残数が生じる。受付済みと完了を区別して滞留を監視する。",
    "example": "添付検査を順次処理し、結果待ちと表示する。",
    "pitfall": "キューに入れば業務も完了と表示する。",
    "sources": [
      {
        "title": "Microsoft: Queue-Based Load Leveling",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "受付と処理の間に待ち行列",
      "steps": [
        "申請を受け付ける",
        "キューに保存する",
        "処理担当が順次取り出す",
        "検査・処理結果を記録する"
      ],
      "caption": "受付済みと処理完了は別。未処理残数と待ち時間を監視する。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "受付と後続処理の間にキューを置き、非同期に処理する",
        "explanation": "正しい。待ち行列で負荷をならす。ただし受付済みと処理完了を区別し、滞留を監視する。"
      },
      {
        "id": "b",
        "text": "受付画面が応答した時点で、後続処理も必ず完了したと扱う",
        "explanation": "誤り。受付と完了は別の状態であり、非同期処理では特に区別が必要。"
      },
      {
        "id": "c",
        "text": "全要求を待ち時間なしで後続処理へ送り続ければ上限は消える",
        "explanation": "誤り。処理能力の制約は消えず、過負荷や失敗を増やし得る。"
      },
      {
        "id": "d",
        "text": "未処理件数を監視しないことで、待ち行列を解消する",
        "explanation": "誤り。見えなくなるだけで滞留は解消されない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G16",
    "topic": "自治体・制度",
    "level": 1,
    "question": "オープンデータの提供に関する説明で、誤っているものは？",
    "answer": "「PDFをWebに掲載すれば、内容や利用条件にかかわらず必ずオープンデータになる」が誤り。単に公開したことだけでは、機械判読性や二次利用条件等を満たしたとは言えない。",
    "explanation": "公開と再利用しやすさは別。表なら構造化データを用意し、更新日や項目定義も添える。",
    "example": "施設一覧をCSVでも提供し、利用規約と更新担当を明示する。",
    "pitfall": "閲覧できる資料なら自由に転載できると扱う。",
    "sources": [
      {
        "title": "デジタル庁 オープンデータ",
        "url": "https://www.digital.go.jp/resources/open_data"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "機械で扱いやすい形式かを確認する",
        "explanation": "正しい説明。掲載した情報を再利用できる形で提供する観点が重要。"
      },
      {
        "id": "b",
        "text": "二次利用条件を分かるようにする",
        "explanation": "正しい説明。何がどの条件で利用できるか明示する。"
      },
      {
        "id": "c",
        "text": "項目の意味や更新日を添えると再利用しやすくなる",
        "explanation": "正しい説明。形式だけでなく、データの解釈や鮮度も重要。"
      },
      {
        "id": "d",
        "text": "PDFをWebに掲載すれば、内容や利用条件にかかわらず必ずオープンデータになる",
        "explanation": "誤り。単に公開したことだけでは、機械判読性や二次利用条件等を満たしたとは言えない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "M07",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "RFIとRFPの主な目的の違いとして、正しい説明は？",
    "answer": "RFIは情報収集、RFPは要求や条件を示して提案を求める文書。",
    "explanation": "市場で実現できる範囲を知ってから提案条件を整える。名称だけで法定の入札手続が決まるわけではない。",
    "example": "対応可能な構成をRFIで調べ、必要な運用条件をRFPへ記す。",
    "pitfall": "情報提供への回答をそのまま契約上の保証とみなす。",
    "sources": [
      {
        "title": "IPA APシラバス Ver.7.2（学習範囲）",
        "url": "https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "調達前の情報を段階的に具体化",
      "steps": [
        "RFI：市場の情報を集める",
        "必要な要求・条件を整理",
        "RFP：提案を求める",
        "所定の調達手続で比較・決定"
      ],
      "caption": "よくある流れの例。RFI実施が常に必須という意味ではない。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "RFIは情報収集、RFPは要求や条件を示して提案を求める",
        "explanation": "正しい。市場で実現できる範囲を知ってから提案条件を整える。名称だけで法定の入札手続が決まるわけではない。"
      },
      {
        "id": "b",
        "text": "RFIは検収の通知、RFPは支払済みを確認する通知である",
        "explanation": "誤り。いずれも主に調達の検討・提案段階で使うもので、検収や支払通知ではない。"
      },
      {
        "id": "c",
        "text": "RFIは提案要求、RFPは情報収集であり、一般的な用途が逆である",
        "explanation": "誤り。一般にはRFIが情報提供依頼、RFPが提案依頼である。"
      },
      {
        "id": "d",
        "text": "RFPという名前の文書を作れば、法定の調達手続は自動で完了する",
        "explanation": "誤り。文書の名称と、適用される入札・契約手続は別に確認する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N02",
    "topic": "ネットワーク",
    "level": 2,
    "question": "宛先192.168.10.20に対し、利用可能な192.168.0.0/16と192.168.10.0/24の経路がある。通常の経路選択で優先するものはどれか。",
    "answer": "正しい選択肢は「/24の経路」。",
    "explanation": "最長プレフィックス一致で経路を選ぶ。同じ長さの候補間で、機器の経路優先度やメトリック等が使われる。",
    "example": "庁内全体向け経路より、特定拠点向け経路が優先される理由を確認する。",
    "pitfall": "異なるプレフィックス長でもメトリックだけで比較する。",
    "sources": [
      {
        "title": "RFC 4632：CIDR",
        "url": "https://www.rfc-editor.org/info/rfc4632/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "メトリックが小さいほうを、プレフィックス長より先に選ぶ",
        "explanation": "誤り。通常はまず最長プレフィックス一致を適用する。同じ長さの候補で優先度等を比較する。"
      },
      {
        "id": "b",
        "text": "必ずデフォルトルートを選ぶ",
        "explanation": "誤り。デフォルトルートより具体的に一致する利用可能な経路を優先する。"
      },
      {
        "id": "c",
        "text": "/24の経路",
        "explanation": "正しい。宛先に一致する経路のうち、プレフィックスが最も長い経路を選ぶ。"
      },
      {
        "id": "d",
        "text": "/16の経路",
        "explanation": "誤り。広い範囲に一致することは優先理由にならない。/24のほうが具体的である。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "W06",
    "topic": "Windows・認証",
    "level": 2,
    "question": "GPOを編集したが端末に反映されたか分からない。確認方法として最も適切なものはどれか。",
    "answer": "正しい選択肢は「gpresult等で、対象端末・対象利用者への実際の適用結果を確認する」。",
    "explanation": "管理側の意図と端末の結果を分ける。適用・除外されたGPOや対象ユーザーを確認し、原因を絞る。",
    "example": "障害端末と正常端末の結果を比較する。出力のユーザー名等は適切に扱う。",
    "pitfall": "gpupdateの実行成功だけで目的の設定が反映したと判断する。",
    "sources": [
      {
        "title": "Microsoft：gpresult",
        "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/gpresult"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "pingが成功すれば、すべてのGPOが正しく適用されたと判断する",
        "explanation": "誤り。疎通確認だけではポリシーの適用結果は分からない。"
      },
      {
        "id": "b",
        "text": "原因を調べず、すべてのGPOを削除して作り直す",
        "explanation": "誤り。影響が大きく、適用・除外の状況を確認する調査になっていない。"
      },
      {
        "id": "c",
        "text": "gpresult等で、対象端末・対象利用者への実際の適用結果を確認する",
        "explanation": "正しい。管理側の設定意図と、端末側の適用結果を分けて確認する。"
      },
      {
        "id": "d",
        "text": "管理画面で値が保存されていれば、全端末への反映完了と判断する",
        "explanation": "誤り。設定の保存と各端末での適用完了は別。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "S08",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "複数機器のログを突き合わせる際、時刻やタイムゾーンの不一致で生じる主な問題はどれか。",
    "answer": "正しい選択肢は「別機器の事象を、正しい順序で対応付けにくくなる」。",
    "explanation": "時刻同期、タイムゾーン、保存形式を把握する。原本の時刻表記を残し、変換方法を明確にする。",
    "example": "端末、認証、FWログを同じ基準で並べ、侵入から操作までを追う。",
    "pitfall": "UTCのログを日本時間とみなして9時間ずれた説明をする。",
    "sources": [
      {
        "title": "NIST SP 800-92：ログ管理",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "別機器の事象を、正しい順序で対応付けにくくなる",
        "explanation": "正しい。同期、タイムゾーン、保存形式を把握し、変換方法を明確にする。"
      },
      {
        "id": "b",
        "text": "ログのファイル名が一致していれば、時刻の違いは分析へ影響しない",
        "explanation": "誤り。ファイル名だけでは、事象の前後関係を補正できない。"
      },
      {
        "id": "c",
        "text": "時刻が違うログは、原本を残さず全部同じ時刻に書き換えるべきである",
        "explanation": "誤り。原本の表記を保ち、解析時の変換を明示することが重要。"
      },
      {
        "id": "d",
        "text": "UTCで保存されたログは、日本時間へ対応付けられない",
        "explanation": "誤り。タイムゾーン等を把握すれば変換できる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "D07",
    "topic": "データベース",
    "level": 2,
    "question": "2026年分の申請を部署別に集計し、10件以上の部署を出す。WHEREとHAVINGの使い分けとして正しいものは？",
    "answer": "WHEREで年を絞り、GROUP BY後の件数をHAVINGで絞る。",
    "explanation": "WHEREは集計前の行、HAVINGは集計後のグループが対象。年は開始日以上・翌年開始日未満で表せる。",
    "example": "HAVING COUNT(*) >= 10で件数を絞る。",
    "pitfall": "集計件数の条件をWHEREに直接置く。",
    "sources": [
      {
        "title": "PostgreSQL: Aggregate functions",
        "url": "https://www.postgresql.org/docs/current/tutorial-agg.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "集計条件を置く順番",
      "steps": [
        "FROM：申請データを読む",
        "WHERE：2026年分に絞る",
        "GROUP BY：部署別にまとめる",
        "HAVING：10件以上を残す"
      ],
      "caption": "SQLの理解用の論理順序。DB内部の物理的な実行順序とは異なる。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "WHEREで年を絞り、GROUP BY後の件数をHAVINGで絞る",
        "explanation": "正しい。行の条件と、集計後のグループの条件を分ける。"
      },
      {
        "id": "b",
        "text": "WHERE COUNT(*) >= 10だけで年と件数を両方絞る",
        "explanation": "誤り。集計件数の条件を通常のWHEREに直接置けず、年の条件も別に必要。"
      },
      {
        "id": "c",
        "text": "HAVINGを使えば、部署別集計のGROUP BYは常に不要になる",
        "explanation": "誤り。部署ごとにまとめるためのGROUP BYは別の役割を持つ。"
      },
      {
        "id": "d",
        "text": "ORDER BYで10件未満の部署を除外する",
        "explanation": "誤り。ORDER BYは並び替えであり、グループを除外する条件ではない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A06",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "ハッシュ表に関する説明で、誤っているものは？",
    "answer": "「ハッシュ値が同じなら、元のキーも必ず同じである」が誤り。同じハッシュ値を持つ異なるキーがあり得る。ハッシュ値だけで同一性を確定しない。",
    "explanation": "ハッシュ値だけで元のキーは一意に決まらない。キー比較などで区別する。",
    "example": "申請番号をキーに高速検索する仕組みを理解する。",
    "pitfall": "ハッシュ値一致で元データも同一と断定する。",
    "sources": [
      {
        "title": "NIST: Hash table",
        "url": "https://xlinux.nist.gov/dads/HTML/hashtab.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "異なるキーが同じ位置に対応することがある",
        "explanation": "正しい説明。ハッシュ値の衝突は設計時に想定する。"
      },
      {
        "id": "b",
        "text": "衝突時に元のキーを比較して識別する方法がある",
        "explanation": "正しい説明。同じ位置に対応しても、キー比較などで区別できる。"
      },
      {
        "id": "c",
        "text": "衝突を処理する方式を用意する必要がある",
        "explanation": "正しい説明。連鎖法や別の空き位置を探す方式などを使う。"
      },
      {
        "id": "d",
        "text": "ハッシュ値が同じなら、元のキーも必ず同じである",
        "explanation": "誤り。同じハッシュ値を持つ異なるキーがあり得る。ハッシュ値だけで同一性を確定しない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "C08",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "申請状況をキャッシュして表示する設計について、誤っているものは？",
    "answer": "「キャッシュを置けば、常に最新の状況が表示される」が誤り。キャッシュの存在自体は最新性を保証せず、古い状態を返す場合がある。",
    "explanation": "速度と最新性にはトレードオフがある。どれだけ古い表示を許せるか業務で決める。",
    "example": "承認直後にキャッシュを無効化し最新を読み直す。",
    "pitfall": "キャッシュを正本として扱い、元データとのずれを見ない。",
    "sources": [
      {
        "title": "Microsoft: Cache-Aside",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "更新直後に、キャッシュが古い状況を返すことがある",
        "explanation": "正しい説明。元データ更新とキャッシュ更新は一致するとは限らない。"
      },
      {
        "id": "b",
        "text": "業務上どの程度の古さを許容できるかを決める",
        "explanation": "正しい説明。速度だけでなく情報の最新性の要件を定める。"
      },
      {
        "id": "c",
        "text": "失効や再取得の方針を用意する",
        "explanation": "正しい説明。更新通知や有効期限等により古いデータを扱う方針が必要。"
      },
      {
        "id": "d",
        "text": "キャッシュを置けば、常に最新の状況が表示される",
        "explanation": "誤り。キャッシュの存在自体は最新性を保証せず、古い状態を返す場合がある。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "G21",
    "topic": "自治体・制度",
    "level": 1,
    "question": "UnicodeとUTF-8の関係について、正しい説明は？",
    "answer": "Unicodeは文字を扱う規格で、UTF-8はその文字をバイト列に表す方式の一つ。",
    "explanation": "同じ文字でもUTF-8とUTF-16では保存されるバイト列が異なる。送信側と受信側で符号化方式を合わせる必要がある。",
    "example": "CSVの文字化けを調べるとき、文字の見た目だけでなく出力と読込みの方式を確認する。",
    "pitfall": "Unicode対応ならどんな設定でも文字化けしないと思う。",
    "sources": [
      {
        "title": "Unicode Consortium UTF FAQ",
        "url": "https://www.unicode.org/faq/utf_bom.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "文字と保存形式は別の層",
      "steps": [
        "文字・符号位置を定める（Unicode）",
        "符号化する（例：UTF-8）",
        "バイト列を送る",
        "同じ方式で復号して表示"
      ],
      "caption": "表示には対応フォントも必要。符号化方式をそろえるだけで全ての表示問題が解決するわけではない。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "Unicodeは文字を扱う規格、UTF-8はその文字の符号化方式の一つ",
        "explanation": "正しい。同じ文字でもUTF-8とUTF-16では保存されるバイト列が異なる。送信側と受信側で符号化方式を合わせる必要がある。"
      },
      {
        "id": "b",
        "text": "UnicodeとUTF-8は同じ保存方式の別名である",
        "explanation": "誤り。Unicodeは文字を扱う規格で、UTF-8は符号化方式の一つ。"
      },
      {
        "id": "c",
        "text": "UTF-8とUTF-16は、同じ文字なら必ず同じバイト列になる",
        "explanation": "誤り。符号化方式が違えば同じ文字でも表現するバイト列は異なり得る。"
      },
      {
        "id": "d",
        "text": "Unicodeを使えば、送受信側で符号化方式を合わせる必要はない",
        "explanation": "誤り。バイト列を正しく解釈するには符号化方式をそろえる必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M08",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "契約終了時のデータ返却や移行に関する説明で、誤っているものは？",
    "answer": "「返却条件は終了直前まで決めなくても、同じ条件で必ず移行できる」が誤り。費用・形式・作業期間が不明なままでは、更新時に移行が難しくなる。",
    "explanation": "移行できないデータは乗換えを難しくする。契約の出口まで考えて比較する。",
    "example": "項目定義付きの機械可読形式で取得できるか確認する。",
    "pitfall": "「データは自治体のもの」と書けば無償で移行できると思う。",
    "sources": [
      {
        "title": "IPA モデル取引・契約書 第二版（適用法改正に注意）",
        "url": "https://www.ipa.go.jp/digital/model/model20201222.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "返却対象の項目や添付・履歴の範囲を確認する",
        "explanation": "正しい説明。一部だけ出力できても、業務に必要な全体を移せるとは限らない。"
      },
      {
        "id": "b",
        "text": "出力形式、費用、期間を調達段階で確認する",
        "explanation": "正しい説明。出口条件を含めて比較し、乗換えの障壁を把握する。"
      },
      {
        "id": "c",
        "text": "返却後のデータ消去方法も検討する",
        "explanation": "正しい説明。契約終了後の残存データの取扱いを明らかにする。"
      },
      {
        "id": "d",
        "text": "返却条件は終了直前まで決めなくても、同じ条件で必ず移行できる",
        "explanation": "誤り。費用・形式・作業期間が不明なままでは、更新時に移行が難しくなる。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "N06",
    "topic": "ネットワーク",
    "level": 2,
    "question": "DNSの接続先を切り替えた直後、一部の利用者だけ旧サーバへ接続している。説明として最も適切なものはどれか。",
    "answer": "正しい選択肢は「再帰リゾルバ等に、旧応答のキャッシュが残っている場合がある」。",
    "explanation": "TTLはキャッシュの有効期間に関係する。切替え直前にTTLを短くしても、既存キャッシュの期限をさかのぼって短縮できない。",
    "example": "サーバ移行は事前のTTL調整と旧環境の併存期間を計画する。",
    "pitfall": "権威DNSの変更と全利用者への即時反映を同一視する。",
    "sources": [
      {
        "title": "RFC 1034：DNS",
        "url": "https://www.rfc-editor.org/info/rfc1034/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "DNS切替えとキャッシュ",
      "steps": [
        "旧応答をキャッシュ",
        "権威DNSの情報を変更",
        "期限内は旧応答を利用",
        "期限後の再照会で更新"
      ],
      "caption": "TTLの期限を迎える時刻は利用者側のキャッシュ状況によって異なる。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "TTLはサーバ証明書の有効期限を示す",
        "explanation": "誤り。DNSのTTLはキャッシュの有効期間に関係し、証明書期限とは別。"
      },
      {
        "id": "b",
        "text": "全利用者の接続先が同時に変わらなければ、DNS改ざんと断定できる",
        "explanation": "誤り。通常のキャッシュ差でも起こるため、応答や参照先を調べる。"
      },
      {
        "id": "c",
        "text": "再帰リゾルバ等に、旧応答のキャッシュが残っている場合がある",
        "explanation": "正しい。切替え直前のTTL短縮は、すでに保存された旧キャッシュへさかのぼって効かない。"
      },
      {
        "id": "d",
        "text": "権威サーバを書き換えると、世界中のキャッシュが直ちに削除される",
        "explanation": "誤り。キャッシュはそれぞれの有効期間等に従う。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "W07",
    "topic": "Windows・認証",
    "level": 2,
    "question": "ADのOUとサイトの主な役割の違いとして正しいものはどれか。",
    "answer": "正しい選択肢は「OUは管理やポリシーの単位、サイトはネットワーク接続の特性を表す単位」。",
    "explanation": "部署構成と拠点間回線は別の軸。サイトとサブネットの対応はDC選択や複製の設計に関わる。",
    "example": "出先機関を新設したら、OU作成だけでなくサブネットのサイト登録も確認する。",
    "pitfall": "庁舎や部署ごとにOUを作ればADサイト設計も済んだと思う。",
    "sources": [
      {
        "title": "Microsoft：ADサイトのトポロジー",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/understanding-active-directory-site-topology"
      },
      {
        "title": "Microsoft：Group Policy overview",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "ADサイトはWebサイトの公開ページを分類する単位である",
        "explanation": "誤り。ここでのサイトはADのネットワーク構成を扱う概念である。"
      },
      {
        "id": "b",
        "text": "OUは管理やポリシーの単位、サイトはネットワーク接続の特性を表す単位",
        "explanation": "正しい。部署の管理構造と拠点・回線の構造は異なる軸として扱う。"
      },
      {
        "id": "c",
        "text": "OUは物理回線速度を表し、サイトは職員のアクセス権だけを表す",
        "explanation": "誤り。OUとサイトの役割を取り違えている。"
      },
      {
        "id": "d",
        "text": "OUを分けると、拠点間のネットワーク通信が自動的に禁止される",
        "explanation": "誤り。OUはネットワーク遮断を行う仕組みではない。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "S09",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "ログの保管期間を決める方法として、最も適切なものはどれか。",
    "answer": "正しい選択肢は「調査・監査の必要性と、容量・費用・個人情報・アクセス管理を合わせて評価する」。",
    "explanation": "何を検知・立証したいかからログ種類と保持期間を決める。取得しないログは後から再現できない。",
    "example": "異動後の権限変更を追えるか、保存対象と検索手順を確認する。",
    "pitfall": "全件を無期限保存すれば運用も法令対応も済むと思う。",
    "sources": [
      {
        "title": "NIST SP 800-92：ログ管理",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "内容や利用目的に関係なく、無期限保存だけを唯一の正解にする",
        "explanation": "誤り。費用・管理・個人情報等の条件も検討する必要がある。"
      },
      {
        "id": "b",
        "text": "必要なログは、事件が起きてから過去分を取得すればよい",
        "explanation": "誤り。取得していなかった過去のログは、後から再現できない場合がある。"
      },
      {
        "id": "c",
        "text": "保存容量が足りれば、ログへのアクセス権は管理しなくてよい",
        "explanation": "誤り。保存量と、誰が閲覧・変更できるかは別の管理課題。"
      },
      {
        "id": "d",
        "text": "調査・監査の必要性と、容量・費用・個人情報・アクセス管理を合わせて評価する",
        "explanation": "正しい。何を検知・立証したいかから、種類と保持期間を決める。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "D09",
    "topic": "データベース",
    "level": 2,
    "question": "PostgreSQLのRead Committed分離レベルに関する説明で、誤っているものは？",
    "answer": "この説明は誤り。Read Committedでは文ごとのスナップショットが基本であり、次のSELECTに他の確定済み変更が見える場合がある。",
    "explanation": "他の処理が途中で確定すると、次の文は新しい状態を見ることがある。一貫性要件に合わせて選ぶ。",
    "example": "長時間の統計で途中更新を含めるか決める。",
    "pitfall": "トランザクション開始で全検索が同一時点になると思う。",
    "sources": [
      {
        "title": "PostgreSQL: Transaction isolation",
        "url": "https://www.postgresql.org/docs/current/transaction-iso.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "同じトランザクション内の二つのSELECTで結果が変わることがある",
        "explanation": "正しい説明。途中で他のトランザクションが変更を確定すると、次の文で見える場合がある。"
      },
      {
        "id": "b",
        "text": "求める一貫性に応じて分離レベルを選ぶ",
        "explanation": "正しい説明。どの範囲で同じ状態を読みたいかを要件と照らし合わせる。"
      },
      {
        "id": "c",
        "text": "他のトランザクションの確定済み変更が、次の文に反映され得る",
        "explanation": "正しい説明。Read Committedでは文ごとのスナップショットを基本に考える。"
      },
      {
        "id": "d",
        "text": "同一条件のSELECTは、他のトランザクションが変更を確定しても、トランザクション全体で同じ結果が保証される",
        "explanation": "誤り。Read Committedはトランザクション全体で同じ読取り結果を保証するものではない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "A07",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "入力として整数1〜100を許す。境界値を重視するテストの代表的な組合せとして最も適切なものは？",
    "answer": "0、1、2、99、100、101。",
    "explanation": "範囲の端と前後で比較演算子の誤りを探す。空欄、文字、小数は別に確認する。",
    "example": "添付数の上限判定が「未満」になっていないか調べる。",
    "pitfall": "範囲内の50だけ通れば十分とする。",
    "sources": [
      {
        "title": "Microsoft: Effective testing practices",
        "url": "https://learn.microsoft.com/en-us/azure/well-architected/design-guides/testing"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "0、1、2、99、100、101",
        "explanation": "正しい。範囲の両端とその前後を確認し、比較演算子の誤りを見つけやすくする。"
      },
      {
        "id": "b",
        "text": "20、40、60、80だけ",
        "explanation": "誤り。範囲内の中ほどだけでは、1や100付近の境界不具合を捉えにくい。"
      },
      {
        "id": "c",
        "text": "1、50、100だけ",
        "explanation": "不十分。両端は含むが、そのすぐ外側や内側を確認できない。"
      },
      {
        "id": "d",
        "text": "文字列「a」と空欄だけ",
        "explanation": "誤り。型や必須チェックの検証には使えるが、数値範囲の境界テストとは異なる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C10",
    "topic": "クラウド・設計",
    "level": 2,
    "question": "電子申請システムの監視でHTTP 200だけが確認できた。正常性の評価として最も適切なものは？",
    "answer": "それだけでは不十分。依存先や必要な業務操作も確認する。",
    "explanation": "プロセスの生存と利用者の処理完了は異なる。監視の深さと影響を設計する。",
    "example": "DB接続不能でもトップページだけ表示され得る。",
    "pitfall": "実申請を大量に作る監視で業務データを汚す。安全な検証方法を使う。",
    "sources": [
      {
        "title": "Microsoft: Health Endpoint Monitoring",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "必要な業務操作や依存先も含め、監視の深さを設計する",
        "explanation": "正しい。入口が応答することと、申請が業務上完了することは別である。"
      },
      {
        "id": "b",
        "text": "200なら、添付保存やDB登録も必ず正常であるとする",
        "explanation": "誤り。HTTPの応答だけでは、全依存先や後続処理の完了は分からない。"
      },
      {
        "id": "c",
        "text": "監視URLが1件応答すれば、全利用者の全操作が成功するとする",
        "explanation": "誤り。一部機能や条件に限った不具合を見逃し得る。"
      },
      {
        "id": "d",
        "text": "業務操作を調べるときも、本番データへの影響を考慮しない",
        "explanation": "誤り。監視自体が登録や通知を起こす場合があり、影響を設計する必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G02",
    "topic": "自治体・制度",
    "level": 2,
    "question": "LGWAN-ASPを利用する際の自治体側の対応として、適切なものは？",
    "answer": "サービス範囲と自治体の責任を切り分ける必要がある。",
    "explanation": "LGWAN上のサービスでも、利用者管理・業務データ・問い合わせ窓口などの担当は確認する。",
    "example": "回線事業者とASP事業者のどちらへ障害連絡するか決める。",
    "pitfall": "接続方式だけで運用品質を判断する。",
    "sources": [
      {
        "title": "J-LIS 総合行政ネットワーク",
        "url": "https://www.j-lis.go.jp/lgwan/cms_15.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "サービス範囲と自治体側の責任を切り分け、運用担当を確認する",
        "explanation": "正しい。LGWAN上のサービスでも、利用者管理・業務データ・問い合わせ窓口などの担当は確認する。"
      },
      {
        "id": "b",
        "text": "LGWAN上のサービスなので、利用者登録・削除の担当確認を省く",
        "explanation": "誤り。アカウント管理が誰の作業になるか、サービス範囲と運用を確認する。"
      },
      {
        "id": "c",
        "text": "すべての業務データの取扱いは、契約を見ずに事業者責任とする",
        "explanation": "誤り。専用網上の提供という事実だけで責任分担は決まらない。"
      },
      {
        "id": "d",
        "text": "問い合わせ窓口は稼働後に障害が起きてから決める",
        "explanation": "誤り。連絡先や対応範囲を事前に整理しないと、初動が遅れる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M09",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "WBSを作る主な目的として、正しいものは？",
    "answer": "主目的は、成果物と作業を分解し、必要作業の抜けや範囲を把握すること。",
    "explanation": "担当・工数・依存関係を決める土台になる。移行や職員研修も見えるようにする。",
    "example": "「導入一式」を設定・テスト・移行・訓練・切替判定に分ける。",
    "pitfall": "機器設定だけ並べて業務側の準備を落とす。",
    "sources": [
      {
        "title": "IPA APシラバス Ver.7.2（学習範囲）",
        "url": "https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "成果物と作業を分解し、作業の抜けや範囲を把握する",
        "explanation": "正しい。担当・工数・依存関係を決める土台になる。移行や職員研修も見えるようにする。"
      },
      {
        "id": "b",
        "text": "担当者の連絡先一覧を作ることだけが目的である",
        "explanation": "誤り。作業と成果物を分解し、範囲や抜けを把握することが中心となる。"
      },
      {
        "id": "c",
        "text": "稼働日だけを書き、移行や研修などの準備作業は除く",
        "explanation": "誤り。必要作業を分解して見えるようにする目的に反する。"
      },
      {
        "id": "d",
        "text": "予算額を均等に割り振れば、必要作業の確認は不要になる",
        "explanation": "誤り。金額の配分だけでは成果物や作業の抜けを把握できない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N07",
    "topic": "ネットワーク",
    "level": 2,
    "question": "DHCPで新しい端末にアドレスを配布できない。アドレス枯渇の調査として最も適切なものはどれか。",
    "answer": "正しい選択肢は「スコープ、使用中リース、除外・予約、想定端末数を突き合わせる」。",
    "explanation": "DHCPは期限付きでアドレスを割り当てる。機器追加や長いリースにより配布余力がなくなる場合がある。",
    "example": "会議用端末の大量接続前に、通常端末を含むピーク台数を確認する。",
    "pitfall": "原因確認前に範囲を広げ、固定IPと衝突させる。",
    "sources": [
      {
        "title": "RFC 2131：DHCP",
        "url": "https://www.rfc-editor.org/info/rfc2131/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "予約を増やせば配布可能なIPアドレスの総数も必ず増えると判断する",
        "explanation": "誤り。予約は割当て先を管理する仕組みで、アドレス範囲そのものを増やすものではない。"
      },
      {
        "id": "b",
        "text": "スコープ、使用中リース、除外・予約、想定端末数を突き合わせる",
        "explanation": "正しい。配布可能数と実際の消費を比較し、枯渇しているかを確かめる。"
      },
      {
        "id": "c",
        "text": "DNSのTTLだけを短くする",
        "explanation": "誤り。DNSキャッシュ期間を変えても、DHCPの配布可能アドレスは増えない。"
      },
      {
        "id": "d",
        "text": "全端末のリースを無断で削除してから原因を考える",
        "explanation": "誤り。利用中端末への影響やアドレス競合を考慮せず、調査より先に変更している。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "W08",
    "topic": "Windows・認証",
    "level": 2,
    "question": "ドメインコントローラーの冗長化と復旧について、誤っているものはどれか。",
    "answer": "誤っているのは「DCを2台にして複製すれば、誤変更前へ戻すためのバックアップも不要になる」。",
    "explanation": "冗長化は一部の故障に備える。過去の正常状態へ戻すには、復旧可能なバックアップとフォレスト復旧計画が必要。",
    "example": "DC全体が侵害された想定で、復旧順序と隔離環境を机上確認する。",
    "pitfall": "複製と履歴付きバックアップを同じものと考える。",
    "sources": [
      {
        "title": "Microsoft：ADフォレスト復旧計画",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/forest-recovery-guide/ad-forest-recovery-devise-a-plan"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "DCを2台にして複製すれば、誤変更前へ戻すためのバックアップも不要になる",
        "explanation": "誤り。誤変更や侵害も複製され得る。冗長化は過去の正常状態の保存とは別。これが選ぶ対象。"
      },
      {
        "id": "b",
        "text": "DCの冗長化は、一部の機器故障への備えになる",
        "explanation": "正しい。ただし、あらゆる障害や侵害を防ぐわけではない。"
      },
      {
        "id": "c",
        "text": "ADの復旧では、バックアップと復旧計画の両方を確認する",
        "explanation": "正しい。保存したデータだけでなく、復元できる手順・体制が必要。"
      },
      {
        "id": "d",
        "text": "複製が正常でも、過去の状態を復元できるとは限らない",
        "explanation": "正しい。複製は現在の変更を反映するため、誤変更の前へ戻す保証にはならない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "S11",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "ゼロトラストの考え方として正しいものはどれか。",
    "answer": "正しい選択肢は「ネットワーク内にいることだけで信頼せず、資源へのアクセスを検証する」。",
    "explanation": "利用者、端末、アクセス先などの情報に基づき判断する。単一製品名でも、境界対策不要という意味でもない。",
    "example": "庁内からの管理画面アクセスでも、本人・端末状態・権限を確認する。",
    "pitfall": "VPNをなくすこと自体を目的にして業務要件を失う。",
    "sources": [
      {
        "title": "NIST SP 800-207：Zero Trust Architecture",
        "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "すべての境界対策を無条件で撤去することを意味する",
        "explanation": "誤り。境界対策が不要という意味ではなく、信頼の置き方を見直す考え方。"
      },
      {
        "id": "b",
        "text": "ネットワーク内にいることだけで信頼せず、資源へのアクセスを検証する",
        "explanation": "正しい。利用者・端末・アクセス先等の情報に基づいて判断する。"
      },
      {
        "id": "c",
        "text": "庁内LANを廃止すれば、それだけで完成する",
        "explanation": "誤り。ネットワークの有無だけでなく、アクセスを検証する設計・運用が必要。"
      },
      {
        "id": "d",
        "text": "専用製品を一つ購入すれば、すべてのアクセス制御を省略できる",
        "explanation": "誤り。単一製品の導入だけで完了するものではない。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "D11",
    "topic": "データベース",
    "level": 2,
    "question": "処理AがX→Y、処理BがY→Xの順にロックを取り、互いが持つロックの解放待ちになった。この状態は？",
    "answer": "互いの解放を待つデッドロック。",
    "explanation": "同じ順序でロックし、トランザクションを短くする。中断された処理には安全な再試行方針も必要。",
    "example": "複数台帳を更新するバッチの順序をそろえる。",
    "pitfall": "待ち時間を長くすれば必ず解消すると考える。",
    "sources": [
      {
        "title": "PostgreSQL: Explicit locking",
        "url": "https://www.postgresql.org/docs/current/explicit-locking.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "デッドロック",
        "explanation": "正しい。互いが必要な資源を保持し合い、待ちの循環が生じている。"
      },
      {
        "id": "b",
        "text": "ライブロック",
        "explanation": "誤り。ライブロックは処理が状態を変え続けても前進できない状況を指す。ここでは互いのロックを保持して待ち合っている。"
      },
      {
        "id": "c",
        "text": "飢餓（スタベーション）",
        "explanation": "誤り。資源が他処理に優先され続け、特定の処理が進めない問題を指す。設問の核心は待ちの循環である。"
      },
      {
        "id": "d",
        "text": "ダーティリード",
        "explanation": "誤り。他のトランザクションの未確定データを読む現象であり、ロック待ちの循環とは異なる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A08",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "二進浮動小数点では0.1+0.2が厳密な0.3と一致しない場合がある。金額計算への対応として最も適切なものは？",
    "answer": "十進数型や最小通貨単位の整数を使い、丸め規則を明示する。",
    "explanation": "二進浮動小数点で正確に表せない小数がある。端数処理の時点と方法も仕様にする。",
    "example": "各行で丸めるか総額で丸めるか決める。",
    "pitfall": "表示を小数2桁にすれば内部の誤差も解消すると思う。",
    "sources": [
      {
        "title": "Python: decimal",
        "url": "https://docs.python.org/3/library/decimal.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "十進数型や最小通貨単位の整数を使い、丸め規則を決める",
        "explanation": "正しい。表現方法に加え、端数処理の時点と方法も業務仕様にする。"
      },
      {
        "id": "b",
        "text": "小数点以下を画面で隠せば、内部計算も正確になる",
        "explanation": "誤り。表示桁数を変えても内部の数値表現や計算誤差は変わらない。"
      },
      {
        "id": "c",
        "text": "どの金額も二進浮動小数点で誤差なく表せると扱う",
        "explanation": "誤り。二進数で有限桁に収まらない十進小数がある。"
      },
      {
        "id": "d",
        "text": "計算のたびに端数を任意に切り捨てればよい",
        "explanation": "誤り。任意の丸めは合計の不一致を招く。業務上の規則を一貫して適用する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C09",
    "topic": "クラウド・設計",
    "level": 3,
    "question": "障害中のAPIへ全端末が即座に無制限再試行している。改善策として最も適切なものは？",
    "answer": "負荷を増幅し復旧を妨げる。回数上限と待ち時間を設ける。",
    "explanation": "一時障害と恒久エラーを区別し、間隔を延ばすなど制御する。重複実行の安全性も確認する。",
    "example": "打切り後は保留を示し、照会や再処理につなぐ。",
    "pitfall": "認証エラーも待てば直ると延々再試行する。",
    "sources": [
      {
        "title": "Microsoft: Retry pattern",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "再試行の回数上限と待ち時間を設け、重複実行の安全性も確認する",
        "explanation": "正しい。再試行による負荷増幅を抑え、一時障害か恒久エラーかも区別する。"
      },
      {
        "id": "b",
        "text": "再試行間隔をさらに短くして、全端末で同時に繰り返す",
        "explanation": "誤り。集中した再試行は過負荷を増幅し、復旧を妨げる場合がある。"
      },
      {
        "id": "c",
        "text": "一時障害でも恒久エラーでも、条件を見ずに無制限再試行する",
        "explanation": "誤り。入力不正などは再送だけでは直らず、無駄な負荷になる。"
      },
      {
        "id": "d",
        "text": "登録要求は何度実行しても安全だと確認なしに仮定する",
        "explanation": "誤り。二重登録や二重処理を防ぐ冪等性等の設計が必要になる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G04",
    "topic": "自治体・制度",
    "level": 2,
    "question": "ネットワーク分離方式の変更提案を受けた。最初の確認として最も適切なものは？",
    "answer": "現行の団体ポリシー、扱う情報、通信経路、必要対策と承認手続。",
    "explanation": "利便性だけで例外接続を決めない。国の指針と自団体の決定を区別し、変更後のリスクを評価する。モデル名称の暗記よりデータの流れが重要。",
    "example": "申請添付ファイルが、どの境界をどう通るか図にする。",
    "pitfall": "他団体で採用済みなら自団体でも許可済みと考える。",
    "sources": [
      {
        "title": "総務省説明資料：情報セキュリティポリシー（2025年資料・構成の参考）",
        "url": "https://www.cyber.go.jp/pdf/council/cs/cs_expert/05/05document4.pdf"
      },
      {
        "title": "デジタル庁 セキュリティリスク分析ガイドライン",
        "url": "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/1b65a1dc/20230411_resources_standard_guidelines_guideline_01.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "団体ポリシー、扱う情報、通信経路、必要対策と承認手続を確認する",
        "explanation": "正しい。利便性だけで例外接続を決めない。国の指針と自団体の決定を区別し、変更後のリスクを評価する。モデル名称の暗記よりデータの流れが重要。"
      },
      {
        "id": "b",
        "text": "利用者が便利だと感じるなら、例外接続を先に開通して後で承認を得る",
        "explanation": "誤り。利便性だけで先行実装せず、情報の流れとリスク、承認手続を確認する。"
      },
      {
        "id": "c",
        "text": "モデル名称が新しければ、自団体の規程や通信経路は調べない",
        "explanation": "誤り。名称だけで適否は決まらず、扱う情報や現構成との関係を確認する。"
      },
      {
        "id": "d",
        "text": "ベンダーの標準構成であれば、国の指針と団体の決定は同一と扱う",
        "explanation": "誤り。提案、一般指針、団体が正式に承認した構成は区別する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M12",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "導入費300万円、年額運用100万円、終了時移行費50万円。5年間の単純TCOは？ 税・割引・追加費用は考えない。",
    "answer": "850万円。税・割引・追加費用を考えない設問条件。",
    "explanation": "300＋100×5＋50。期間と含む費用を揃える。実務では職員工数、回線、教育、追加容量なども確認する。",
    "example": "月額の安さだけでなく5年総額で比べる。",
    "pitfall": "初期費用と月額だけで移行費用を落とす。",
    "sources": [
      {
        "title": "IPA APシラバス Ver.7.2（学習範囲）",
        "url": "https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "visual": {
      "title": "5年間に必要な費用の内訳",
      "rows": [
        {
          "label": "導入費",
          "value": 300
        },
        {
          "label": "5年分の運用費",
          "value": 500
        },
        {
          "label": "終了時移行費",
          "value": 50
        }
      ],
      "unit": "万円",
      "caption": "合計850万円。設問では税・割引・追加費用を考えない。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "850万円",
        "explanation": "正しい。300＋100×5＋50。期間と含む費用を揃える。実務では職員工数、回線、教育、追加容量なども確認する。"
      },
      {
        "id": "b",
        "text": "800万円",
        "explanation": "誤り。300+100×5で、終了時の移行費50万円が抜けている。"
      },
      {
        "id": "c",
        "text": "450万円",
        "explanation": "誤り。年額運用費を1年分しか数えていない。5年分が必要。"
      },
      {
        "id": "d",
        "text": "550万円",
        "explanation": "誤り。100×5+50で、導入費300万円が抜けている。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N09",
    "topic": "ネットワーク",
    "level": 2,
    "question": "ステートフルファイアウォールが、静的なIPアドレス・ポート条件に加えて確認するものはどれか。",
    "answer": "正しい選択肢は「通信状態や、パケットと既存通信との対応関係」。",
    "explanation": "開始した通信への応答かを追跡できる。ただし状態を見れば全てのアプリ攻撃を防げるわけではない。",
    "example": "申請システムからの外向き通信と、その応答を区別してルールを確認する。",
    "pitfall": "許可されたHTTPSなら内容も安全だと思う。",
    "sources": [
      {
        "title": "NIST SP 800-41 Rev.1：ファイアウォール",
        "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "すべてのアプリケーションの業務承認の正しさ",
        "explanation": "誤り。状態追跡だけでアプリ内部の業務上の認可を保証できない。"
      },
      {
        "id": "b",
        "text": "送信元・宛先のIPアドレスとポート番号だけで、過去の通信との関係は見ない",
        "explanation": "誤り。それだけでは静的な条件の確認であり、ステートフルな通信状態の追跡を説明していない。"
      },
      {
        "id": "c",
        "text": "すべての暗号化通信の平文を、鍵なしで必ず読むこと",
        "explanation": "誤り。状態追跡と暗号の復号は別であり、平文を必ず読めるわけではない。"
      },
      {
        "id": "d",
        "text": "通信状態や、パケットと既存通信との対応関係",
        "explanation": "正しい。開始済みの通信への応答かなどを追跡できる。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "W10",
    "topic": "Windows・認証",
    "level": 2,
    "question": "複数端末で同じローカル管理者パスワードを使い続ける場合の主なリスクはどれか。",
    "answer": "正しい選択肢は「1台から漏れた資格情報が、他端末への侵入にも使われやすい」。",
    "explanation": "Windows LAPS等で端末ごとに管理し、閲覧権限と更新も制御する。導入条件はOSやディレクトリ構成を確認する。",
    "example": "保守委託で共通パスワードを配る運用の見直しに使う。",
    "pitfall": "複雑なパスワードなら全端末共通でも十分と考える。",
    "sources": [
      {
        "title": "Microsoft：Windows LAPSの概念",
        "url": "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-concepts-overview"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "パスワードが共通なら、利用した管理者を必ず個人識別できる",
        "explanation": "誤り。共通資格情報だけでは、誰が使用したかの識別が難しい。"
      },
      {
        "id": "b",
        "text": "端末が別々のOUにあれば、同じ管理者資格情報の悪用を必ず防げる",
        "explanation": "誤り。OUを分けること自体は、共通する資格情報の再利用を阻止する保証にはならない。"
      },
      {
        "id": "c",
        "text": "1台から漏れた資格情報が、他端末への侵入にも使われやすい",
        "explanation": "正しい。端末ごとの管理や更新、閲覧権限の制御で横展開のリスクを抑える。"
      },
      {
        "id": "d",
        "text": "1台が侵害されても、同じパスワードなら他端末への悪用は不可能になる",
        "explanation": "誤り。共通化は、資格情報を横展開に使われる危険を高める。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "S13",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "電子署名について、誤っている説明はどれか。",
    "answer": "誤っているのは「電子署名を付ければ、それだけで文書の内容が第三者に読めなくなる」。",
    "explanation": "秘密鍵で署名し、対応する公開鍵で検証する。鍵と本人の結び付きや鍵の保護が重要。",
    "example": "署名付きの契約データを渡す際も、送付先と暗号化の要否を確認する。",
    "pitfall": "署名と暗号化を同じ保護だと扱う。",
    "sources": [
      {
        "title": "NIST：Digital signature",
        "url": "https://csrc.nist.gov/glossary/term/digital_signature"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "電子署名は、改変検知や署名者の確認に関わる",
        "explanation": "正しい。鍵と本人の結び付きなどを含めて検証する。"
      },
      {
        "id": "b",
        "text": "一般的な公開鍵方式の電子署名は、秘密鍵で署名し対応する公開鍵で検証する",
        "explanation": "正しい。署名鍵と検証鍵の役割を区別する。"
      },
      {
        "id": "c",
        "text": "署名に使う秘密鍵の保護は重要である",
        "explanation": "正しい。秘密鍵が悪用されると、署名の信頼性へ影響する。"
      },
      {
        "id": "d",
        "text": "電子署名を付ければ、それだけで文書の内容が第三者に読めなくなる",
        "explanation": "誤り。署名は秘匿の機能ではなく、内容の暗号化は別。これが選ぶ対象。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "D12",
    "topic": "データベース",
    "level": 2,
    "question": "DBのインデックス設計について、誤っているものは？",
    "answer": "「全列にインデックスを作れば、全処理が必ず速くなる」が誤り。更新負荷や領域が増え、検索にも必ず使われるわけではない。",
    "explanation": "検索を助ける一方、領域と更新時の維持処理が増える。絞り込みが弱いと全表走査が合理的なこともある。",
    "example": "受付番号と日付範囲の検索頻度を調べる。",
    "pitfall": "インデックス未使用を常に障害とみなす。",
    "sources": [
      {
        "title": "PostgreSQL: Indexes",
        "url": "https://www.postgresql.org/docs/current/indexes-intro.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "検索条件や実測を確認して、必要なインデックスを選ぶ",
        "explanation": "正しい説明。実際の検索・更新の使い方に合わせる。"
      },
      {
        "id": "b",
        "text": "インデックスの維持には更新処理や保存領域の負担がある",
        "explanation": "正しい説明。読取りの高速化だけでなく、更新時の費用も考える。"
      },
      {
        "id": "c",
        "text": "多数の行を読む検索では、全表走査が合理的な場合もある",
        "explanation": "正しい説明。選択性やデータ配置等によって最適な経路は変わる。"
      },
      {
        "id": "d",
        "text": "全列にインデックスを作れば、全処理が必ず速くなる",
        "explanation": "誤り。更新負荷や領域が増え、検索にも必ず使われるわけではない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "A09",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "CSV取込のエラー処理に関する説明で、誤っているものは？",
    "answer": "「例外をすべて無視し、常に成功と表示する」が誤り。欠落や失敗が隠れ、再処理や原因調査もできなくなる。",
    "explanation": "想定例外を捕捉し、対象行・理由・継続可否を記録する。機微な値をログへ不用意に残さない。",
    "example": "成功・失敗件数を報告し、再処理対象を特定する。",
    "pitfall": "画面にエラーがなければ正常終了とみなす。",
    "sources": [
      {
        "title": "Python: Errors and Exceptions",
        "url": "https://docs.python.org/3/tutorial/errors.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "失敗行と理由を把握できるようにする",
        "explanation": "正しい説明。どの行の再処理が必要か判断できるようにする。"
      },
      {
        "id": "b",
        "text": "業務要件に応じて全体停止か行単位継続かを決める",
        "explanation": "正しい説明。部分取込みを許せるかはデータ整合性や運用要件による。"
      },
      {
        "id": "c",
        "text": "ログに機微な値を不用意に残さない",
        "explanation": "正しい説明。調査に必要な情報と、保護すべきデータを区別する。"
      },
      {
        "id": "d",
        "text": "例外をすべて無視し、常に成功と表示する",
        "explanation": "誤り。欠落や失敗が隠れ、再処理や原因調査もできなくなる。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "C11",
    "topic": "クラウド・設計",
    "level": 3,
    "question": "両方の稼働が必要な構成要素が2つあり、各稼働率は99.9%。故障が独立と仮定した直列システムの理論稼働率は？",
    "answer": "0.999×0.999=0.998001、約99.8001%。",
    "explanation": "両方必要なので積になる。独立という仮定が必要。共通障害や保守を含む実測は別に評価する。",
    "example": "認証と申請システム双方が必要なら、それぞれのSLAだけで全体を判断しない。",
    "pitfall": "複数の稼働率を単純平均する。",
    "sources": [
      {
        "title": "AWS: Availability with dependencies",
        "url": "https://docs.aws.amazon.com/whitepapers/latest/availability-and-beyond-improving-resilience/availability-with-dependencies.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "99.8001%",
        "explanation": "正しい。確率の積0.999×0.999=0.998001を百分率にすると99.8001%。"
      },
      {
        "id": "b",
        "text": "99.9%",
        "explanation": "誤り。単一要素の値であり、両方が同時に稼働する条件を反映していない。"
      },
      {
        "id": "c",
        "text": "99.9999%",
        "explanation": "誤り。これは独立した2要素の少なくとも片方が動けばよい並列構成での計算値。"
      },
      {
        "id": "d",
        "text": "199.8%",
        "explanation": "誤り。確率を足す計算は適切でなく、稼働率は100%を超えない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G06",
    "topic": "自治体・制度",
    "level": 2,
    "question": "標準化の個別システムの移行時期を判断する方法として、適切なものは？",
    "answer": "特定移行支援システムなどの扱いと個別の移行計画を確認する。",
    "explanation": "デジタル庁は2026年度以降の移行となるシステムへの措置も示している。一般原則と自団体の状況を混同しない。",
    "example": "最新の対象一覧・制度通知と庁内の合意済み計画を照合する。",
    "pitfall": "原則時期だけで遅延・違反を断定する。",
    "sources": [
      {
        "title": "デジタル庁 基幹業務システムの統一・標準化",
        "url": "https://www.digital.go.jp/policies/local_governments"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "特定移行支援システム等の扱いと、個別の移行計画を確認する",
        "explanation": "正しい。デジタル庁は2026年度以降の移行となるシステムへの措置も示している。一般原則と自団体の状況を混同しない。"
      },
      {
        "id": "b",
        "text": "一般的な原則移行時期だけを見て、個別の扱いは確認しない",
        "explanation": "誤り。特定移行支援システム等の扱いや個別計画が関係する。"
      },
      {
        "id": "c",
        "text": "ベンダーの口頭予定だけを、正式な移行計画と同じものとして扱う",
        "explanation": "誤り。制度上の位置付けと、団体の確認・承認済み計画を照合する。"
      },
      {
        "id": "d",
        "text": "他自治体の移行日を、そのまま自団体の確定期限にする",
        "explanation": "誤り。現行システムや移行条件、個別の支援対象の扱いが異なり得る。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M14",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "年間発生確率10%、発生時の損失1,000万円。単純な年間期待損失として正しいものは？",
    "answer": "100万円。ただし期待値だけで対策の要否を決めない。",
    "explanation": "0.1×1,000万円。低頻度でも生命・住民サービス・法令違反への影響は単純な金額平均に収まらない。",
    "example": "重要業務停止を費用と継続責任の両方から評価する。",
    "pitfall": "期待損失が安いので重大事故を無条件に受容する。",
    "sources": [
      {
        "title": "デジタル庁 セキュリティリスク分析ガイドライン",
        "url": "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/1b65a1dc/20230411_resources_standard_guidelines_guideline_01.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "100万円",
        "explanation": "正しい。0.1×1,000万円。低頻度でも生命・住民サービス・法令違反への影響は単純な金額平均に収まらない。"
      },
      {
        "id": "b",
        "text": "10万円",
        "explanation": "誤り。10%は0.1なので、0.1×1,000万円=100万円である。"
      },
      {
        "id": "c",
        "text": "1,000万円",
        "explanation": "誤り。発生した場合の損失額で、確率を掛けた期待値ではない。"
      },
      {
        "id": "d",
        "text": "10,000万円",
        "explanation": "誤り。損失を確率で割るのではなく、発生確率を掛ける。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N10",
    "topic": "ネットワーク",
    "level": 2,
    "question": "期間限定で通信を許可するルールを作る。IPアドレス・ポートに加え、管理記録として最も適切なものはどれか。",
    "answer": "正しい選択肢は「目的、責任者、承認、期限、確認方法」。",
    "explanation": "許可の技術条件と業務上の必要性を対応させる。期限後に不要な穴が残らないよう見直す。",
    "example": "ベンダー保守用の許可は作業後の終了確認まで管理する。",
    "pitfall": "接続できた時点で作業を終え、恒久的な例外にする。",
    "sources": [
      {
        "title": "NIST SP 800-41 Rev.1：ファイアウォール",
        "url": "https://csrc.nist.gov/pubs/sp/800/41/r1/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "申請者の氏名だけで、期限は記載しない",
        "explanation": "誤り。一時的な許可が恒久化する危険を管理できない。"
      },
      {
        "id": "b",
        "text": "接続に成功した画面だけで、目的や承認は記録しない",
        "explanation": "誤り。疎通成功は、その許可が必要・承認済みである証拠とは別。"
      },
      {
        "id": "c",
        "text": "目的、責任者、承認、期限、確認方法",
        "explanation": "正しい。業務上の必要性と技術条件を結び付け、期限後の見直しにつなぐ。"
      },
      {
        "id": "d",
        "text": "設定した日付だけ",
        "explanation": "誤り。作成日だけでは、必要性や廃止の判断根拠が残らない。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "W12",
    "topic": "Windows・認証",
    "level": 2,
    "question": "WSUSによる更新管理について、誤っているものはどれか。",
    "answer": "誤っているのは「更新を承認した時点で、対象となる全端末の適用完了が確定する」。",
    "explanation": "承認は配布・適用を進める判断。未接続端末、適用失敗、再起動待ちを含めて完了条件を定める。",
    "example": "月次報告は承認日だけでなく、対象台数と未完了理由を記録する。",
    "pitfall": "WSUSの承認操作をパッチ適用完了と呼ぶ。",
    "sources": [
      {
        "title": "Microsoft：更新のグループポリシー設定",
        "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-server-update-services/deploy/4-configure-group-policy-settings-for-automatic-updates"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "visual": {
      "title": "更新の完了確認",
      "steps": [
        "対象と更新を決める",
        "検証して承認する",
        "端末が取得・適用する",
        "必要なら再起動する",
        "未完了と失敗を確認"
      ],
      "caption": "更新ごとに挙動は異なる。承認と適用完了を分けて管理する。"
    },
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "更新を承認した時点で、対象となる全端末の適用完了が確定する",
        "explanation": "誤り。承認後も未接続・失敗・再起動待ち等を確認する必要がある。これが選ぶ対象。"
      },
      {
        "id": "b",
        "text": "承認と端末側の適用結果は、分けて確認する",
        "explanation": "正しい。配布を認める判断と、端末での完了状態は別。"
      },
      {
        "id": "c",
        "text": "長期間未接続の端末は、更新の完了確認で考慮する",
        "explanation": "正しい。管理画面の集計だけでなく、対象端末の状態を追う必要がある。"
      },
      {
        "id": "d",
        "text": "更新によっては再起動待ちを含めた完了条件を定める",
        "explanation": "正しい。適用状況の定義を揃えて判断する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "S14",
    "topic": "セキュリティ・復旧",
    "level": 2,
    "question": "非常時の連絡先一覧を、庁内ファイルサーバだけに保管する場合の弱点はどれか。",
    "answer": "正しい選択肢は「サーバ・認証・ネットワークの停止時に、一覧そのものを参照できないおそれがある」。",
    "explanation": "対応計画は利用不能な設備への依存も点検する。代替の保管・連絡手段は機密性を保って整備する。",
    "example": "障害時に連絡先を調べるためのログオン自体ができるか、訓練する。",
    "pitfall": "文書を作成しただけで実行できると考える。",
    "sources": [
      {
        "title": "カナダCyber Centre：Ransomware playbook",
        "url": "https://www.cyber.gc.ca/en/guidance/ransomware-playbook-itsm00099"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "連絡先は非常時用なので、機密性を考慮せず一般公開すればよい",
        "explanation": "誤り。代替保管や連絡手段でも、情報の保護を考慮する。"
      },
      {
        "id": "b",
        "text": "ファイルサーバを冗長化していれば、認証基盤や回線の停止時も必ず参照できる",
        "explanation": "誤り。サーバの冗長化だけでは、認証や回線など別の依存先の障害を解消できない。"
      },
      {
        "id": "c",
        "text": "サーバ・認証・ネットワークの停止時に、一覧そのものを参照できないおそれがある",
        "explanation": "正しい。障害を起こし得る設備への依存を点検し、安全な代替手段を用意する。"
      },
      {
        "id": "d",
        "text": "ファイルサーバ上にあれば、認証停止中でも必ず閲覧できる",
        "explanation": "誤り。認証への依存があれば、必要なときに参照できない場合がある。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "D14",
    "topic": "データベース",
    "level": 2,
    "question": "検索文字列をSQL文へ直接連結している。SQLインジェクションへの基本的な改善策として最も適切なものは？",
    "answer": "値をプレースホルダーに渡すパラメーター化クエリを使う。",
    "explanation": "SQLの構造と値を分離する。テーブル名など値として渡せない要素は許可候補から選ぶ。",
    "example": "引用符を含む氏名も安全に値として扱う。",
    "pitfall": "文字置換や入力チェックだけで防ぎ切ろうとする。",
    "sources": [
      {
        "title": "OWASP: SQL Injection Prevention",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "値をプレースホルダーに渡すパラメーター化クエリを使う",
        "explanation": "正しい。SQLの構造と値を分離する。列名等は値として渡せないため許可候補から選ぶ。"
      },
      {
        "id": "b",
        "text": "すべての入力から引用符を削除し、文字列連結を続ける",
        "explanation": "不十分。SQLの構文や入力用途は多様で、特定文字の削除だけに依存せず構造と値を分離する。正当な文字も壊し得る。"
      },
      {
        "id": "c",
        "text": "ブラウザで禁止文字をチェックするだけで、サーバー側対策を省く",
        "explanation": "誤り。ブラウザを経由しない要求もあり、クライアントの検査だけでは不十分。"
      },
      {
        "id": "d",
        "text": "ストアドプロシージャ内に移し、その中では入力をSQLに連結する",
        "explanation": "不十分。保存された処理の内部でも危険な動的SQL連結を行えば、構造と値が混ざる問題は残る。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A11",
    "topic": "開発・アルゴリズム",
    "level": 2,
    "question": "共通部品を修正した。修正箇所の再確認に加え、行うべきテストとして適切なものは？",
    "answer": "既存機能への影響を確認する回帰テストも必要。",
    "explanation": "共通部品の変更は別画面にも波及する。不具合の再現条件をテストに加える。",
    "example": "住所入力の修正後に検索・帳票・CSV出力も確認する。",
    "pitfall": "一行の修正なので影響も一画面だけと決めつける。",
    "sources": [
      {
        "title": "Microsoft: Shift testing left",
        "url": "https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "影響を受ける既存機能の回帰テスト",
        "explanation": "正しい。直した部分以外を壊していないか確認し、再発防止のテストも加える。"
      },
      {
        "id": "b",
        "text": "修正箇所が動けば、他機能の確認をすべて省略する",
        "explanation": "誤り。共通部品の変更は、別画面や別処理へ波及し得る。"
      },
      {
        "id": "c",
        "text": "修正済みの不具合だけ再テストし、共通部品を使う別画面は対象外とする",
        "explanation": "誤り。不具合が直ったことの確認と、他機能を壊していないかの確認は別に必要である。"
      },
      {
        "id": "d",
        "text": "旧版のテストが全て成功していれば、新版の既存機能は確認しない",
        "explanation": "誤り。過去の成功結果は変更後の動作を保証しない。影響範囲を見て再実行する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "C12",
    "topic": "クラウド・設計",
    "level": 3,
    "question": "SaaS乗換えに備え、契約前にデータについて確認することとして最も適切なものは？",
    "answer": "出力形式・範囲・費用・期間と、移行後の利用可能性・削除方法。",
    "explanation": "出力できるだけでは移行完了ではない。関連付け、添付、履歴を含む再利用を小規模に試す。参考は英国の一般的設計指針で、日本の自治体への法的義務を示すものではない。",
    "example": "架空データで出力から読込みまで検証する。",
    "pitfall": "CSV出力可の一文だけでベンダー依存が解消したと判断する。",
    "sources": [
      {
        "title": "GOV.UK: Managing technical lock-in",
        "url": "https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "出力形式・対象・費用・期間、移行先での再利用、削除方法を確かめる",
        "explanation": "正しい。出力できるだけでなく、関連付け・添付・履歴も含め移行できるか試す。"
      },
      {
        "id": "b",
        "text": "画面のスクリーンショットが撮れれば、構造化データの移行も可能とする",
        "explanation": "誤り。画像だけではデータの関係や機械処理に必要な構造を移せない。"
      },
      {
        "id": "c",
        "text": "「エクスポート可能」という記載だけで対象範囲や費用を確認しない",
        "explanation": "誤り。添付や履歴が対象外、あるいは追加費用が必要な場合がある。"
      },
      {
        "id": "d",
        "text": "利用終了後のデータ削除方法は、契約前には検討しなくてよい",
        "explanation": "誤り。残存データの扱いは契約終了時の重要な条件である。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G07",
    "topic": "自治体・制度",
    "level": 2,
    "question": "標準準拠システムの調達で非機能要件を扱う姿勢として、適切なものは？",
    "answer": "可用性・性能・復旧など、業務に必要な水準を確認する。",
    "explanation": "標準の対象・適用版を確認し、選択可能な項目や団体側の運用条件を決める。",
    "example": "年度末の同時利用数と夜間バッチの終了時刻を確認する。",
    "pitfall": "機能一覧が合えば業務は必ず回ると思う。",
    "sources": [
      {
        "title": "デジタル庁 基幹業務システムの統一・標準化",
        "url": "https://www.digital.go.jp/policies/local_governments"
      },
      {
        "title": "IPA 非機能要求グレード2018",
        "url": "https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/hikinou/ent03-b.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "標準の適用範囲を踏まえ、業務に必要な可用性・性能・復旧水準を確認する",
        "explanation": "正しい。標準の対象・適用版を確認し、選択可能な項目や団体側の運用条件を決める。"
      },
      {
        "id": "b",
        "text": "標準準拠なら、可用性・性能・復旧水準は一切確認しない",
        "explanation": "誤り。標準の対象範囲と、業務に必要な水準や選択項目を確認する。"
      },
      {
        "id": "c",
        "text": "機能が動くことだけ確認し、停止時の復旧条件は稼働後に決める",
        "explanation": "誤り。復旧要件は構成や費用に関係するため事前に検討する。"
      },
      {
        "id": "d",
        "text": "最も高い非機能水準を、業務や費用との関係を見ずに一律指定する",
        "explanation": "誤り。必要水準を業務影響・運用条件と合わせて定める。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M15",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "リスクの移転に関する説明で、誤っているものは？",
    "answer": "「契約で業者へリスクを移転すれば、自治体のリスクはすべてゼロになる」が誤り。信用低下や住民への影響、説明責任など、消えない部分がある。",
    "explanation": "保険・契約等で一部損失を分担しても、実際の業務継続や説明責任まで消えるわけではない。",
    "example": "賠償条項だけでなく代替運用と復旧体制を準備する。",
    "pitfall": "損失補償で窓口停止の問題も解決すると考える。",
    "sources": [
      {
        "title": "デジタル庁 セキュリティリスク分析ガイドライン",
        "url": "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/1b65a1dc/20230411_resources_standard_guidelines_guideline_01.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "契約や保険で、一部の損失負担を他者と分担する方法がある",
        "explanation": "正しい説明。損失を誰が負担するかを変える対応が含まれる。"
      },
      {
        "id": "b",
        "text": "住民サービス停止など、移転後も残る影響を評価する",
        "explanation": "正しい説明。費用負担を移しても、サービスへの影響は残り得る。"
      },
      {
        "id": "c",
        "text": "契約による分担と、実際の業務継続対策は区別して考える",
        "explanation": "正しい説明。契約だけでサービスが自動復旧するわけではない。"
      },
      {
        "id": "d",
        "text": "契約で業者へリスクを移転すれば、自治体のリスクはすべてゼロになる",
        "explanation": "誤り。信用低下や住民への影響、説明責任など、消えない部分がある。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "N11",
    "topic": "ネットワーク",
    "level": 2,
    "question": "NAT・NAPTについて、誤っている説明はどれか。",
    "answer": "誤っているのは「NATを通過すれば通信内容が暗号化され、盗聴を防げる」。",
    "explanation": "NAPTではポート番号も利用して複数端末の通信を対応付ける。盗聴対策には別途TLS等が必要。",
    "example": "共有グローバルIPからの通信を追うには、時刻や変換ログも必要になる。",
    "pitfall": "送信元アドレスが変わればデータも読めなくなると思う。",
    "sources": [
      {
        "title": "RFC 3022：NAT",
        "url": "https://www.rfc-editor.org/info/rfc3022/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "NATの有無とは別に、通信内容の保護にはTLS等を検討する",
        "explanation": "正しい。通信路の暗号化は別途設計する。"
      },
      {
        "id": "b",
        "text": "NATを通過すれば通信内容が暗号化され、盗聴を防げる",
        "explanation": "誤り。NATはアドレス等の変換であり、通信内容の秘匿を保証しない。これが選ぶ対象。"
      },
      {
        "id": "c",
        "text": "NATはIPアドレス等を変換する仕組みである",
        "explanation": "正しい。変換と暗号化は役割が異なる。"
      },
      {
        "id": "d",
        "text": "NAPTでは、複数端末の通信の対応付けにポート番号も利用する",
        "explanation": "正しい。アドレスに加えてポート番号を使って識別する。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "W13",
    "topic": "Windows・認証",
    "level": 2,
    "question": "Microsoftが示すWSUSの「非推奨」について、2026年11月3日確認時点の説明として正しいものはどれか。",
    "answer": "正しい選択肢は「新機能追加は停止しているが、直ちに利用不能・サポート終了という意味ではない」。",
    "explanation": "2026年11月3日確認のMicrosoft説明。現行運用を点検しつつ、OSの期限と代替手段の要件を評価する。",
    "example": "閉域での更新配布要件を整理してから移行候補を比較する。",
    "pitfall": "非推奨という言葉だけで、明日止まると説明する。",
    "sources": [
      {
        "title": "Microsoft：WSUSによる更新管理",
        "url": "https://learn.microsoft.com/en/windows/deployment/update/waas-manage-updates-wsus"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "非推奨になった日に、すべてのWSUSが強制停止する",
        "explanation": "誤り。非推奨という表現だけで、即日の利用不能を意味しない。"
      },
      {
        "id": "b",
        "text": "非推奨でも、将来の新機能が継続して追加されることが保証される",
        "explanation": "誤り。Microsoftの説明では新機能追加は停止している。"
      },
      {
        "id": "c",
        "text": "非推奨の製品は、OSのライフサイクルを確認する必要がなくなる",
        "explanation": "誤り。OSの期限や運用要件を含め、サポート条件を確認する必要がある。"
      },
      {
        "id": "d",
        "text": "新機能追加は停止しているが、直ちに利用不能・サポート終了という意味ではない",
        "explanation": "正しい。サポートは製品ライフサイクル等を確認し、移行の要件と時期を評価する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "S05",
    "topic": "セキュリティ・復旧",
    "level": 3,
    "question": "端末でランサムウェア感染が疑われる。最初の対応方針として最も適切なものはどれか。",
    "answer": "正しい選択肢は「所定の連絡を行い、指揮系統に従って隔離と証拠保全を進める」。",
    "explanation": "初期化は痕跡を失わせる。拡大防止と調査に必要な証拠を両立し、指揮系統に従う。",
    "example": "有線・無線の隔離方法を確認し、検知時刻や症状を記録する。",
    "pitfall": "証拠を消す操作を「とりあえず復旧」として進める。",
    "sources": [
      {
        "title": "Microsoft：ランサムウェア初動と復旧",
        "url": "https://learn.microsoft.com/en-us/security/ransomware/incident-response-playbook-dart-ransomware-approach"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "誰にも連絡せず直ちに再インストールし、元の状態を消す",
        "explanation": "誤り。証拠を失わせ、組織としての影響調査や対応を妨げる。"
      },
      {
        "id": "b",
        "text": "原因が確定するまで、通常どおり共有フォルダへの接続を続ける",
        "explanation": "誤り。疑いの段階でも、所定の判断で拡大防止を検討する必要がある。"
      },
      {
        "id": "c",
        "text": "身代金要求画面だけを見て、影響範囲の調査を不要とする",
        "explanation": "誤り。侵入経路、他の端末や資格情報への影響も調べる必要がある。"
      },
      {
        "id": "d",
        "text": "所定の連絡を行い、指揮系統に従って隔離と証拠保全を進める",
        "explanation": "正しい。被害拡大防止と調査に必要な証拠を両立する。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "D10",
    "topic": "データベース",
    "level": 3,
    "question": "残数1を二つの処理が同時に読み、両方が予約確定しようとしている。過剰予約を防ぐ対策として最も適切なものは？",
    "answer": "残数条件付きの原子的更新や適切なロックを使い、更新結果を確認する。",
    "explanation": "読んで別途書くだけでは競合する。残数>0の条件で残数を1減らし、更新件数が1か判定する方法がある。",
    "example": "施設予約の最後の枠を二重確保させない。",
    "pitfall": "ボタンを無効化するだけで他端末からの競合も防げると思う。",
    "sources": [
      {
        "title": "PostgreSQL: Explicit locking",
        "url": "https://www.postgresql.org/docs/current/explicit-locking.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "残数条件付きの原子的更新や適切なロックを使い、更新結果を確認する",
        "explanation": "正しい。残数>0の条件で減算し、更新できた処理だけ確定する方法などがある。"
      },
      {
        "id": "b",
        "text": "画面で残数1と表示できたので、各処理が無条件で確定する",
        "explanation": "誤り。読取り後に他の処理が先に更新する可能性がある。"
      },
      {
        "id": "c",
        "text": "各処理が一秒待ってから、同じ値を無条件で書き込む",
        "explanation": "誤り。待ち時間だけでは競合を排除できない。"
      },
      {
        "id": "d",
        "text": "更新件数を確認せず、更新SQLの送信だけで成功扱いにする",
        "explanation": "誤り。条件に合わず0件更新だった可能性を見逃す。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A13",
    "topic": "開発・アルゴリズム",
    "level": 3,
    "question": "アプリ更新の切戻し計画として、旧版の実行ファイルを用意する以外に重要なことは？",
    "answer": "DB変更などが旧版と互換かも確認する必要がある。",
    "explanation": "アプリとデータの巻戻しは別問題。段階的変更、戻す条件、手順と復元検証を用意する。",
    "example": "削除するDB列を旧版が使っていないか確認する。",
    "pitfall": "ファイルを戻せば業務データも自動で戻ると思う。",
    "sources": [
      {
        "title": "Microsoft: Safe deployment practices",
        "url": "https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "DB変更との互換性、戻す条件・手順、復元検証を確認する",
        "explanation": "正しい。アプリだけ戻しても、データ構造や状態が旧版と合わない場合がある。"
      },
      {
        "id": "b",
        "text": "DBを変更しても、アプリ旧版は必ずそのまま動くとする",
        "explanation": "誤り。列削除や意味の変更などは旧版を動作不能にし得る。"
      },
      {
        "id": "c",
        "text": "切戻しの判断基準は、障害発生後に初めて決める",
        "explanation": "誤り。混乱を減らすため、実施条件や責任者を事前に整理する。"
      },
      {
        "id": "d",
        "text": "バックアップの存在だけで、復元可能性の検証を省く",
        "explanation": "誤り。取得成功と、必要な時点へ実際に戻せることは異なる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G09",
    "topic": "自治体・制度",
    "level": 2,
    "question": "問い合わせフォームの収集項目を決める際の対応として、最も適切なものは？",
    "answer": "必要な利用目的と事務に照らし、収集項目を必要な範囲に絞る。",
    "explanation": "項目が多いほど漏えい時の影響と管理負担が増える。収集前に、必要な理由を説明できる状態にする。",
    "example": "施設の不具合連絡に生年月日を必須とする理由を見直す。",
    "pitfall": "入力欄を作れることと、収集してよいことを同一視する。",
    "sources": [
      {
        "title": "個人情報保護委員会 ガイドライン（行政機関等編）",
        "url": "https://www.ppc.go.jp/personalinfo/legal/guidelines_administrative/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "利用目的と事務に照らし、必要な範囲に収集項目を絞る",
        "explanation": "正しい。項目が多いほど漏えい時の影響と管理負担が増える。収集前に、必要な理由を説明できる状態にする。"
      },
      {
        "id": "b",
        "text": "将来使う可能性が少しでもあれば、すべて必須項目にする",
        "explanation": "誤り。現在の利用目的と事務に必要な範囲を説明できるようにする。"
      },
      {
        "id": "c",
        "text": "任意項目なら、利用目的を確認せずどの情報でも収集する",
        "explanation": "誤り。任意か必須かにかかわらず、収集の必要性と目的を確認する。"
      },
      {
        "id": "d",
        "text": "保存容量に余裕があれば、項目数による管理負担は考えない",
        "explanation": "誤り。容量だけでなく、漏えい時の影響やアクセス・廃棄の管理負担が増える。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M16",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "障害を暫定回避してサービスを復旧した。その後の対応として適切なものは？",
    "answer": "復旧を急ぐ対応と、原因・再発防止を扱う問題管理を分けて進める。",
    "explanation": "全障害で復旧前に根本原因を確定する必要はないが、繰返す障害を放置しない。",
    "example": "再起動で復旧後、発生条件とログを分析して恒久対策を決める。",
    "pitfall": "再起動で直ったので記録を捨てる。",
    "sources": [
      {
        "title": "IPA APシラバス Ver.7.2（学習範囲）",
        "url": "https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "復旧を急ぐ対応と、原因・再発防止を扱う問題管理を分けて進める",
        "explanation": "正しい。全障害で復旧前に根本原因を確定する必要はないが、繰返す障害を放置しない。"
      },
      {
        "id": "b",
        "text": "復旧できたので、繰り返す障害でも原因や再発防止を扱わない",
        "explanation": "誤り。暫定復旧と、原因や再発防止への対応は別の目的を持つ。"
      },
      {
        "id": "c",
        "text": "すべての障害で根本原因が確定するまで、復旧を必ず止める",
        "explanation": "誤り。影響を抑えるために先に復旧し、原因調査を分けて進める場合がある。"
      },
      {
        "id": "d",
        "text": "暫定回避の内容を記録せず、担当者の記憶だけに残す",
        "explanation": "誤り。再発時の対応や恒久対策を検討するため、実施内容と効果を記録する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N12",
    "topic": "ネットワーク",
    "level": 2,
    "question": "小さなパケットの通信は成功するが、大きな通信だけ失敗する。ネットワークで優先して調べる候補はどれか。",
    "answer": "正しい選択肢は「経路上のMTUと、Path MTU Discoveryに必要な通知が届くか」。",
    "explanation": "トンネル等で通せるIPパケットが小さくなることがある。必要なICMP通知の遮断が原因になる場合もある。",
    "example": "VPN導入後の添付送信失敗で、MTUと遮断ログをベンダーに確認する。",
    "pitfall": "pingが一度成功しただけで通信経路を正常と断定する。",
    "sources": [
      {
        "title": "RFC 1191：Path MTU discovery",
        "url": "https://www.rfc-editor.org/info/rfc1191/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "経路上のMTUと、Path MTU Discoveryに必要な通知が届くか",
        "explanation": "正しい。トンネルによるMTU低下や必要なICMP通知の遮断が原因候補になる。"
      },
      {
        "id": "b",
        "text": "DNSキャッシュが必ず破損していると断定する",
        "explanation": "誤り。パケットの大きさに依存する症状から、DNS破損とは断定できない。"
      },
      {
        "id": "c",
        "text": "端末のIPアドレスがプライベートであることだけ",
        "explanation": "誤り。プライベートアドレスという区分だけでは、サイズ依存の失敗を説明できない。"
      },
      {
        "id": "d",
        "text": "すべてのICMPを追加で遮断する",
        "explanation": "誤り。必要な通知を妨げ、Path MTU Discoveryの問題を悪化させる場合がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "W14",
    "topic": "Windows・認証",
    "level": 2,
    "question": "Windowsの成功ログオンイベント4624について、誤っている説明はどれか。",
    "answer": "誤っているのは「4624があれば、人が画面を操作して対話ログオンしたと断定できる」。",
    "explanation": "成功ログオンにはネットワーク・サービス等の種別がある。番号だけで利用者の操作を断定しない。",
    "example": "深夜の成功ログを、タスク実行か不審アクセスか関連情報で判断する。",
    "pitfall": "成功ログ一件を本人が席にいた証拠とする。",
    "sources": [
      {
        "title": "Microsoft：イベント4624",
        "url": "https://learn.microsoft.com/windows/security/threat-protection/auditing/event-4624"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "対象アカウント等の内容も合わせて調べる",
        "explanation": "正しい。イベント番号だけでなく、記録の各項目を読み取る。"
      },
      {
        "id": "b",
        "text": "成功ログオンの記録と、利用者が実施した具体的な業務操作は同じ情報ではない",
        "explanation": "正しい。ログオンだけで、その後の操作すべてが分かるわけではない。"
      },
      {
        "id": "c",
        "text": "4624があれば、人が画面を操作して対話ログオンしたと断定できる",
        "explanation": "誤り。ネットワークやサービス等のログオンもある。番号だけで対話操作とは断定できない。これが選ぶ対象。"
      },
      {
        "id": "d",
        "text": "ログオン種別を確認する必要がある",
        "explanation": "正しい。成功ログオンの種類を区別する情報になる。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "S06",
    "topic": "セキュリティ・復旧",
    "level": 3,
    "question": "感染した端末のデータをバックアップから復元した。業務ネットワークへの復帰前に必要な考え方はどれか。",
    "answer": "正しい選択肢は「侵入経路、残存侵害、資格情報等への対処と安全確認も行う」。",
    "explanation": "データ復元と攻撃者の排除は別。侵害された認証基盤などが残れば再被害が起きる。",
    "example": "復旧担当と調査担当が、再接続の判定条件を共有する。",
    "pitfall": "動いたことだけを安全に復旧した証拠とする。",
    "sources": [
      {
        "title": "Microsoft：ランサムウェア初動と復旧",
        "url": "https://learn.microsoft.com/en-us/security/ransomware/incident-response-playbook-dart-ransomware-approach"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "復元すれば、別の認証サーバでの侵害も必ず同時に解消する",
        "explanation": "誤り。復元対象の端末以外の侵害や資格情報への影響は別途確認する。"
      },
      {
        "id": "b",
        "text": "バックアップが存在したので、インシデント報告は不要になる",
        "explanation": "誤り。復元できても、組織の所定の報告や影響調査は必要。"
      },
      {
        "id": "c",
        "text": "侵入経路、残存侵害、資格情報等への対処と安全確認も行う",
        "explanation": "正しい。データの復元と攻撃者の排除は別の課題である。"
      },
      {
        "id": "d",
        "text": "ファイルが読めれば、侵入経路は調べず直ちに戻してよい",
        "explanation": "誤り。侵入経路が残れば再侵害される危険がある。"
      }
    ],
    "correctChoice": "c"
  },
  {
    "id": "D13",
    "topic": "データベース",
    "level": 3,
    "question": "PostgreSQLで更新SQLにEXPLAIN ANALYZEを付けて調べるとき、注意すべき点は？",
    "answer": "実際に文が実行され、データが変更され得ること。",
    "explanation": "通常のEXPLAINは計画確認、ANALYZE付きは実測を伴う。安全な検証環境を使い、副作用も確認する。",
    "example": "本番のDELETEにそのまま付けず、検証データで調べる。",
    "pitfall": "分析用表示なので更新されないと思う。",
    "sources": [
      {
        "title": "PostgreSQL: Using EXPLAIN",
        "url": "https://www.postgresql.org/docs/current/using-explain.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "実際に文が実行され、データが変更され得る",
        "explanation": "正しい。計画だけの確認ではない。安全な検証環境を使い、副作用も検討する。"
      },
      {
        "id": "b",
        "text": "ANALYZE付きでも、文が実行されることは絶対にない",
        "explanation": "誤り。実測を得るため実際に実行される。"
      },
      {
        "id": "c",
        "text": "本番で試しても、更新はすべて自動で取り消される",
        "explanation": "誤り。EXPLAIN ANALYZE自体が自動取消を保証するものではない。"
      },
      {
        "id": "d",
        "text": "処理時間しか出ないので、データのバックアップは検討不要である",
        "explanation": "誤り。表示内容と実行の副作用は別であり、実データへの影響を考える。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "A14",
    "topic": "開発・アルゴリズム",
    "level": 3,
    "question": "申請登録要求がタイムアウトし再送された。二重登録を防ぐ設計として最も適切なものは？",
    "answer": "要求IDなどで重複を識別し、同じ結果を返せる冪等な設計。",
    "explanation": "タイムアウトは未実行を意味しない。再実行の安全性を確認し、重複判定を永続化する。",
    "example": "採番前後に再送されても二重申請にしない。",
    "pitfall": "失敗表示が出たので無条件で新規登録を繰り返す。",
    "sources": [
      {
        "title": "Microsoft: Retry pattern",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "要求IDで重複を識別し、既存の処理結果を返せるようにする",
        "explanation": "正しい。重複判定を永続化し、同じ要求を再実行しても効果を重ねない。"
      },
      {
        "id": "b",
        "text": "タイムアウトした要求は未実行と決めつけ、必ず新規登録する",
        "explanation": "誤り。サーバーでは処理済みで、応答だけ届かなかった可能性がある。"
      },
      {
        "id": "c",
        "text": "同じ氏名ならすべて同じ申請として削除する",
        "explanation": "誤り。同姓同名や同じ人の別申請があり、正当な申請を失う恐れがある。"
      },
      {
        "id": "d",
        "text": "ブラウザのボタンを一度無効化するだけで全再送を防げるとする",
        "explanation": "誤り。通信の再送や別端末からの要求もあり、サーバー側の対策が必要。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G10",
    "topic": "自治体・制度",
    "level": 2,
    "question": "個人情報を扱う業務の委託について、誤っている説明は？",
    "answer": "「委託契約を結べば、自治体の監督は一切不要になる」が誤り。業務委託によって、安全管理や適切な監督の必要性が消えるわけではない。",
    "explanation": "契約に書くだけでなく、実施状況を確かめる設計が必要。要求・確認方法は扱う情報と団体規程に合わせる。",
    "example": "アクセス記録、再委託先、終了時の返却・消去報告を確認する。",
    "pitfall": "秘密保持条項だけで実効性が確保されたと考える。",
    "sources": [
      {
        "title": "個人情報保護委員会 Q&A（行政機関等編）",
        "url": "https://www.ppc.go.jp/personalinfo/legal/koutekibumon_qa/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "委託する業務内容と、安全管理の要求を明らかにする",
        "explanation": "正しい説明。何を委ね、どの水準で扱うかを明確にする。"
      },
      {
        "id": "b",
        "text": "再委託の条件や取扱いも確認する",
        "explanation": "正しい説明。データを扱う関係者や責任を把握できるようにする。"
      },
      {
        "id": "c",
        "text": "契約上の要求が実施されているか確認する仕組みを設ける",
        "explanation": "正しい説明。契約の文言だけでなく、実際の履行状況を確かめる。"
      },
      {
        "id": "d",
        "text": "委託契約を結べば、自治体の監督は一切不要になる",
        "explanation": "誤り。業務委託によって、安全管理や適切な監督の必要性が消えるわけではない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "M17",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "ICT-BCPで復旧の優先順位を決める方法として、適切なものは？",
    "answer": "非常時優先業務と、その業務が依存するシステムから決める。",
    "explanation": "認証・通信・電源などの共通基盤も依存関係に含める。業務部門の優先順位と一致させる。",
    "example": "避難所対応情報へ到達できるか回線や職員参集も含めて確認する。",
    "pitfall": "サーバ一覧だけで人や代替手段を考えない。",
    "sources": [
      {
        "title": "NICT 災害に強い情報通信ネットワーク導入ガイドブック2024 ICT-BCP",
        "url": "https://www2.nict.go.jp/resil/book/2024/46132-book/pageindices/index59.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "visual": {
      "title": "業務から復旧優先度を考える",
      "steps": [
        "非常時に必要な業務を選ぶ",
        "依存するシステム・データを確認",
        "電源・回線・人員を確認",
        "復旧順と代替手段を合意"
      ],
      "caption": "検討順の例。最終的な優先順位は全庁BCPと整合させる。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "非常時優先業務と、その業務を支えるシステムの依存関係から決める",
        "explanation": "正しい。認証・通信・電源などの共通基盤も依存関係に含める。業務部門の優先順位と一致させる。"
      },
      {
        "id": "b",
        "text": "サーバーの性能が高いものから、業務との関係を見ずに復旧する",
        "explanation": "誤り。性能順では、住民サービスの重要性や依存関係を反映できない。"
      },
      {
        "id": "c",
        "text": "業務システムだけを並べ、認証・通信・電源は依存関係から除く",
        "explanation": "誤り。共通基盤が使えなければ、優先業務のシステムも利用できない場合がある。"
      },
      {
        "id": "d",
        "text": "IT担当だけで決め、業務部門の優先順位は確認しない",
        "explanation": "誤り。非常時に継続する業務と整合させる必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N15",
    "topic": "ネットワーク",
    "level": 2,
    "question": "HTTPSのサーバ証明書検証について、誤っている説明はどれか。",
    "answer": "誤っているのは「有効期限内なら、接続先名が証明書と一致しなくても正当な接続先と判断できる」。",
    "explanation": "証明書検証には複数の条件がある。失効確認の動作もクライアントや構成に依存する。",
    "example": "更新後の証明書で、中間証明書の不足や別名の漏れがないか試験する。",
    "pitfall": "警告を消すために証明書検証を無効化する。",
    "sources": [
      {
        "title": "RFC 5280：証明書と失効",
        "url": "https://www.rfc-editor.org/info/rfc5280/"
      },
      {
        "title": "RFC 9525：TLSサービスの識別子検証",
        "url": "https://www.rfc-editor.org/rfc/rfc9525"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "失効確認の具体的な動作は、クライアントや構成によって異なる",
        "explanation": "正しい。検証条件と実際の実装・ポリシーを区別して確認する。"
      },
      {
        "id": "b",
        "text": "有効期限内なら、接続先名が証明書と一致しなくても正当な接続先と判断できる",
        "explanation": "誤り。期限以外に接続先名との一致や信頼の連鎖なども必要。これが選ぶ対象。"
      },
      {
        "id": "c",
        "text": "接続先の名前と、証明書が示す名前との一致を確認する",
        "explanation": "正しい。別の名前に対する正規証明書を持っていても、その接続先の証明にはならない。"
      },
      {
        "id": "d",
        "text": "信頼できる認証局へつながる証明書の連鎖を確認する",
        "explanation": "正しい。証明書があるだけではなく、その信頼関係を検証する。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "W15",
    "topic": "Windows・認証",
    "level": 2,
    "question": "Windowsのログオン失敗イベント4625が急増した。調査の進め方として最も適切なものはどれか。",
    "answer": "正しい選択肢は「送信元・失敗理由・対象・時刻・変更履歴を確認し、攻撃と設定不備の両方を検討する」。",
    "explanation": "古い資格情報を使うサービス等でも失敗は増える。攻撃の可能性を残して、事実を集める。",
    "example": "パスワード変更後の集中発生か、不特定アカウントへの試行かを比較する。",
    "pitfall": "件数だけで侵害を断定したり、逆に設定ミスと決めつけたりする。",
    "sources": [
      {
        "title": "Microsoft：イベント4625",
        "url": "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4625"
      }
    ],
    "checked": "2026-11-03",
    "kind": "製品仕様",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "失敗ログが多いので、監査ログの取得を止めて解決とする",
        "explanation": "誤り。原因を解消せず、調査に必要な証拠を失う対応になる。"
      },
      {
        "id": "b",
        "text": "送信元・失敗理由・対象・時刻・変更履歴を確認し、攻撃と設定不備の両方を検討する",
        "explanation": "正しい。古い資格情報を使うサービス等でも起きるため、事実から絞り込む。"
      },
      {
        "id": "c",
        "text": "失敗件数だけで、外部からの総当たり攻撃と断定する",
        "explanation": "誤り。件数は兆候だが、原因を特定するには内容と周辺情報が必要。"
      },
      {
        "id": "d",
        "text": "成功ログオンが一件でもあれば、すべて正常として調査を終える",
        "explanation": "誤り。成功が混在しても、不正試行や設定不備の可能性は残る。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "S15",
    "topic": "セキュリティ・復旧",
    "level": 3,
    "question": "復旧訓練で目標時間を超えた場合の対応として、誤っているものはどれか。",
    "answer": "誤っているのは「評価を下げないため、実測時間を記録せず目標内だったことにする」。",
    "explanation": "訓練は弱点を見つける機会。担当・期限を決めて改善し、再検証する。",
    "example": "鍵の所在確認に時間がかかったなら、保管方法と取り出し権限を見直す。",
    "pitfall": "本番と違う条件を隠して、目標を満たしたことにする。",
    "sources": [
      {
        "title": "カナダCyber Centre：Ransomware playbook",
        "url": "https://www.cyber.gc.ca/en/guidance/ransomware-playbook-itsm00099"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "visual": {
      "title": "訓練を改善につなげる",
      "steps": [
        "復旧訓練を実施",
        "目標との差を測定",
        "原因と改善策を整理",
        "担当と期限を決める",
        "再試験で効果を確認"
      ],
      "caption": "次の訓練へ循環する。目標超過の事実を残すことが改善の出発点。"
    },
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "手順や体制を見直した後、再検証する",
        "explanation": "正しい。対策を作るだけでなく、効果を確かめる。"
      },
      {
        "id": "b",
        "text": "評価を下げないため、実測時間を記録せず目標内だったことにする",
        "explanation": "誤り。課題を隠すと改善につながらない。これが選ぶ対象。"
      },
      {
        "id": "c",
        "text": "目標と実測の差を記録し、原因を調べる",
        "explanation": "正しい。訓練で見つかった弱点を改善の出発点にする。"
      },
      {
        "id": "d",
        "text": "改善策に担当者と期限を設定する",
        "explanation": "正しい。具体的な実行責任を決め、改善を進める。"
      }
    ],
    "correctChoice": "b"
  },
  {
    "id": "G11",
    "topic": "自治体・制度",
    "level": 2,
    "question": "特定個人情報保護評価の説明として、最も適切なものは？",
    "answer": "特定個人情報の取扱いによる権利利益への影響とリスクを予測し、対策を確認・宣言する制度。",
    "explanation": "該当性や評価区分、実施時期は指針で確認する。構成変更も評価内容への影響を確認する契機となる。",
    "example": "新しい連携で情報が誰に渡るかを評価書と照合する。",
    "pitfall": "脆弱性診断の合格をもって評価の検討が終わったとする。",
    "sources": [
      {
        "title": "個人情報保護委員会 特定個人情報保護評価",
        "url": "https://www.ppc.go.jp/legal/assessment/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "権利利益への影響とリスクを予測し、対策を確認・宣言する制度である",
        "explanation": "正しい。該当性や評価区分、実施時期は指針で確認する。構成変更も評価内容への影響を確認する契機となる。"
      },
      {
        "id": "b",
        "text": "稼働後に機器へ侵入できるか試す技術検査だけである",
        "explanation": "誤り。技術検査だけでなく、取扱いによる権利利益への影響やリスクを扱う制度である。"
      },
      {
        "id": "c",
        "text": "個人番号を一度でも扱えば、全て同じ評価区分で実施する",
        "explanation": "誤り。該当性や評価区分は指針に基づいて確認する。"
      },
      {
        "id": "d",
        "text": "一度評価すれば、その後の重要な構成変更は検討対象にならない",
        "explanation": "誤り。変更が評価内容へ与える影響も確認する必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M18",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "BCPの読み合わせ訓練が終わった。復旧可能性の評価として適切な考え方は？",
    "answer": "読み合わせだけでは不十分。連絡・権限・手順・データ復元などを実際に確かめる。",
    "explanation": "机上訓練は有用だが実行できるかは別。業務への影響を管理したうえで必要な実動試験を行う。",
    "example": "代替担当が手順書だけで連絡・作業できるか試す。",
    "pitfall": "手順書があれば誰でも実行できると思う。",
    "sources": [
      {
        "title": "NICT 災害に強い情報通信ネットワーク導入ガイドブック2024 ICT-BCP",
        "url": "https://www2.nict.go.jp/resil/book/2024/46132-book/pageindices/index59.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "読み合わせに加え、影響を管理して必要な実動試験も行う",
        "explanation": "正しい。机上訓練は有用だが実行できるかは別。業務への影響を管理したうえで必要な実動試験を行う。"
      },
      {
        "id": "b",
        "text": "読み合わせができたので、バックアップからの復元も成功すると断定する",
        "explanation": "誤り。手順を理解することと、実データを復元できることは別に検証する。"
      },
      {
        "id": "c",
        "text": "実動訓練なら、稼働中の業務への影響を管理せず実施してよい",
        "explanation": "誤り。訓練の有用性と本番業務の安全性を両立する計画が必要。"
      },
      {
        "id": "d",
        "text": "権限や連絡先は文書に書いてあれば、現在も使えるか確認しない",
        "explanation": "誤り。変更や失効があり得るため、実際に機能するか確かめる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "N16",
    "topic": "ネットワーク",
    "level": 3,
    "question": "サーバ証明書の秘密鍵が漏えいした疑いがある。対応として最も適切なものはどれか。",
    "answer": "正しい選択肢は「所定の経路へ報告し、影響を調べ、失効・鍵再生成・再発行等を判断する」。",
    "explanation": "秘密鍵の安全性が崩れると、証明書の残存期間は安全の根拠にならない。鍵を使う対象と配布先を洗い出す。",
    "example": "公開サイトだけでなく、中継機器に配置した同じ鍵の有無を確認する。",
    "pitfall": "同じ秘密鍵で証明書だけ再発行して対処完了とする。",
    "sources": [
      {
        "title": "RFC 5280：証明書と失効",
        "url": "https://www.rfc-editor.org/info/rfc5280/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "所定の経路へ報告し、影響を調べ、失効・鍵再生成・再発行等を判断する",
        "explanation": "正しい。有効期限を待たず、鍵を利用する対象や配布先も洗い出す。"
      },
      {
        "id": "b",
        "text": "証明書の有効期限が残っている間は、そのまま使い続ける",
        "explanation": "誤り。残存期間は、漏えいした秘密鍵の安全性を回復しない。"
      },
      {
        "id": "c",
        "text": "同じ秘密鍵で証明書だけ再発行すれば、漏えいリスクは必ずなくなる",
        "explanation": "誤り。攻撃者が同じ秘密鍵を保持している疑いが残る。"
      },
      {
        "id": "d",
        "text": "公開鍵だけを削除し、秘密鍵の調査は不要とする",
        "explanation": "誤り。問題の中心は秘密鍵の安全性であり、その影響と再利用を確認する必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "W16",
    "topic": "Windows・認証",
    "level": 3,
    "question": "ベンダーの保守作業に権限を与える際、最初に検討する方針として最も適切なものはどれか。",
    "answer": "正しい選択肢は「必要作業に限定した権限・期間・経路・個人識別・記録を定める」。",
    "explanation": "作業内容から権限を導く。恒久的な最上位権限を最初の選択肢にせず、委任や一時付与を検討する。",
    "example": "アカウント解除の保守とAD全体の変更を同じ権限で扱わない。",
    "pitfall": "委託先だから利用者を区別できない共有IDでよいと思う。",
    "sources": [
      {
        "title": "NCSC：Preventing lateral movement",
        "url": "https://www.ncsc.gov.uk/guidance/preventing-lateral-movement"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "必要作業に限定した権限・期間・経路・個人識別・記録を定める",
        "explanation": "正しい。作業要件から必要権限を導き、委任や一時付与を検討する。"
      },
      {
        "id": "b",
        "text": "作業内容を確認せず、常時有効なDomain Adminsを共有で渡す",
        "explanation": "誤り。過大・恒久的な権限と共用資格情報は、影響や追跡の問題を招く。"
      },
      {
        "id": "c",
        "text": "委託先なら、作業記録や利用者の識別は不要とする",
        "explanation": "誤り。外部委託でも、誰が何をしたかの確認は必要。"
      },
      {
        "id": "d",
        "text": "保守終了後も、次回に備えてすべての一時権限を残す",
        "explanation": "誤り。必要期間を超えた権限を見直し、不要なアクセスを残さない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "S16",
    "topic": "セキュリティ・復旧",
    "level": 3,
    "question": "障害対応後の再発防止策として、最も適切なものはどれか。",
    "answer": "正しい選択肢は「原因に対応する具体策、担当者、期限、効果の確認方法を決める」。",
    "explanation": "人的注意だけでなく、権限・監視・変更手順などの仕組みを改善する。発見から復旧までの記録を次の備えへつなぐ。",
    "example": "設定誤りにはレビューと復旧手順の試験を追加し、次回変更で確認する。",
    "pitfall": "原因未確認のまま担当者の不注意で片付ける。",
    "sources": [
      {
        "title": "NIST SP 800-61 Rev.3：インシデント対応",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "原因に対応する具体策、担当者、期限、効果の確認方法を決める",
        "explanation": "正しい。注意喚起だけでなく、権限・監視・変更手順等の仕組みに反映する。"
      },
      {
        "id": "b",
        "text": "「今後は注意する」とだけ書き、担当と期限は定めない",
        "explanation": "誤り。実行する内容や責任が不明確で、効果を確かめにくい。"
      },
      {
        "id": "c",
        "text": "復旧できたので、発見から復旧までの記録を残さない",
        "explanation": "誤り。記録は原因分析や次の備えの根拠になる。"
      },
      {
        "id": "d",
        "text": "再発していない間は、決めた対策の実施状況を確認しなくてよい",
        "explanation": "誤り。再発がないことだけでは、対策が実施され有効かは分からない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G13",
    "topic": "自治体・制度",
    "level": 2,
    "question": "有効期間内の電子証明書を使った署名を検証する際、適切な対応は？",
    "answer": "失効など、有効期間以外の条件も確認する。",
    "explanation": "証明書は期限前に失効する場合がある。検証失敗時の代替案内も業務設計に含める。",
    "example": "失効していた場合は再発行などの案内へつなぐ。",
    "pitfall": "証明書が画面に表示できたことを有効性の証明にする。",
    "sources": [
      {
        "title": "デジタル庁 公的個人認証サービス",
        "url": "https://www.digital.go.jp/policies/mynumber/private-business/jpki-introduction"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "失効など、有効期間以外の有効性条件も確認する",
        "explanation": "正しい。証明書は期限前に失効する場合がある。検証失敗時の代替案内も業務設計に含める。"
      },
      {
        "id": "b",
        "text": "期限内なら、失効状況は確認せず必ず有効とする",
        "explanation": "誤り。証明書は期限前に失効する場合がある。"
      },
      {
        "id": "c",
        "text": "証明書のファイルが開ければ、有効性の確認は完了したとする",
        "explanation": "誤り。ファイルを読めることと、検証に必要な有効性が成立することは別。"
      },
      {
        "id": "d",
        "text": "検証できないときは、業務を進めるため無条件に受け入れる",
        "explanation": "誤り。失敗時の案内や代替手続を業務設計に含め、勝手に検証を省略しない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M19",
    "topic": "調達・マネジメント",
    "level": 2,
    "question": "電子申請の改善KPIを「電子申請件数」だけにすると、見落としやすいものは？",
    "answer": "利用者の完了率、処理時間、差戻し、職員負担などの成果。",
    "explanation": "件数が増えても庁内で手入力し直しているなら、目的を達成できていないことがある。",
    "example": "オンライン完了率と受付から処理完了までの日数を併せて測る。",
    "pitfall": "機能数をそのまま住民の利便性とみなす。",
    "sources": [
      {
        "title": "政府CIO サービス設計12箇条と確認ポイント",
        "url": "https://cio.go.jp/sites/default/files/uploads/documents/servicedesign_betten1.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "完了率・処理時間・差戻し・職員負担など、業務全体の成果",
        "explanation": "正しい。件数が増えても庁内で手入力し直しているなら、目的を達成できていないことがある。"
      },
      {
        "id": "b",
        "text": "件数が増えれば、庁内での手入力や差戻しの負担も必ず減っている",
        "explanation": "誤り。受付件数と、処理全体の効率・品質は必ずしも一致しない。"
      },
      {
        "id": "c",
        "text": "受付件数だけで、途中で離脱した利用者の割合も直接分かる",
        "explanation": "誤り。完了率には開始数など別の情報が必要である。"
      },
      {
        "id": "d",
        "text": "電子申請を公開した数が同じなら、処理時間も同じと判断できる",
        "explanation": "誤り。機能の数だけでは、業務時間や職員負担を測れない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G15",
    "topic": "自治体・制度",
    "level": 2,
    "question": "紙の申請書をWeb化したが、利用率が低い。次の調査として最も適切なものは？",
    "answer": "利用者が完了できない理由と、庁内処理を含む業務全体の流れ。",
    "explanation": "目的は入力画面を増やすことではない。不要な添付・二重入力・説明不足を見つけて改善する。",
    "example": "スマートフォン利用者に操作してもらい離脱箇所を確認する。",
    "pitfall": "利用率の低さを周知不足だけと決めつける。",
    "sources": [
      {
        "title": "政府CIO サービス設計12箇条と確認ポイント",
        "url": "https://cio.go.jp/sites/default/files/uploads/documents/servicedesign_betten1.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "完了できない理由と、庁内処理を含む業務全体の流れを調べる",
        "explanation": "正しい。目的は入力画面を増やすことではない。不要な添付・二重入力・説明不足を見つけて改善する。"
      },
      {
        "id": "b",
        "text": "入力項目や添付を増やし、紙の様式との見た目の一致だけを優先する",
        "explanation": "誤り。利用者が完了できない原因や、業務上の必要性を先に確かめる。"
      },
      {
        "id": "c",
        "text": "フォームの公開数が増えたため、改善目的は達成済みとする",
        "explanation": "誤り。公開したことと、利用者や職員の負担を減らしたことは同じではない。"
      },
      {
        "id": "d",
        "text": "利用者側だけ調べ、申請後の庁内での二重入力は対象外とする",
        "explanation": "誤り。手続全体での成果を見るには、庁内処理とのつながりも重要である。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M10",
    "topic": "調達・マネジメント",
    "level": 3,
    "question": "Aは2日。A後にB（3日）とC（5日）が並行し、両方終了後にD（1日）を行う。資源制約・待ち時間なしの最短期間は？",
    "answer": "8日。クリティカルパスはA→C→D。",
    "explanation": "2＋max(3,5)＋1＝8日。資源制約や待ち時間がない前提。Bを1日短縮しても全体は短縮しない。",
    "example": "切替準備の長い承認待ちなど、全体を左右する経路に対策を集中する。",
    "pitfall": "並行作業の日数を全部足す。",
    "sources": [
      {
        "title": "Microsoft Manage your project’s critical path",
        "url": "https://support.microsoft.com/en-us/project/manage-your-project-s-critical-path"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "8日",
        "explanation": "正しい。2＋max(3,5)＋1＝8日。資源制約や待ち時間がない前提。Bを1日短縮しても全体は短縮しない。"
      },
      {
        "id": "b",
        "text": "11日",
        "explanation": "誤り。BとCを直列に足している。並行できるので長いCの5日を使う。"
      },
      {
        "id": "c",
        "text": "6日",
        "explanation": "誤り。短いBの経路だけを見ている。DはCも終わるまで始められない。"
      },
      {
        "id": "d",
        "text": "7日",
        "explanation": "誤り。AとCだけの合計で、最後のDの1日が必要である。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G17",
    "topic": "自治体・制度",
    "level": 2,
    "question": "自治体サイトの規約が二次利用を認めている。外部から提供された写真の扱いとして、適切なものは？",
    "answer": "第三者の権利や個別法令などの制約を確認する。",
    "explanation": "公共データ利用規約でも第三者の権利への配慮が必要。公開時には権利の所在を整理する。",
    "example": "委託写真の公開・再利用の許諾範囲を確認する。",
    "pitfall": "サイト全体の規約が個別写真の権利まで消すと考える。",
    "sources": [
      {
        "title": "デジタル庁 公共データ利用規約 第1.0版",
        "url": "https://www.digital.go.jp/resources/open_data/public_data_license_v1.0"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "第三者の権利や個別法令などによる制約を確認する",
        "explanation": "正しい。公共データ利用規約でも第三者の権利への配慮が必要。公開時には権利の所在を整理する。"
      },
      {
        "id": "b",
        "text": "サイト全体の規約があれば、写真の第三者の権利は確認しない",
        "explanation": "誤り。第三者が保有する権利まで無条件に許諾できるわけではない。"
      },
      {
        "id": "c",
        "text": "出典名を書けば、あらゆる写真を無条件で再配布できる",
        "explanation": "誤り。出典表記だけでは必要な権利確認や許諾を代替できない。"
      },
      {
        "id": "d",
        "text": "自治体サイトに掲載された時点で、第三者の権利は自動的に消滅する",
        "explanation": "誤り。掲載の事実だけで著作権等がなくなることはない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M11",
    "topic": "調達・マネジメント",
    "level": 3,
    "question": "EVMでPV=100万円、EV=80万円、AC=90万円。SPIとCPI、および判断として正しいものは？",
    "answer": "SPI=0.80、CPI≈0.89。計画より進みが遅く、出来高に対して費用超過。",
    "explanation": "SPI=EV÷PV、CPI=EV÷AC。予算を使っていないことだけで順調とは言えない。出来高の基準を揃える必要がある。",
    "example": "支払額だけでなく受入れ済み成果の価値を追う。",
    "pitfall": "ACがPVより少ないのでコスト面も順調だと即断する。",
    "sources": [
      {
        "title": "PMI Project management from the middle（EVM）",
        "url": "https://www.pmi.org/learning/library/project-management-middle-five-stages-6969"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "SPI=0.80、CPI≈0.89。進捗は遅れ、出来高に対して費用超過",
        "explanation": "正しい。SPI=EV÷PV、CPI=EV÷AC。予算を使っていないことだけで順調とは言えない。出来高の基準を揃える必要がある。"
      },
      {
        "id": "b",
        "text": "SPI=1.25、CPI=1.125で、計画より進みが早く費用効率もよい",
        "explanation": "誤り。分子と分母を逆にしている。両指標ともEVを分子に置く。"
      },
      {
        "id": "c",
        "text": "SPI=0.90、CPI=0.80で、支出の少なさが進捗を表す",
        "explanation": "誤り。SPIはEV/PV、CPIはEV/AC。AC/PVを進捗とみなさない。"
      },
      {
        "id": "d",
        "text": "ACがPVより少ないため、SPI・CPIに関係なく順調である",
        "explanation": "誤り。支出が少ないのは作業が進んでいないためかもしれず、出来高と比較する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G18",
    "topic": "自治体・制度",
    "level": 2,
    "question": "部門ごとの住所データを連携するときに起きる問題と、その理由として適切なものは？",
    "answer": "表記・コード・更新時期が異なり、同じ対象を一致させにくくなるから。",
    "explanation": "共通参照するデータの出所と更新方法を決める。ベース・レジストリは制度をまたぐ基本データの基盤という考え方。",
    "example": "住所文字列だけで突合せず適切なコードと変更履歴を管理する。",
    "pitfall": "空白を消せば住所データは必ず一致すると考える。",
    "sources": [
      {
        "title": "デジタル庁 ベース・レジストリ",
        "url": "https://www.digital.go.jp/policies/base_registry"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "表記・コード・更新時期の違いで、同じ対象を一致させにくくなる",
        "explanation": "正しい。共通参照するデータの出所と更新方法を決める。ベース・レジストリは制度をまたぐ基本データの基盤という考え方。"
      },
      {
        "id": "b",
        "text": "同じ項目名が付いていれば、表記・コード・更新時期の確認は不要である",
        "explanation": "誤り。同じ名称でも内容や更新タイミングが異なる場合がある。"
      },
      {
        "id": "c",
        "text": "住所の文字列を単純比較すれば、必ず同じ対象を一致させられる",
        "explanation": "誤り。表記の揺れ、コード体系の差、更新差分によって一致しないことがある。"
      },
      {
        "id": "d",
        "text": "共通データの出所を決めれば、以後の更新方法は不要である",
        "explanation": "誤り。どの時点のどのデータを使うか、更新を継続して管理する必要がある。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M13",
    "topic": "調達・マネジメント",
    "level": 3,
    "question": "今100万円を投資し、1年後に110万円の便益を得る。割引率5%のNPVとして正しいものは？",
    "answer": "約4.76万円。110÷1.05−100。",
    "explanation": "将来便益を現在価値に直し現在の費用を引く。正のNPVはこの前提で経済性があることを示すが、公共サービスの必要性は金額だけでは決めない。",
    "example": "複数年度の費用削減を発生時期も踏まえて評価する。",
    "pitfall": "将来110万円と現在100万円を時間差を無視して比較する。",
    "sources": [
      {
        "title": "環境省 手引き：正味現在価値の考え方",
        "url": "https://www.env.go.jp/content/900546315.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "約4.76万円",
        "explanation": "正しい。将来便益を現在価値に直し現在の費用を引く。正のNPVはこの前提で経済性があることを示すが、公共サービスの必要性は金額だけでは決めない。"
      },
      {
        "id": "b",
        "text": "10万円",
        "explanation": "誤り。将来便益を割り引かず、単純に110−100としている。"
      },
      {
        "id": "c",
        "text": "15.5万円",
        "explanation": "誤り。110×1.05−100として将来便益を増やしている。現在価値への換算では割る。"
      },
      {
        "id": "d",
        "text": "−5万円",
        "explanation": "誤り。便益110万円を現在価値へ換算していない。110÷1.05−100を計算する。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G19",
    "topic": "自治体・制度",
    "level": 2,
    "question": "業務に使うデータの品質評価として、適切なものは？",
    "answer": "正確性に加え、欠落・重複・更新時期・用途への適合も確認する。",
    "explanation": "目的により重要な品質は変わる。全件整っていても、避難所の開設情報が古ければ役立たない。",
    "example": "更新時刻と責任者を持ち、未更新を検知する。",
    "pitfall": "件数が多ければ高品質だと思う。",
    "sources": [
      {
        "title": "AISI データ品質マネジメントガイドブック",
        "url": "https://aisi.go.jp/output/output_framework/data_quality_management_guidebook/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "正確性に加え、欠落・重複・鮮度・用途への適合を確認する",
        "explanation": "正しい。目的により重要な品質は変わる。全件整っていても、避難所の開設情報が古ければ役立たない。"
      },
      {
        "id": "b",
        "text": "誤字さえなければ、更新が古くても高品質と判断する",
        "explanation": "誤り。例えば避難所の情報は鮮度が重要であり、用途に応じた品質を見る。"
      },
      {
        "id": "c",
        "text": "値が全セルに入っていれば、重複や意味の誤りは確認しない",
        "explanation": "誤り。欠落がないことと、正確・一意・適切であることは別。"
      },
      {
        "id": "d",
        "text": "すべての業務で、同じ一項目だけを品質指標にする",
        "explanation": "誤り。重要な品質の側面はデータの利用目的によって異なる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "M20",
    "topic": "調達・マネジメント",
    "level": 3,
    "question": "システム監査における確認方法について、誤っているものは？",
    "answer": "「担当者が「毎月確認している」と言えば、証拠は一切不要である」が誤り。説明の内容を裏付け、統制の有効性を確かめる証拠が必要である。",
    "explanation": "ルールの存在と実際に機能していることを分ける。監査の独立性・客観性にも配慮する。",
    "example": "権限棚卸し記録と、指摘された不要権限の削除結果を照合する。",
    "pitfall": "規程が整備済みなら運用上の不備はないと判断する。",
    "sources": [
      {
        "title": "IPA APシラバス Ver.7.2（学習範囲）",
        "url": "https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "記録等の証拠を使い、実際の実施状況を確かめる",
        "explanation": "正しい説明。説明だけでなく、確認できる資料や実績と照合する。"
      },
      {
        "id": "b",
        "text": "ルールの存在と、そのルールが実際に機能していることを区別する",
        "explanation": "正しい説明。文書があっても運用されていない場合がある。"
      },
      {
        "id": "c",
        "text": "監査の独立性や客観性に配慮する",
        "explanation": "正しい説明。偏りを抑え、根拠に基づく評価を行うために重要。"
      },
      {
        "id": "d",
        "text": "担当者が「毎月確認している」と言えば、証拠は一切不要である",
        "explanation": "誤り。説明の内容を裏付け、統制の有効性を確かめる証拠が必要である。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "G22",
    "topic": "自治体・制度",
    "level": 2,
    "question": "UTF-8のBOMに関する説明で、誤っているものは？",
    "answer": "「UTF-8はBOMがないと常に文字化けし、仕様上も不正である」が誤り。BOMは必須ではない。受け手の期待する形式を確認して合わせる。",
    "explanation": "UTF-8ではBOMはバイト順指定ではなく符号化方式の目印として使われることがある。先頭にあることで不具合を起こす受け手もある。",
    "example": "CSVの最初の列名だけ一致しないとき、先頭のBOMを原因候補にする。",
    "pitfall": "BOM付きが常に正しく、BOMなしが不正と決めつける。",
    "sources": [
      {
        "title": "Unicode Consortium UTF FAQ",
        "url": "https://www.unicode.org/faq/utf_bom.html"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "UTF-8のファイルにBOMが必須というわけではない",
        "explanation": "正しい説明。BOMなしのUTF-8も扱われる。"
      },
      {
        "id": "b",
        "text": "取込先がBOMの有無をどう扱うか確認する",
        "explanation": "正しい説明。BOMを認識するか、先頭の値として誤解釈するか等に注意する。"
      },
      {
        "id": "c",
        "text": "UTF-8ではBOMが符号化方式の目印として使われることがある",
        "explanation": "正しい説明。UTF-8自体にバイト順の選択が必要なわけではない。"
      },
      {
        "id": "d",
        "text": "UTF-8はBOMがないと常に文字化けし、仕様上も不正である",
        "explanation": "誤り。BOMは必須ではない。受け手の期待する形式を確認して合わせる。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "G23",
    "topic": "自治体・制度",
    "level": 2,
    "question": "外字を別システムへ移す際の確認として、適切なものは？",
    "answer": "私用領域では対応が環境ごとに異なり得る。文字の同定結果・対応表・フォントを確認する。",
    "explanation": "行政事務標準文字への対応を整理することは、単なるファイル変換とは違う。適用する文字仕様と判断記録を揃える。",
    "example": "旧コード、新しい文字の識別情報、確認した字形、判断結果を対応表で保存する。",
    "pitfall": "見た目が近い字へ担当者の判断だけで一括置換する。",
    "sources": [
      {
        "title": "デジタル庁 地方公共団体情報システムにおける文字の標準化",
        "url": "https://www.digital.go.jp/policies/local_governments/character-specification"
      },
      {
        "title": "補助読物：自治体情シスの教科書 文字の標準化（合同会社Pons・羽鳥達郎）",
        "url": "https://sysad.pons-llc.com/ep/chr4/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "文字の同定結果、コードの対応表、フォントを確認する",
        "explanation": "正しい。行政事務標準文字への対応を整理することは、単なるファイル変換とは違う。適用する文字仕様と判断記録を揃える。"
      },
      {
        "id": "b",
        "text": "コード番号が一致すれば、環境が違っても文字は必ず同じとする",
        "explanation": "誤り。私用領域の対応は環境ごとに異なり得る。"
      },
      {
        "id": "c",
        "text": "フォントの見た目が似ていれば、文字の同定結果を記録しなくてよい",
        "explanation": "誤り。見た目だけでは対応の意味や判断根拠を後から追えない。"
      },
      {
        "id": "d",
        "text": "ファイルの拡張子を変えれば、行政事務標準文字への対応付けも完了する",
        "explanation": "誤り。文字の同定や仕様への対応は、単なるファイル変換とは異なる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G24",
    "topic": "自治体・制度",
    "level": 2,
    "question": "施設一覧CSVの一つのセルに、住所・電話・開館時間をまとめている。再利用しやすくする改善は？",
    "answer": "項目ごとの検索・集計・連携が難しくなる。意味の異なる項目は分け、列定義を示す。",
    "explanation": "CSVという拡張子だけでは再利用性は保証されない。文字コード、列名、単位、更新日、欠損の意味も揃える。",
    "example": "住所列と電話列を分け、電話番号は先頭の0が消えないよう文字列として取り込む。",
    "pitfall": "見やすい帳票のセル配置を、そのままデータ交換形式にする。",
    "sources": [
      {
        "title": "デジタル庁 オープンデータ",
        "url": "https://www.digital.go.jp/resources/open_data"
      },
      {
        "title": "IPA 情報共有基盤",
        "url": "https://imi.ipa.go.jp/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "意味の異なる項目を列に分け、列定義を示す",
        "explanation": "正しい。CSVという拡張子だけでは再利用性は保証されない。文字コード、列名、単位、更新日、欠損の意味も揃える。"
      },
      {
        "id": "b",
        "text": "拡張子がCSVであるため、項目の構造は改善しない",
        "explanation": "誤り。CSV形式でも、意味の異なる値が混在すると検索・集計しにくい。"
      },
      {
        "id": "c",
        "text": "見やすさを優先し、列の意味は色だけで区別する",
        "explanation": "誤り。CSVは一般に色の書式を持たず、項目の意味を機械が判断する根拠にもならない。"
      },
      {
        "id": "d",
        "text": "更新日や欠損値の意味を省略し、データだけ提供する",
        "explanation": "誤り。値の解釈や鮮度が分からないと適切な再利用が難しくなる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G25",
    "topic": "自治体・制度",
    "level": 2,
    "question": "データ公開と再利用ライセンスに関する説明で、誤っているものは？",
    "answer": "「再利用ライセンスを付ければ、個人情報を公開してよい根拠も自動的に得られる」が誤り。利用許諾は、個人情報等を公開してよいという法的根拠の代わりにならない。",
    "explanation": "ライセンスは利用許諾の条件であり、個人情報や第三者の権利を自由に公開する根拠にはならない。",
    "example": "少人数集計から個人が推測されないかを公開前に確認し、その後に適切な利用条件を示す。",
    "pitfall": "「オープン化」が個人情報や秘密情報の無制限公開だと思う。",
    "sources": [
      {
        "title": "デジタル庁 公共データ利用規約",
        "url": "https://www.digital.go.jp/resources/open_data/public_data_license_v1.0"
      },
      {
        "title": "個人情報保護委員会 行政機関等編",
        "url": "https://www.ppc.go.jp/personalinfo/legal/guidelines_administrative/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "incorrect",
    "choices": [
      {
        "id": "a",
        "text": "そもそも公開してよい情報かを確認する必要がある",
        "explanation": "正しい説明。個人情報や第三者の権利など、公開可否を別途判断する。"
      },
      {
        "id": "b",
        "text": "ライセンスは、公開された資料の利用条件を定めるものである",
        "explanation": "正しい説明。公開の適法性を自動的に与えるものではない。"
      },
      {
        "id": "c",
        "text": "公開可否の判断と、公開後の利用条件は分けて確認する",
        "explanation": "正しい説明。二つは関係するが同一の判断ではない。"
      },
      {
        "id": "d",
        "text": "再利用ライセンスを付ければ、個人情報を公開してよい根拠も自動的に得られる",
        "explanation": "誤り。利用許諾は、個人情報等を公開してよいという法的根拠の代わりにならない。"
      }
    ],
    "correctChoice": "d"
  },
  {
    "id": "G26",
    "topic": "自治体・制度",
    "level": 2,
    "question": "自己申告で作ったアカウントにメールアドレスとパスワードでログインできた。氏名・住所の確認について正しい判断は？",
    "answer": "アカウントの当人認証と、実在する本人の身元確認は別。",
    "explanation": "自己申告だけで登録したアカウントに強いログイン認証を付けても、申告情報の正確さまで保証されない。手続のリスクに応じて必要な確認を決める。",
    "example": "補助申請の要件に必要な身元確認を、単なるメール到達確認で代用しない。",
    "pitfall": "多要素認証があれば申告された氏名も必ず正しいと考える。",
    "sources": [
      {
        "title": "デジタル庁 本人確認の構成要素（2025年説明資料）",
        "url": "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5a5c145f-85f4-41a5-bc51-4e442c6154b8/4c7ac849/20250310_meeting_verifiable-credential-governance_outline_04.pdf"
      }
    ],
    "checked": "2026-11-03",
    "kind": "技術基礎",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "当人認証と身元確認を区別し、申告された氏名・住所の根拠を確認する",
        "explanation": "正しい。自己申告だけで登録したアカウントに強いログイン認証を付けても、申告情報の正確さまで保証されない。手続のリスクに応じて必要な確認を決める。"
      },
      {
        "id": "b",
        "text": "ログイン成功だけで、公的に確認された氏名・住所だと保証できる",
        "explanation": "誤り。アカウントの認証と、登録内容の身元確認は別である。"
      },
      {
        "id": "c",
        "text": "パスワードを長くすれば、自己申告の住所の正確さも保証できる",
        "explanation": "誤り。認証強度を上げても、元の申告情報の確かさは変わらない。"
      },
      {
        "id": "d",
        "text": "メールアドレスを受信できれば、全手続で身元確認を省略できる",
        "explanation": "誤り。メールを管理していることと、手続に必要な本人の確認は同一ではない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G20",
    "topic": "自治体・制度",
    "level": 3,
    "question": "政府向けの標準ガイドラインを自治体の調達で参考にする場合、適切な対応は？",
    "answer": "参考にできる内容と、自団体で適用される法令・規程・承認手続を分ける。",
    "explanation": "国の内部手続をそのまま自治体の義務とみなさない。契約担当・業務担当と適用範囲を確かめる。",
    "example": "政府向けテンプレートを団体の決裁・検査手続へ合わせる。",
    "pitfall": "「国の文書だから全項目が自治体にも直接義務」と扱う。",
    "sources": [
      {
        "title": "デジタル庁 標準ガイドライン群（政府向け、自治体では参考）",
        "url": "https://www.digital.go.jp/resources/standard_guidelines"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "参考にできる内容と、自団体で適用される制度・規程を分ける",
        "explanation": "正しい。国の内部手続をそのまま自治体の義務とみなさない。契約担当・業務担当と適用範囲を確かめる。"
      },
      {
        "id": "b",
        "text": "国の内部承認手続を、確認せず自治体にもそのまま必須とする",
        "explanation": "誤り。参考資料と、自団体に適用される制度や規程を区別する。"
      },
      {
        "id": "c",
        "text": "国の資料なら、自団体の契約担当や業務担当への確認を省く",
        "explanation": "誤り。実際の契約・予算・業務条件と整合するか関係者と確認する。"
      },
      {
        "id": "d",
        "text": "自団体の規程にない内容は、すべて役に立たないとして読まない",
        "explanation": "誤り。参考にできる設計・管理の考え方と、義務としての適用は分けて検討できる。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G27",
    "topic": "自治体・制度",
    "level": 3,
    "question": "締切前夜の電子申請を、職員が翌朝開いた。到達時刻を判断する対応として、最も適切なものは？",
    "answer": "適用法令・条例等の到達規定と、該当するシステム記録を確認する。",
    "explanation": "デジタル行政推進法6条3項は、受ける行政機関等の使用に係る電子計算機のファイルへの記録を到達時点とする。どの手続・記録に適用されるかは業務・法規担当と確認する。",
    "example": "送信、サーバ記録、職員閲覧の各時刻を区別し、期限判定に使う記録を決める。",
    "pitfall": "受付メール、法的到達、審査完了を同じ状態と扱う。",
    "sources": [
      {
        "title": "e-Gov デジタル行政推進法 第6条（参照版2026年5月1日）",
        "url": "https://laws.e-gov.go.jp/law/414AC0000000151?occasion_date=20260501"
      },
      {
        "title": "補助読物：自治体情シスの教科書 電子申請の到達（合同会社Pons・羽鳥達郎）",
        "url": "https://sysad.pons-llc.com/ep/law3/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "適用法令・条例等の到達規定と、それに対応するシステム記録を確認する",
        "explanation": "正しい。デジタル行政推進法6条3項は、受ける行政機関等の使用に係る電子計算機のファイルへの記録を到達時点とする。どの手続・記録に適用されるかは業務・法規担当と確認する。"
      },
      {
        "id": "b",
        "text": "職員が初めて開いた翌朝を、適用規定に関係なく到達時刻とする",
        "explanation": "誤り。職員の閲覧時刻だけでは決めず、適用される到達規定を確認する。"
      },
      {
        "id": "c",
        "text": "申請者が送信ボタンを押した時刻を、どの手続でも無条件に到達時刻とする",
        "explanation": "誤り。送信操作と受け手側の記録は別であり、適用法令・条例等によって確認する。"
      },
      {
        "id": "d",
        "text": "自動返信メールの時刻だけを見れば、システム記録や法規の確認は不要である",
        "explanation": "誤り。メール通知の時点と法令上の到達は必ずしも同じとは限らない。"
      }
    ],
    "correctChoice": "a"
  },
  {
    "id": "G28",
    "topic": "自治体・制度",
    "level": 3,
    "question": "電子申請データを基幹システムへ自動連携する設計で、適切な対応は？",
    "answer": "項目対応、コード、対象者の照合、重複、エラー、再処理、担当を設計する。",
    "explanation": "通信成功でも業務データが正しく登録されたとは限らない。受領件数と処理結果を追跡できるようにする。実際の方式や経路は団体・サービスで異なる。",
    "example": "再送で同じ申請を二重登録しない識別子を用意し、取込失敗は担当へ通知する。",
    "pitfall": "HTTP成功やファイル送信成功をもって業務登録完了とみなす。",
    "sources": [
      {
        "title": "デジタル庁 行政手続のオンライン化",
        "url": "https://www.digital.go.jp/policies/administrative_procedures_online"
      },
      {
        "title": "補助読物：自治体情シスの教科書 基幹システムへの渡し方（合同会社Pons・羽鳥達郎）",
        "url": "https://sysad.pons-llc.com/ep/myna3/"
      }
    ],
    "checked": "2026-11-03",
    "kind": "制度・運用",
    "visual": {
      "title": "申請の受領と業務処理を分けて追う",
      "steps": [
        "申請データを受領",
        "形式・項目・対象者を確認",
        "基幹システムへ取込み",
        "件数・結果を照合",
        "失敗を記録して再処理"
      ],
      "caption": "一般的な連携設計例。実際の経路・審査順・権限は個別に確認する。"
    },
    "mode": "correct",
    "choices": [
      {
        "id": "a",
        "text": "項目・コード・照合・重複・エラー・再処理と担当を設計する",
        "explanation": "正しい。通信成功でも業務データが正しく登録されたとは限らない。受領件数と処理結果を追跡できるようにする。実際の方式や経路は団体・サービスで異なる。"
      },
      {
        "id": "b",
        "text": "APIの通信が成功すれば、業務データも必ず正しく登録されたとする",
        "explanation": "誤り。通信と、データ項目・対象者・業務処理の正しさは別に確認する。"
      },
      {
        "id": "c",
        "text": "失敗したデータを無条件で再送すれば、重複の検討は不要である",
        "explanation": "誤り。処理済みの可能性を考え、重複判定や安全な再処理を設計する。"
      },
      {
        "id": "d",
        "text": "項目名が一致していれば、コードや文字の仕様は確認しない",
        "explanation": "誤り。同じ名前でも意味や値の体系が違う場合がある。"
      }
    ],
    "correctChoice": "a"
  }
];
