import React, { useState } from 'react';
import { ChevronRight, CheckCircle, XCircle, BarChart3, TrendingUp, Users, Shield, Mail, Share2, AlertTriangle } from 'lucide-react';

const SXMAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');

  // Content configuration - edit all copy here
  const content = {
    // Main headers
    title: "Software experience maturity assessment",
    subtitle: "Discover your organization's SXM maturity stage and get a roadmap for advancement",
    resultsTitle: "Your SXM maturity results",
    
    // Results page sections
    overallMaturityTitle: "Overall maturity",
    capabilityBreakdownTitle: "Capability breakdown",
    pathToNextStageTitle: "Your path to improvement",
    pathToNextStageSubtitle: "Focus on these key areas to advance to the next stage:",
    vendorEvaluationTitle: "Vendor evaluation priorities",
    shareResultsTitle: "Share your results",
    ctaTitle: "Ready to advance your SXM maturity?",
    ctaSubtitle: "Use these insights to guide your software experience management strategy.",
    
    // Button text
    getResultsButton: "Get my SXM maturity results",
    learnMoreButton: "Learn about SXM solutions",
    downloadButton: "Download detailed results",
    retakeButton: "Retake assessment",
    shareLinkedIn: "LinkedIn",
    shareTwitter: "Twitter",
    
    // Progress indicators
    questionCounter: "Question {current} of {total}",
    progressLabel: "Assessment progress",
    
    // Share messages
    linkedInShare: "I just completed the Software Experience Maturity Assessment. Find out where your organization stands:",
    twitterShare: "I just completed the Software Experience Maturity Assessment. Find out where your organization stands:",
    
    // File download
    downloadFilename: "sxm-maturity-assessment-results.txt"
  };

  // Assessment questions
  const questions = [
    {
      category: "Overall maturity",
      text: "What feels most reactive or frustrating about your current approach to software experiences?",
      options: [
        { value: 1, text: "Everything feels like firefighting - we're constantly reacting to problems" },
        { value: 2, text: "We have some basic processes but they're inconsistent across teams" },
        { value: 3, text: "We have good processes but struggle to scale them company-wide" },
        { value: 4, text: "We have enterprise-wide processes but they're mostly reactive" },
        { value: 5, text: "We proactively optimize experiences using predictive insights" }
      ]
    },
    {
      category: "Data gathering",
      text: "How easy is it today to get a clear view of user experiences across your products or internal tools?",
      options: [
        { value: 1, text: "Very difficult - feedback is fragmented and anecdotal" },
        { value: 2, text: "We have basic consolidation but limited tagging and organization" },
        { value: 3, text: "We have scaled research with behavioral links to feedback" },
        { value: 4, text: "We have enterprise-wide capture systems in place" },
        { value: 5, text: "We use predictive feedback collection with AI analysis" }
      ]
    },
    {
      category: "Learning and analysis",
      text: "Do your teams spend more time debating the data than acting on it?",
      options: [
        { value: 1, text: "Yes - we have 'Swiss cheese' data that teams don't trust" },
        { value: 2, text: "Sometimes - we have retroactive tagging and early dashboards" },
        { value: 3, text: "Rarely - we have real-time insights and a culture shift toward data" },
        { value: 4, text: "No - we have portfolio-wide analytics that teams trust" },
        { value: 5, text: "Never - we have predictive, AI-driven insights" }
      ]
    },
    {
      category: "Acting on insights",
      text: "How do you currently help users (customers or employees) succeed in the moment of need?",
      options: [
        { value: 1, text: "Manual training and reactive communications only" },
        { value: 2, text: "Targeted segmentation with basic guides" },
        { value: 3, text: "Personalized guidance with measurable impact" },
        { value: 4, text: "Cross-functional orchestration of user experiences" },
        { value: 5, text: "Real-time AI optimization of user journeys" }
      ]
    },
    {
      category: "AI data readiness",
      text: "Do you have a single source of truth for experience data, or is it fragmented across systems?",
      options: [
        { value: 1, text: "Multiple conflicting systems with no unified view" },
        { value: 2, text: "Consolidated core systems with basic governance" },
        { value: 3, text: "Democratized access with shared KPIs across teams" },
        { value: 4, text: "Unified enterprise data with a Center of Excellence" },
        { value: 5, text: "Predictive, ecosystem-wide data integration" }
      ]
    }
  ];

  // Maturity stage definitions
  const maturityStages = {
    1: {
      level: "Fragmented & Reactive",
      color: "#FF4876",
      urgency: "Critical",
      message: "You're in firefighting mode. Feedback lives in silos, analytics are patchy or mistrusted, and most improvements rely on manual training or one-off fixes. Your organization is dealing with fragmented tools, anecdotal decisions, and reactive approaches to software experience management.",
      icon: <AlertTriangle className="w-6 h-6" />,
      nextStage: "Consolidated & Proving",
      focusAreas: [
        "Establish basic measurement and data consolidation",
        "Deploy initial feedback collection tools",
        "Train internal champions to build trust in data",
        "Set up pilot teams with defined success metrics"
      ]
    },
    2: {
      level: "Consolidated & Proving",
      color: "#FF6B35",
      urgency: "High priority",
      message: "You have initial data consolidation, basic guides, and early ROI proof points. Some teams show promise with small wins, but results are inconsistent and limited in scope. You're beginning to move beyond reactive firefighting toward more systematic approaches.",
      icon: <TrendingUp className="w-6 h-6" />,
      nextStage: "Scaling & Systematic",
      focusAreas: [
        "Document measurable ROI from pilot programs",
        "Expand successful initiatives to more teams",
        "Standardize measurement practices in product development",
        "Roll out self-service analytics capabilities"
      ]
    },
    3: {
      level: "Scaling & Systematic",
      color: "#FFD700",
      urgency: "Moderate",
      message: "You have standardized measurement, cross-team alignment, and measurable outcomes. However, maturity is uneven across teams, data definitions don't always match, and campaigns lack coordination. You're scaling proven approaches but need better standardization.",
      icon: <BarChart3 className="w-6 h-6" />,
      nextStage: "Integrated & Governed",
      focusAreas: [
        "Create enterprise-wide standards linking experience to business goals",
        "Coordinate roadmaps across teams and departments",
        "Integrate platforms across all systems",
        "Deploy unified governance structures and shared OKRs"
      ]
    },
    4: {
      level: "Integrated & Governed",
      color: "#90EE90",
      urgency: "Opportunity",
      message: "You have enterprise-wide SXM, unified data, and governance in place. Most improvements are systematic rather than reactive, with good data governance and cross-functional coordination. However, you're still primarily reactive rather than predictive in your approach.",
      icon: <Users className="w-6 h-6" />,
      nextStage: "Predictive & Strategic",
      focusAreas: [
        "Leverage AI-powered, predictive experience insights",
        "Drive proactive customer success and real-time personalization",
        "Embed experience data into strategic decision-making",
        "Build an experience-first organizational culture"
      ]
    },
    5: {
      level: "Predictive & Strategic",
      color: "#00FF00",
      urgency: "Strategic",
      message: "You have AI-driven insights, predictive optimization, and experience-led strategy. Software experience management is a competitive advantage, with experience data driving strategic decisions and real-time personalization. You're leading the market in SXM maturity.",
      icon: <Users className="w-6 h-6" />,
      nextStage: "Continued Innovation",
      focusAreas: [
        "Scale SXM expertise across your broader ecosystem",
        "Establish strategic partnerships and thought leadership",
        "Continuously evolve platform capabilities with next-gen AI",
        "Maintain competitive advantage through innovation"
      ]
    }
  };

  // Recommendation templates
  const recommendationTemplates = {
    "Data gathering": {
      category: "Data collection & feedback systems",
      description: "Implement comprehensive user behavior tracking and feedback collection",
      tools: ["Behavioral analytics platforms", "In-app feedback collection", "Session replay tools", "User journey mapping", "Cross-platform data integration"],
      priority: "High",
      businessCase: "Enable data-driven decisions by consolidating fragmented feedback sources into a unified view of user experiences across all touchpoints."
    },
    "Learning and analysis": {
      category: "Analytics & insights infrastructure",
      description: "Build trusted, real-time analytics capabilities that teams actually use",
      tools: ["Self-service analytics platforms", "Real-time dashboards", "Data democratization tools", "Advanced segmentation", "Predictive analytics"],
      priority: "High",
      businessCase: "Reduce time spent debating data quality and increase time spent acting on insights, leading to faster product iterations and improved user outcomes."
    },
    "Acting on insights": {
      category: "User guidance & experience optimization",
      description: "Deploy in-app guidance and automated user success systems",
      tools: ["In-app onboarding flows", "Contextual help systems", "Automated user journeys", "A/B testing platforms", "Personalization engines"],
      priority: "Medium",
      businessCase: "Reduce support costs and increase user activation by providing proactive, in-context guidance that helps users succeed at the moment of need."
    },
    "AI data readiness": {
      category: "Data governance & integration",
      description: "Establish unified data architecture with proper governance",
      tools: ["Data integration platforms", "Governance frameworks", "Unified KPI dashboards", "Cross-team collaboration tools", "Data quality monitoring"],
      priority: "High",
      businessCase: "Create a single source of truth that enables consistent decision-making across teams and reduces conflicts over data definitions and metrics."
    }
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Automatically show results when the last question is answered
      setShowResults(true);
    }
  };

  const showResultsPage = () => {
    setShowResults(true);
  };

  const getAverageScore = () => {
    const scores = Object.values(answers);
    if (scores.length === 0) return 0;
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
  };

  const getMaturityLevel = () => {
    const avgScore = getAverageScore();
    let stage;
    
    if (avgScore <= 1.5) stage = 1;
    else if (avgScore <= 2.5) stage = 2;
    else if (avgScore <= 3.5) stage = 3;
    else if (avgScore <= 4.5) stage = 4;
    else stage = 5;
    
    return {
      ...maturityStages[stage],
      stage
    };
  };

  const getCapabilityBreakdown = () => {
    const breakdown = {
      "Overall maturity": answers[0] || 0,
      "Data gathering": answers[1] || 0,
      "Learning and analysis": answers[2] || 0,
      "Acting on insights": answers[3] || 0,
      "AI data readiness": answers[4] || 0
    };
    return breakdown;
  };

  const getRecommendedActions = () => {
    const maturity = getMaturityLevel();
    const breakdown = getCapabilityBreakdown();
    
    // Find the lowest scoring areas for focused recommendations
    const sortedCapabilities = Object.entries(breakdown)
      .sort(([,a], [,b]) => a - b)
      .slice(0, 2);

    const recommendations = [];

    sortedCapabilities.forEach(([capability, score]) => {
      if (capability === "Data gathering" && score <= 3) {
        recommendations.push(recommendationTemplates["Data gathering"]);
      } else if (capability === "Learning and analysis" && score <= 3) {
        recommendations.push(recommendationTemplates["Learning and analysis"]);
      } else if (capability === "Acting on insights" && score <= 3) {
        recommendations.push(recommendationTemplates["Acting on insights"]);
      } else if (capability === "AI data readiness" && score <= 3) {
        recommendations.push(recommendationTemplates["AI data readiness"]);
      }
    });

    // If no specific gaps, provide stage-appropriate general guidance
    if (recommendations.length === 0) {
      recommendations.push({
        category: `Stage ${maturity.stage} → Stage ${maturity.stage + 1} Advancement`,
        description: maturity.focusAreas[0],
        tools: ["Platform consolidation", "Advanced analytics", "Cross-functional alignment", "Strategic planning"],
        priority: "Strategic",
        businessCase: "Advance your SXM maturity to the next stage by focusing on the key capabilities that differentiate high-performing organizations."
      });
    }

    return recommendations.slice(0, 2);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowEmailForm(false);
    setEmail('');
  };

  const downloadResults = () => {
    const maturity = getMaturityLevel();
    const recommendations = getRecommendedActions();
    const breakdown = getCapabilityBreakdown();
    
    let resultsText = `SXM MATURITY ASSESSMENT RESULTS\n\n`;
    resultsText += `Current Stage: ${maturity.level} (Stage ${maturity.stage})\n`;
    resultsText += `Overall Score: ${getAverageScore().toFixed(1)}/5.0\n\n`;
    resultsText += `ASSESSMENT SUMMARY:\n${maturity.message}\n\n`;
    
    resultsText += `CAPABILITY BREAKDOWN:\n`;
    Object.entries(breakdown).forEach(([capability, score]) => {
      resultsText += `${capability}: ${score}/5\n`;
    });
    resultsText += `\n`;
    
    resultsText += `NEXT STAGE: ${maturity.nextStage}\n\n`;
    resultsText += `KEY FOCUS AREAS FOR ADVANCEMENT:\n`;
    maturity.focusAreas?.forEach((area, index) => {
      resultsText += `${index + 1}. ${area}\n`;
    });
    resultsText += `\n`;
    
    resultsText += `RECOMMENDED VENDOR EVALUATION PRIORITIES:\n\n`;
    recommendations.forEach((rec, index) => {
      resultsText += `${index + 1}. ${rec.category}\n`;
      resultsText += `Description: ${rec.description}\n`;
      resultsText += `Priority: ${rec.priority}\n`;
      resultsText += `Business case: ${rec.businessCase}\n`;
      resultsText += `Key capabilities: ${rec.tools.join(', ')}\n\n`;
    });
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = content.downloadFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleEmailResults = () => {
    alert(`Results will be sent to ${email}`);
    setShowEmailForm(false);
  };

  const shareToLinkedIn = () => {
    const text = content.linkedInShare;
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToTwitter = () => {
    const text = content.twitterShare;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const isAssessmentComplete = Object.keys(answers).length === questions.length;

  if (showResults) {
    const maturity = getMaturityLevel();
    const recommendations = getRecommendedActions();
    const breakdown = getCapabilityBreakdown();

    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{content.resultsTitle}</h1>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-lg">
              <div className="flex items-center gap-2" style={{color: maturity.color}}>
                {maturity.icon}
                <span className="text-lg font-semibold">Stage {maturity.stage}: {maturity.level}</span>
              </div>
            </div>
          </div>

          {/* Score Summary */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">{content.overallMaturityTitle}</h2>
              <div className="text-center">
                <div className="text-6xl font-bold mb-2" style={{color: maturity.color}}>
                  {getAverageScore().toFixed(1)}
                </div>
                <p className="text-gray-300">out of 5.0</p>
              </div>
              <p className="mt-6 text-gray-300 leading-relaxed">
                {maturity.message}
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">{content.capabilityBreakdownTitle}</h2>
              <div className="space-y-4">
                {Object.entries(breakdown).map(([capability, score]) => (
                  <div key={capability}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{capability}</span>
                      <span className="text-sm">{score}/5</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: score <= 1.5 ? '#FF4876' : score <= 2.5 ? '#FF6B35' : score <= 3.5 ? '#FFA500' : score <= 4.5 ? '#FFD700' : '#00FF00',
                          width: `${(score / 5) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Stage Path */}
          <div className="mb-12 bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">{content.pathToNextStageTitle}</h2>
            <p className="text-gray-300 mb-6">{content.pathToNextStageSubtitle}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {maturity.focusAreas?.map((area, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5"
                    style={{backgroundColor: maturity.color}}
                  >
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-300">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vendor Evaluation Priorities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{content.vendorEvaluationTitle}</h2>
            <div className="grid gap-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-8 border-l-4" style={{borderColor: '#FF4876'}}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{rec.category}</h3>
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: rec.priority === 'High' ? '#FF4876' : rec.priority === 'Medium' ? '#FFA500' : '#FFD700',
                        color: 'black'
                      }}
                    >
                      {rec.priority} priority
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{rec.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Key capabilities to evaluate:</h4>
                    <div className="flex flex-wrap gap-2">
                      {rec.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex} 
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-white">Business case:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{rec.businessCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share and Download */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6">{content.shareResultsTitle}</h2>
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={shareToLinkedIn}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all"
              >
                <Share2 className="w-4 h-4" />
                {content.shareLinkedIn}
              </button>
              <button
                onClick={shareToTwitter}
                className="flex items-center gap-2 px-6 py-3 bg-blue-400 hover:bg-blue-500 rounded-lg font-semibold transition-all"
              >
                <Share2 className="w-4 h-4" />
                {content.shareTwitter}
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-900 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">{content.ctaTitle}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {content.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
                style={{backgroundColor: '#FF4876', color: 'black'}}
              >
                {content.learnMoreButton}
              </button>
              <button 
                onClick={downloadResults}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                {content.downloadButton}
              </button>
              <button 
                onClick={resetAssessment}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-lg transition-all"
              >
                {content.retakeButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
          <p className="text-xl text-gray-300">{content.subtitle}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{content.questionCounter.replace('{current}', currentQuestion + 1).replace('{total}', questions.length)}</span>
            <span>{Math.round(((Object.keys(answers).length) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#FF4876',
                width: `${(Object.keys(answers).length / questions.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-semibold" style={{color: '#FF4876'}}>
              {questions[currentQuestion].category}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold mb-8 leading-relaxed">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-pink-500 group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-1"
                    style={{
                      backgroundColor: option.value <= 1.5 ? '#FF4876' : option.value <= 2.5 ? '#FF6B35' : option.value <= 3.5 ? '#FFA500' : option.value <= 4.5 ? '#FFD700' : '#00FF00'
                    }}
                  >
                    {option.value}
                  </div>
                  <span className="text-lg leading-relaxed group-hover:text-white transition-colors">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Get Results Button */}
        {isAssessmentComplete && (
          <div className="text-center mb-8 bg-gradient-to-r from-pink-900/20 to-pink-800/20 rounded-xl p-8 border-2 border-pink-500/30">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Assessment complete!</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Discover your SXM maturity stage</h3>
            <p className="text-gray-300 mb-6">Your personalized results and improvement roadmap are ready.</p>
            <button
              onClick={showResultsPage}
              className="px-12 py-6 rounded-lg font-bold text-xl transition-all hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl"
              style={{backgroundColor: '#FF4876', color: 'black'}}
            >
              {content.getResultsButton}
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Progress Preview */}
        {Object.keys(answers).length > 0 && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{content.progressLabel}</h3>
            <div className="flex flex-wrap gap-3">
              {questions.map((question, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm ${
                    answers[index] 
                      ? 'bg-gray-800 border-2' 
                      : index === currentQuestion 
                        ? 'bg-gray-700 border-2 border-pink-500' 
                        : 'bg-gray-800 opacity-50'
                  }`}
                  style={answers[index] ? {
                    borderColor: answers[index] <= 1.5 ? '#FF4876' : answers[index] <= 2.5 ? '#FF6B35' : answers[index] <= 3.5 ? '#FFA500' : answers[index] <= 4.5 ? '#FFD700' : '#00FF00'
                  } : {}}
                >
                  <span className="font-semibold">{question.category}</span>
                  {answers[index] && (
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-black"
                      style={{
                        backgroundColor: answers[index] <= 1.5 ? '#FF4876' : answers[index] <= 2.5 ? '#FF6B35' : answers[index] <= 3.5 ? '#FFA500' : answers[index] <= 4.5 ? '#FFD700' : '#00FF00'
                      }}
                    >
                      {answers[index]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SXMAssessment;
