export const mockCases = [
  {
    id: "breast-001",
    title: "Breast Cancer — Stage II, ER+/HER2-",
    cancerType: "Breast",
    reviewStatus: "reviewed",
    patientOverview: {
      displayName: "Alex M. (Demo)",
      age: 52,
      sex: "Female",
      diagnosis: "Invasive ductal carcinoma, left breast",
      stage: "Stage IIA (clinical)",
      careTeam: "Dr. Rivera (Medical Oncology), Dr. Chen (Surgery)",
      lastUpdated: "2026-05-10",
    },
    uploadedFiles: [
      { name: "Pathology_Report_Breast_Biopsy.pdf", type: "Pathology", uploadedAt: "2026-04-28", pages: 6 },
      { name: "MRI_Breast_Left.pdf", type: "Imaging", uploadedAt: "2026-04-30", pages: 12 },
      { name: "OncotypeDX_Recurrence_Score.pdf", type: "Genomic", uploadedAt: "2026-05-02", pages: 4 },
      { name: "Visit_Notes_Initial_Consult.pdf", type: "Clinical Notes", uploadedAt: "2026-05-05", pages: 3 },
    ],
    extractedFacts: [
      "Tumor ~2.1 cm in left breast on imaging",
      "Biopsy: invasive ductal carcinoma, grade 2",
      "Estrogen receptor positive, progesterone receptor positive, HER2 negative",
      "Ki-67 reported as intermediate on pathology",
      "Oncotype DX recurrence score in intermediate range (mock value: 18)",
      "No distant metastases described on available staging workup",
    ],
    aiModels: [
      {
        id: "onco-insight",
        name: "OncoInsight Pro",
        version: "v2.4",
        confidence: "Medium-High",
        summary:
          "Documents are consistent with early-stage hormone receptor-positive breast cancer. Genomic risk appears intermediate; adjuvant chemotherapy benefit may be borderline and often discussed alongside endocrine therapy. Surgical options may include breast-conserving surgery with radiation versus mastectomy depending on tumor size, location, and patient preference.",
        keyPoints: [
          "Favors endocrine therapy discussion for ER+ disease",
          "Suggests multidisciplinary tumor board review",
          "Notes intermediate proliferation marker — interpretation may vary",
        ],
      },
      {
        id: "path-ai",
        name: "PathAI Navigator",
        version: "v1.8",
        confidence: "Medium",
        summary:
          "Pathology supports invasive ductal carcinoma with intermediate-grade features. Receptor panel supports luminal-type biology. Recommends confirming Ki-67 methodology and whether additional receptor re-testing is needed if blocks are limited.",
        keyPoints: [
          "Grade 2 morphology highlighted",
          "HER2 negative by stated assay",
          "Suggests correlation with imaging size",
        ],
      },
      {
        id: "care-map",
        name: "CareMap Oncology",
        version: "v3.1",
        confidence: "Medium",
        summary:
          "Staging appears localized without documented distant spread. Timeline suggests sequencing surgery, adjuvant systemic therapy, and radiation when breast conservation is pursued. Patient-facing priorities: fertility discussion if relevant, symptom monitoring during endocrine therapy, and cardiac baseline if certain agents are considered later.",
        keyPoints: [
          "Localized disease framework",
          "Radiation may follow lumpectomy",
          "Survivorship and bone health counseling flagged for later visits",
        ],
      },
    ],
    doctorReview: {
      reviewer: "Dr. Rivera, MD",
      reviewedAt: "2026-05-12",
      concurrence: "partial",
      concurrenceLabel: "Partially concurs",
      notes: [
        "Agree with ER+/HER2- characterization and localized staging based on current records.",
        "Oncotype score is useful but should be interpreted with tumor size and patient comorbidities — not a standalone decision tool.",
        "Disagree with implied certainty about chemotherapy omission; will discuss risks and benefits in visit.",
        "MRI size and pathology size differ slightly — will reconcile before final surgical plan.",
      ],
      agreedWith: [
        "Hormone receptor-positive biology and HER2-negative status",
        "Multidisciplinary planning before final treatment plan",
        "Need for shared decision-making on surgery type",
      ],
      disagreedWith: [
        "Any suggestion that chemotherapy can be ruled out without full clinical context",
        "High confidence on exact radiation fields before surgical margins are known",
      ],
    },
    uncertainties: [
      "Final surgical margins not yet available",
      "Whether genomic score changes systemic therapy recommendations after full staging",
      "Long-term side effect profile for proposed endocrine therapy in this patient",
    ],
    nextDiscussionPoints: [
      "Lumpectomy plus radiation vs. mastectomy — tradeoffs and recovery",
      "Whether chemotherapy is likely to add benefit alongside endocrine therapy",
      "Timeline for treatment start and fertility preservation if desired",
      "Managing hot flashes, bone health, and follow-up imaging schedule",
    ],
    eli5Summary: {
      yourCaseInSimpleWords:
        "Your records describe a breast cancer that appears to be in an early stage and has not been described as having spread to distant parts of the body. The cancer cells tested positive for hormone receptors (which can guide certain types of medicine) and negative for HER2 (a different target). Your care team is still finishing plans for surgery and other treatments.",
      whatReportsSeemToShow:
        "The biopsy report describes invasive ductal carcinoma (a common type of breast cancer). Imaging suggests a tumor around 2 cm. A genomic test (Oncotype DX) gave an intermediate recurrence score in this demo — meaning it may help your doctor discuss how much benefit additional medicine might offer, but it is not a yes/no answer by itself.",
      whatAiToolsNoticed:
        "The demo AI tools generally agreed on hormone receptor-positive, HER2-negative biology and early-stage, localized disease. They raised topics your doctor may discuss: surgery choices, endocrine (hormone-blocking) therapy, possible chemotherapy depending on your full picture, and radiation if breast-conserving surgery is chosen.",
      whatDoctorAgreedWith:
        "Dr. Rivera partially agreed with the AI summaries. They confirmed the receptor pattern and localized staging based on current files, and supported multidisciplinary planning. They emphasized that treatment choices should be made with you in person, not from the AI text alone.",
      whatIsStillUncertain:
        "Final surgery results (margins) are not in these files yet. It is not fully settled how much chemotherapy might help until your doctor weighs tumor size, health history, and the genomic score together. Small differences between MRI and pathology measurements are still being reconciled.",
      possibleNextSteps:
        "Your doctor may discuss lumpectomy with radiation versus mastectomy, whether chemotherapy is appropriate, when to start endocrine therapy, and what follow-up scans or blood work to expect. These are conversation topics — not instructions for you to follow on your own.",
      medicalWordsExplained: [
        { term: "ER+/PR+", meaning: "The cancer may respond to medicines that block estrogen or progesterone signals." },
        { term: "HER2-negative", meaning: "HER2-targeted drugs are not typically used based on this result." },
        { term: "Oncotype DX", meaning: "A lab test that estimates risk of recurrence; it can inform discussions about chemotherapy." },
        { term: "Adjuvant therapy", meaning: "Treatment given after the main cancer treatment to lower risk of return." },
      ],
      questionsToAsk: [
        "Based on my full picture, what are the realistic benefits and downsides of chemotherapy for me?",
        "If I choose lumpectomy, what does radiation involve and for how long?",
        "What side effects should I watch for with endocrine therapy, and how will we manage them?",
        "When will we know final pathology after surgery, and could that change the plan?",
      ],
      disclaimer:
        "This summary is for education only, uses fictional demo data, and is not medical advice. It does not tell you what treatment to choose. Please review everything with your oncology care team before making decisions.",
    },
  },
  {
    id: "lung-002",
    title: "Non-Small Cell Lung Cancer — Stage IIIA",
    cancerType: "Lung",
    reviewStatus: "needs_review",
    patientOverview: {
      displayName: "Jordan K. (Demo)",
      age: 64,
      sex: "Male",
      diagnosis: "Non-small cell lung cancer (adenocarcinoma), right upper lobe",
      stage: "Stage IIIA (locally advanced, per demo records)",
      careTeam: "Dr. Patel (Thoracic Oncology), Dr. Okonkwo (Radiation Oncology)",
      lastUpdated: "2026-05-08",
    },
    uploadedFiles: [
      { name: "CT_Chest_Staging.pdf", type: "Imaging", uploadedAt: "2026-04-20", pages: 18 },
      { name: "PET_CT_WholeBody.pdf", type: "Imaging", uploadedAt: "2026-04-22", pages: 24 },
      { name: "Bronchoscopy_Pathology.pdf", type: "Pathology", uploadedAt: "2026-04-25", pages: 8 },
      { name: "PDL1_and_Molecular_Panel.pdf", type: "Genomic", uploadedAt: "2026-04-27", pages: 5 },
      { name: "Pulmonary_Function_Tests.pdf", type: "PFT", uploadedAt: "2026-05-01", pages: 6 },
    ],
    extractedFacts: [
      "Primary mass in right upper lobe ~4.2 cm on CT (demo)",
      "Mediastinal lymph node involvement reported on PET (mock SUV elevation)",
      "Histology: adenocarcinoma",
      "PD-L1 tumor proportion score 40% (demo)",
      "No EGFR or ALK alterations on mock panel",
      "PFTs show mild reduction in FEV1 — surgical candidacy may need discussion",
    ],
    aiModels: [
      {
        id: "onco-insight",
        name: "OncoInsight Pro",
        version: "v2.4",
        confidence: "Medium",
        summary:
          "Locally advanced NSCLC with nodal involvement. Concurrent chemoradiation is a common framework for unresectable or borderline-resectable IIIA disease; surgical resection may be considered after induction therapy in selected cases. Immunotherapy maintenance may be discussed if eligible after chemoradiation depending on regimen and guidelines at time of care.",
        keyPoints: [
          "Stage III multidisciplinary planning emphasized",
          "PD-L1 40% may inform immunotherapy discussions later",
          "Surgical candidacy unclear without full nodal mapping",
        ],
      },
      {
        id: "thorax-ai",
        name: "ThoraxAI Review",
        version: "v2.0",
        confidence: "Low-Medium",
        summary:
          "Imaging suggests central mass with mediastinal nodes. Recommends confirming N2 vs N3 disease with EBUS or mediastinoscopy if not already done. Pulmonary function may limit aggressive surgery — lung-sparing approaches and radiation volumes should be coordinated.",
        keyPoints: [
          "Nodal stage verification flagged",
          "Airway proximity noted on CT descriptors",
          "PFT borderline for lobectomy in demo narrative",
        ],
      },
      {
        id: "care-map",
        name: "CareMap Oncology",
        version: "v3.1",
        confidence: "Medium",
        summary:
          "Patient may benefit from nutrition, smoking cessation support if applicable, and early palliative care integration for symptom control during intensive therapy. Suggests proactive management of esophagitis risk during radiation and monitoring for pneumonitis.",
        keyPoints: [
          "Supportive care during chemoradiation",
          "Symptom monitoring during treatment",
          "Clinical trial screening suggested",
        ],
      },
    ],
    doctorReview: {
      reviewer: "Dr. Patel, MD",
      reviewedAt: "2026-05-09",
      concurrence: "pending",
      concurrenceLabel: "Review in progress",
      notes: [
        "AI summaries are directionally reasonable but nodal staging must be confirmed with our EBUS results pending.",
        "Will not commit to surgical resection until restaging after induction — too early to promise operability.",
        "PD-L1 result will be used in context of overall plan; not a standalone immunotherapy decision today.",
      ],
      agreedWith: [
        "Need for thoracic oncology + radiation oncology joint planning",
        "Importance of pulmonary rehab and symptom support",
      ],
      disagreedWith: [
        "Implied treatment pathway stated as definitive before tumor board",
        "High confidence language about resection eligibility",
      ],
    },
    uncertainties: [
      "Final nodal stage (N2 vs N3) pending additional staging procedures in demo timeline",
      "Whether patient is a candidate for surgery after induction therapy",
      "Exact chemoradiation regimen and immunotherapy sequencing still under tumor board review",
    ],
    nextDiscussionPoints: [
      "Goals of care and treatment intensity — benefits, risks, and time commitment",
      "What concurrent chemoradiation involves and common side effects",
      "Whether clinical trials are available at this center",
      "Shortness of breath management and pulmonary rehabilitation",
    ],
    eli5Summary: {
      yourCaseInSimpleWords:
        "Your demo records describe a type of lung cancer called non-small cell lung cancer (adenocarcinoma) in the right upper part of the lung. It is considered locally advanced, meaning it may involve nearby lymph nodes in the chest. Your doctors are still confirming exact staging and the best order of treatments.",
      whatReportsSeemToShow:
        "CT and PET scans in this demo describe a mass around 4 cm and activity in mediastinal lymph nodes. Pathology supports adenocarcinoma. A PD-L1 test reads 40% in the mock data — this is one piece of information that may matter for some immunotherapy discussions later, but only your care team can place it in your full plan.",
      whatAiToolsNoticed:
        "AI tools highlighted multidisciplinary planning, possible chemoradiation for locally advanced disease, and uncertainty about surgery until more tests and restaging occur. They also mentioned supportive care for breathing symptoms and treatment side effects.",
      whatDoctorAgreedWith:
        "Dr. Patel noted the AI write-ups are generally reasonable but too confident about surgery and final pathways. They agreed on team-based planning and supportive care. They marked review as still in progress — treat AI sections as drafts until your visit.",
      whatIsStillUncertain:
        "Exact lymph node stage may still need confirmation. It is not yet known whether surgery will be possible after initial treatment. The full chemoradiation and immunotherapy plan may change after tumor board discussion.",
      possibleNextSteps:
        "Your doctor may discuss chemoradiation timing, additional staging procedures, clinical trials, and ways to manage fatigue, swallowing discomfort during radiation, and breathing symptoms. These are topics for shared decision-making, not self-directed treatment steps.",
      medicalWordsExplained: [
        { term: "NSCLC", meaning: "Non-small cell lung cancer — a common group of lung cancers." },
        { term: "Stage IIIA", meaning: "Locally advanced cancer that may involve regional lymph nodes; definitions can vary." },
        { term: "PD-L1", meaning: "A protein on some cancer cells; doctors may use the score with other factors when considering immunotherapy." },
        { term: "Chemoradiation", meaning: "Chemotherapy given together with radiation therapy, often on a fixed schedule." },
      ],
      questionsToAsk: [
        "What is my exact nodal stage, and what tests are still needed?",
        "What does chemoradiation look like week by week, and what side effects should I report right away?",
        "Under what conditions might surgery be considered later?",
        "Are there clinical trials I qualify for at this stage?",
      ],
      disclaimer:
        "Demo educational summary only — not medical advice. Locally advanced lung cancer plans vary widely. Do not start, stop, or change treatment based on this page; confirm all details with your oncology team.",
    },
  },
  {
    id: "colon-003",
    title: "Colon Cancer — Stage III, Post-Surgery",
    cancerType: "Colon",
    reviewStatus: "reviewed",
    patientOverview: {
      displayName: "Sam T. (Demo)",
      age: 58,
      sex: "Non-binary (they/them)",
      diagnosis: "Adenocarcinoma of sigmoid colon, post-resection",
      stage: "Stage III (pT3N1a, per demo pathology)",
      careTeam: "Dr. Nguyen (GI Oncology), Dr. Lopez (Colorectal Surgery)",
      lastUpdated: "2026-05-14",
    },
    uploadedFiles: [
      { name: "Operative_Report_Sigmoid_Resection.pdf", type: "Surgery", uploadedAt: "2026-04-10", pages: 7 },
      { name: "Surgical_Pathology_Final.pdf", type: "Pathology", uploadedAt: "2026-04-18", pages: 10 },
      { name: "CEA_Labs_Trend.pdf", type: "Labs", uploadedAt: "2026-05-01", pages: 2 },
      { name: "Oncology_FollowUp_Note.pdf", type: "Clinical Notes", uploadedAt: "2026-05-12", pages: 4 },
      { name: "MSI_MMR_Testing.pdf", type: "Genomic", uploadedAt: "2026-04-20", pages: 3 },
    ],
    extractedFacts: [
      "Sigmoid colon resection performed (demo)",
      "Pathology: adenocarcinoma, 3.4 cm, 2/18 lymph nodes positive",
      "Tumor penetrates through muscularis propria (pT3)",
      "Margins negative in mock report",
      "MSI-stable / MMR-proficient (mock)",
      "CEA mildly elevated post-op, trending down on repeat",
    ],
    aiModels: [
      {
        id: "onco-insight",
        name: "OncoInsight Pro",
        version: "v2.4",
        confidence: "Medium-High",
        summary:
          "Stage III colon adenocarcinoma after complete resection with nodal involvement. Adjuvant chemotherapy is commonly discussed to reduce recurrence risk; regimen and duration depend on patient fitness and toxicity profile. MSI-stable disease is less likely to respond to certain immunotherapies used in other contexts.",
        keyPoints: [
          "Adjuvant chemo often discussed for stage III",
          "Risk stratification uses T/N stage and pathology features",
          "Surveillance imaging and CEA monitoring typically planned",
        ],
      },
      {
        id: "path-ai",
        name: "PathAI Navigator",
        version: "v1.8",
        confidence: "High",
        summary:
          "Final pathology supports pT3N1a with negative margins. Lymphovascular invasion not reported in demo excerpt. Recommends documenting number of nodes retrieved and confirming adequate staging workup if not already completed pre-op.",
        keyPoints: [
          "Two positive nodes of eighteen examined",
          "Negative margins in demo",
          "MMR proficient / MSI-stable",
        ],
      },
      {
        id: "care-map",
        name: "CareMap Oncology",
        version: "v3.1",
        confidence: "Medium",
        summary:
          "Recovery from surgery should be assessed before starting systemic therapy. Nutritional support, ostomy counseling not applicable in demo. Suggests discussing oxaliplatin-based regimens and neuropathy monitoring; fertility and neuropathy counseling if relevant.",
        keyPoints: [
          "Treatment timing after surgical healing",
          "Neuropathy risk with common regimens",
          "Surveillance colonoscopy schedule",
        ],
      },
    ],
    doctorReview: {
      reviewer: "Dr. Nguyen, MD",
      reviewedAt: "2026-05-13",
      concurrence: "agree",
      concurrenceLabel: "Concurs with adjustments",
      notes: [
        "Concur that stage III with nodal involvement warrants discussion of adjuvant chemotherapy.",
        "Will tailor regimen to neuropathy risk and patient preference — CAPOX vs FOLFOX to be decided in clinic.",
        "CEA trend improving; continue surveillance per guidelines but avoid over-interpreting single values.",
        "MSI-stable — immunotherapy not indicated in adjuvant setting based on current mock data.",
      ],
      agreedWith: [
        "Stage III framework and role of adjuvant therapy discussion",
        "Negative margins and adequate node harvest in pathology",
        "Surveillance and CEA as part of follow-up plan",
      ],
      disagreedWith: [
        "AI statement implying exact 6-month duration without clinic assessment",
      ],
    },
    uncertainties: [
      "Optimal chemotherapy duration for this individual (3 vs 6 months) pending fitness assessment",
      "Whether mild CEA elevation represented normal post-op variation or residual concern",
      "Long-term neuropathy impact if oxaliplatin-containing regimen is chosen",
    ],
    nextDiscussionPoints: [
      "Adjuvant chemotherapy options, expected side effects, and treatment length",
      "Recovery milestones before starting chemo",
      "Surveillance schedule: scans, labs, colonoscopy",
      "Diet, activity, and when to call the clinic about fever or dehydration",
    ],
    eli5Summary: {
      yourCaseInSimpleWords:
        "Your demo file set describes colon cancer that was removed with surgery. The pathology report found that a small number of nearby lymph nodes tested positive for cancer cells, which often places cases in stage III. Your doctors are discussing medicine after surgery (adjuvant chemotherapy) to lower the chance of the cancer coming back.",
      whatReportsSeemToShow:
        "Surgery removed a tumor in the sigmoid colon (~3.4 cm in the demo). Margins were negative (no tumor at the cut edges). Two of eighteen lymph nodes showed cancer. Molecular testing in the demo is MSI-stable/MMR-proficient. CEA (a blood marker) was slightly high after surgery but trending down.",
      whatAiToolsNoticed:
        "The AI tools commonly suggest discussing adjuvant chemotherapy for stage III colon cancer after recovery from surgery. They mention monitoring with labs and scans, and note that immunotherapy is not typically used in this adjuvant setting when MSI-stable.",
      whatDoctorAgreedWith:
        "Dr. Nguyen largely agrees with the AI summaries but wants to personalize the chemo regimen and length. They concur that adjuvant therapy should be discussed, margins and node counts look adequate in the demo pathology, and CEA should be tracked without overreacting to one number.",
      whatIsStillUncertain:
        "The exact chemo regimen and how many months of treatment may depend on your recovery and side effect tolerance. Mild CEA changes can happen after surgery — your team will interpret trends over time. Neuropathy risk depends on which medicines are chosen.",
      possibleNextSteps:
        "Your doctor may discuss CAPOX vs FOLFOX (types of chemo), how soon to start after healing, what labs and scans to expect, and symptoms that should trigger a call to the clinic. These are planning topics for your appointment, not directives.",
      medicalWordsExplained: [
        { term: "Adjuvant chemotherapy", meaning: "Drug treatment after surgery aimed at reducing recurrence risk." },
        { term: "pT3N1a", meaning: "Pathology staging: tumor through bowel wall; 1–3 positive regional nodes (definitions vary)." },
        { term: "CEA", meaning: "A blood protein sometimes followed in colon cancer; trends matter more than one value." },
        { term: "MSI-stable", meaning: "Mismatch repair intact; affects which medicines may be considered in some situations." },
      ],
      questionsToAsk: [
        "Which adjuvant regimen do you recommend for me, and why?",
        "How long is treatment, and what side effects should I plan for at work/home?",
        "When will we repeat CEA and imaging, and what results would concern you?",
        "What recovery signs mean I am ready to start chemotherapy?",
      ],
      disclaimer:
        "Fictional demo content for product illustration only. Not medical advice and not a substitute for your oncologist’s recommendations. Treatment choices must be made with your care team.",
    },
  },
];

export function getCaseById(id) {
  return mockCases.find((c) => c.id === id) ?? null;
}
