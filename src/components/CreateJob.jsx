import { useState } from 'react';

const CreateJobModal = ({ isOpen = false, onClose }) => {
  const [formData, setFormData] = useState({
    category: '',
    title: 'Digital Marketing Lead',
    location: '',
    preferredArea: '',
    employmentType: 'Full-time',
    jobRoleType: '',
    experience: '',
    salaryMin: '8.0',
    salaryMax: '15.0',
    commission: '',
    salesTargets: 'Monthly lead generation targets',
    description: `Leading the digital presence for premium residential projects across Mumbai. 

Focus Areas:
• Campaign Management
• Lead Quality Analysis
• Social Media Growth`
  });

  const [selectedEducation, setSelectedEducation] = useState(['Post Graduation']);
  const [selectedLanguages, setSelectedLanguages] = useState(['English', 'हिंदी', 'मराठी']);
  const [selectedSkills, setSelectedSkills] = useState(['SEO', 'Google Ads', 'Content Strategy']);
  const [customSkill, setCustomSkill] = useState('');

  const categories = [
    'Tele Caller', 'Channel Partners', 'Real Estate Sales', 'CRM Executive',
    'Digital Marketing', 'HR & Operations', 'Accounts & Auditing', 'Legal',
    'Architects', 'Web Development'
  ];

  const locations = [
    'Hyderabad', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Chennai', 'Kolkata',
    'Kochi', 'Jaipur', 'Ahmedabad', 'Ayodhya', 'Tirupati', 'Shirdi'
  ];

  const areas = ['Andheri', 'Bandra', 'Worli', 'Borivali', 'Navi Mumbai', 'Thane'];
  
  const educationOptions = [
    'PhD', 'Post Graduation', 'Graduation', 'Diploma', '12th / Intermediate',
    '10th / SSC', 'Below 10th', 'Others'
  ];

  const languageOptions = [
    'English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'ಕನ್ನಡ', 'മലയാളം', 'मराठी', 'বাংলা', 'ગુજરાતી', 'ਪੰਜਾਬੀ', 'ଓଡ଼ିଆ', 'اردو'
  ];

  const experienceOptions = [
    'Beginner (0-1 Year)', '1-3 Years', '3-5 Years', '5-7 Years', '7-10 Years', '10+ Years'
  ];

  const commissionOptions = ['1-2%', '2-3%', '3-5%', 'Performance Based'];
  
  const salesTargetOptions = [
    'Monthly lead generation targets',
    'Campaign ROI targets',
    'Social media growth targets',
    'Website traffic goals'
  ];

  const skillSuggestions = [
    'SEO', 'Social Media', 'Google Ads', 'Content Writing', 
    'Analytics', 'Email Marketing', 'Lead Generation', 'Canva'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationToggle = (edu) => {
    if (selectedEducation.includes(edu)) {
      setSelectedEducation(selectedEducation.filter(e => e !== edu));
    } else {
      setSelectedEducation([...selectedEducation, edu]);
    }
  };

  const handleLanguageToggle = (lang) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const handleAddSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const handleAddCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.trim())) {
      setSelectedSkills([...selectedSkills, customSkill.trim()]);
      setCustomSkill('');
    }
  };

  const companies = [
    { id: '6991ecf7dbf13360782430dc', name: 'Alpha Realty' },
    { id: '699201e37851bfef2fde98b8', name: 'DANUBE' },
    { id: '6996b05d8d67a687621391d6', name: 'OnTest' },
    { id: '6998066c98d9877504f5d9e5', name: 'Company_Testing' }
  ];

  const currentCompany = 'Alpha Realty';

  if (!isOpen) return null;

  return (
    <div className="overflow-y-auto overflow-x-hidden">


    <div className="vj-modal-overlay" style={styles.overlay}>
      <div className="vj-modal-content vj-modal-lg" style={styles.modal}>
        {/* Modal Header */}
        <div className="vj-modal-header" style={styles.header}>
          <div>
            <h5 className="fw-bold mb-0" style={{ color: '#0f172a', fontSize: '18px', letterSpacing: '-0.4px' }}>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style={{ color: '#6366f1', marginRight: '8px' }}>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Create New Job
            </h5>
            <p className="mb-0" style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
              Fill in the details to publish a new job posting
            </p>
          </div>
          <button className="vj-modal-close" onClick={onClose} style={styles.closeButton}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="vj-modal-body">
          <div className="aj-root" style={styles.ajRoot}>
            <form className="aj-form">

              {/* Job Identity Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Job Identity</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>📝 Basic details about the company and the role</p>
                  </div>
                </div>

                <div className="aj-grid-2" style={styles.grid2}>
                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>🏢 Company Name *</label>
                    <select className="aj-select aj-readonly" disabled required style={styles.select}>
                      <option value="">Select Company</option>
                      {companies.map(company => (
                        <option key={company.id} value={company.id}>{company.name}</option>
                      ))}
                    </select>
                    <p className="aj-auto-hint mt-1" style={{ fontSize: '11px', color: '#6366f1', marginTop: '8px', marginLeft: '14px' }}>
                      Logged in as {currentCompany}
                    </p>
                  </div>

                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>📂 Category *</label>
                    <select 
                      className="aj-select" 
                      name="category" 
                      value={formData.category}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="aj-highlight-box mt-4" style={styles.highlightBox}>
                  <label className="aj-label" style={styles.label}>
                    ✏️ Job Title * <span className="aj-hint-inline" style={styles.hintInline}>— What is the job called?</span>
                  </label>
                  <input 
                    className="aj-input aj-input-lg" 
                    placeholder="e.g. Senior Real Estate Consultant" 
                    required 
                    value={formData.title}
                    name="title"
                    onChange={handleInputChange}
                    style={styles.inputLg}
                  />
                </div>
              </div>

              {/* Education & Languages Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Education & Languages</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>🎓 Academic background and communication skills</p>
                  </div>
                </div>

                <div className="aj-grid-1">
                  <div className="aj-input-wrapper mb-4">
                    <label className="aj-label" style={styles.label}>Education Requirements</label>
                    
                    {/* Selected Education Tags */}
                    <div className="aj-tags-row mb-2" style={styles.tagsRow}>
                      {selectedEducation.map(edu => (
                        <span key={edu} className="aj-tag aj-tag-green" style={styles.tag}>
                          {edu} 
                          <svg 
                            stroke="currentColor" 
                            fill="none" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="ms-1" 
                            height="14" 
                            width="14" 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleEducationToggle(edu)}
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </span>
                      ))}
                    </div>

                    {/* Education Options Grid */}
                    <div className="aj-card-grid aj-card-grid-4" style={styles.cardGrid4}>
                      {educationOptions.map(edu => (
                        <div 
                          key={edu}
                          className={`aj-card-option ${selectedEducation.includes(edu) ? 'aj-card-selected' : ''}`} 
                          style={styles.cardOption}
                          onClick={() => handleEducationToggle(edu)}
                        >
                          <span className="aj-card-label" style={styles.cardLabel}>{edu}</span>
                          {selectedEducation.includes(edu) && (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-card-check" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={styles.cardCheck}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>Language Requirements</label>
                    
                    {/* Languages Grid */}
                    <div className="aj-card-grid aj-card-grid-4" style={styles.cardGrid4}>
                      {languageOptions.map(lang => (
                        <div 
                          key={lang}
                          className={`aj-card-option ${selectedLanguages.includes(lang) ? 'aj-card-selected' : ''}`} 
                          style={styles.cardOption}
                          onClick={() => handleLanguageToggle(lang)}
                        >
                          <span className="aj-card-label" style={styles.cardLabel}>{lang}</span>
                          {selectedLanguages.includes(lang) && (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-card-check" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={styles.cardCheck}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Location & Employment Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Location & Employment</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>📍 Where and how will the candidate work?</p>
                  </div>
                </div>

                <div className="aj-grid-2" style={styles.grid2}>
                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>📍 Job Location *</label>
                    <select 
                      className="aj-select" 
                      name="location" 
                      required 
                      value={formData.location}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">Select Location</option>
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>

                    <div className="aj-input-wrapper mt-3">
                      <label className="aj-label" style={styles.label}>📌 Preferred Area</label>
                      <select 
                        className="aj-select" 
                        name="preferredArea"
                        value={formData.preferredArea}
                        onChange={handleInputChange}
                        style={styles.select}
                      >
                        <option value="">Select Area</option>
                        {areas.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>⏰ Employment Type *</label>
                    <div className="aj-card-grid aj-card-grid-2" style={styles.cardGrid2}>
                      {['Full-time', 'Part-time'].map(type => (
                        <div 
                          key={type}
                          className={`aj-card-option ${formData.employmentType === type ? 'aj-card-selected' : ''}`} 
                          style={styles.cardOption}
                          onClick={() => setFormData(prev => ({ ...prev, employmentType: type }))}
                        >
                          <span className="aj-card-label" style={styles.cardLabel}>{type}</span>
                          {formData.employmentType === type && (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-card-check" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={styles.cardCheck}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="aj-input-wrapper mt-3">
                      <label className="aj-label" style={styles.label}>🏠 Job Role Type</label>
                      <select 
                        className="aj-select" 
                        name="jobRoleType"
                        value={formData.jobRoleType}
                        onChange={handleInputChange}
                        style={styles.select}
                      >
                        <option value="">Select an option</option>
                        <option value="Office Based">Office Based</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Site Based">Site Based</option>
                        <option value="Channel Sales">Channel Sales</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Work Experience</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>💼 How much experience is required?</p>
                  </div>
                </div>

                <div className="aj-input-wrapper">
                  <label className="aj-label" style={styles.label}>Experience Required *</label>
                  <select 
                    className="aj-select" 
                    name="experience" 
                    required 
                    value={formData.experience}
                    onChange={handleInputChange}
                    style={styles.select}
                  >
                    <option value="">Select an option</option>
                    {experienceOptions.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Required Skills Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Required Skills</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>⚡ Special skills or tools knowledge</p>
                  </div>
                </div>

                <div className="aj-skill-section">
                  <div className="aj-skill-input-row" style={styles.skillInputRow}>
                    <input 
                      className="aj-input" 
                      placeholder="Add custom skill..." 
                      value={customSkill}
                      onChange={(e) => setCustomSkill(e.target.value)}
                      style={{ flex: 1 }}
                    />
                    <button 
                      type="button" 
                      className="aj-btn-add-skill" 
                      onClick={handleAddCustomSkill}
                      style={styles.addSkillBtn}
                    >
                      Add Skill
                    </button>
                  </div>

                  <div className="aj-suggestions mt-3">
                    <span className="aj-hint-text" style={styles.hintText}>Suggestions:</span>
                    <div className="aj-tags-row" style={styles.tagsRow}>
                      {skillSuggestions.map(skill => (
                        <button
                          key={skill}
                          type="button"
                          className={`aj-skill-suggest ${selectedSkills.includes(skill) ? 'aj-skill-added' : ''}`}
                          style={styles.skillSuggest}
                          onClick={() => handleAddSkill(skill)}
                          disabled={selectedSkills.includes(skill)}
                        >
                          {selectedSkills.includes(skill) ? (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          ) : (
                            <span>+</span>
                          )}
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="aj-tags-row mt-3" style={styles.tagsRow}>
                    {selectedSkills.map(skill => (
                      <span key={skill} className="aj-tag aj-tag-green" style={styles.tag}>
                        {skill} 
                        <svg 
                          stroke="currentColor" 
                          fill="none" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          height="14" 
                          width="14" 
                          xmlns="http://www.w3.org/2000/svg" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Salary Details Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Salary Details</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>💰 Compensation and incentive structure</p>
                  </div>
                </div>

                <div className="aj-salary-cards" style={styles.salaryCards}>
                  {/* Minimum Salary Card */}
                  <div className="aj-salary-card aj-salary-min" style={styles.salaryCard}>
                    <div className="aj-salary-card-icon" style={styles.salaryCardIcon}>📉</div>
                    <div className="aj-salary-card-content">
                      <div className="aj-salary-card-title" style={styles.salaryCardTitle}>Minimum Salary</div>
                      <div className="aj-salary-card-hint" style={styles.salaryCardHint}>Lowest salary offered</div>
                      <div className="aj-salary-input-wrap" style={styles.salaryInputWrap}>
                        <span className="aj-salary-prefix" style={styles.salaryPrefix}>₹</span>
                        <input 
                          className="aj-salary-input" 
                          placeholder="e.g. 2.5" 
                          value={formData.salaryMin}
                          name="salaryMin"
                          onChange={handleInputChange}
                          style={styles.salaryInput}
                        />
                        <span className="aj-salary-suffix" style={styles.salarySuffix}>LPA</span>
                      </div>
                    </div>
                    <div className="aj-salary-card-glow aj-glow-blue" style={{ ...styles.salaryCardGlow, background: '#3b82f6' }}></div>
                  </div>

                  {/* Maximum Salary Card */}
                  <div className="aj-salary-card aj-salary-max" style={styles.salaryCard}>
                    <div className="aj-salary-card-icon" style={styles.salaryCardIcon}>📈</div>
                    <div className="aj-salary-card-content">
                      <div className="aj-salary-card-title" style={styles.salaryCardTitle}>Maximum Salary</div>
                      <div className="aj-salary-card-hint" style={styles.salaryCardHint}>Highest salary offered</div>
                      <div className="aj-salary-input-wrap" style={styles.salaryInputWrap}>
                        <span className="aj-salary-prefix" style={styles.salaryPrefix}>₹</span>
                        <input 
                          className="aj-salary-input" 
                          placeholder="e.g. 5.0" 
                          value={formData.salaryMax}
                          name="salaryMax"
                          onChange={handleInputChange}
                          style={styles.salaryInput}
                        />
                        <span className="aj-salary-suffix" style={styles.salarySuffix}>LPA</span>
                      </div>
                    </div>
                    <div className="aj-salary-card-glow aj-glow-purple" style={{ ...styles.salaryCardGlow, background: '#8b5cf6' }}></div>
                  </div>

                  {/* Commission Card */}
                  <div className="aj-salary-card aj-salary-commission" style={{ ...styles.salaryCard, ...styles.commissionCard }}>
                    <div className="aj-salary-card-icon" style={styles.salaryCardIcon}>🤝</div>
                    <div className="aj-salary-card-content">
                      <div className="aj-salary-card-title" style={styles.salaryCardTitle}>Commission</div>
                      <div className="aj-salary-card-hint" style={styles.salaryCardHint}>Extra benefits on sales</div>
                      <div className="aj-salary-input-wrap" style={styles.salaryInputWrap}>
                        <select 
                          className="aj-select" 
                          name="commission" 
                          value={formData.commission}
                          onChange={handleInputChange}
                          style={{ border: 'none', background: 'transparent', boxShadow: 'none', padding: '8px 0px', fontSize: '13px', fontWeight: '700' }}
                        >
                          <option value="">Select an option</option>
                          {commissionOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="aj-salary-card-glow aj-glow-green" style={{ ...styles.salaryCardGlow, background: '#10b981' }}></div>
                  </div>
                </div>

                {/* Salary Preview */}
                <div className="aj-salary-preview mt-3" style={styles.salaryPreview}>
                  <span className="aj-salary-preview-label" style={styles.salaryPreviewLabel}>👁️ Preview:</span>
                  <span className="aj-salary-preview-value" style={styles.salaryPreviewValue}>
                    Range: ₹{formData.salaryMin} - ₹{formData.salaryMax} LPA + {formData.commission || 'Commission'} (Commission)
                  </span>
                </div>
              </div>

              {/* Targets & Benefits Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Targets & Benefits</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>🎯 What goals and perks come with this job?</p>
                  </div>
                </div>

                <div className="aj-grid-2" style={styles.grid2}>
                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>Sales Targets</label>
                    <div className="aj-radio-group" style={styles.radioGroup}>
                      {salesTargetOptions.map(target => (
                        <label key={target} className="aj-radio-item" style={styles.radioItem}>
                          <input 
                            type="radio" 
                            value={target} 
                            checked={formData.salesTargets === target} 
                            name="salesTargets"
                            onChange={handleInputChange}
                          />
                          <span>{target}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="aj-input-wrapper">
                    <label className="aj-label" style={styles.label}>Additional Benefits</label>
                    <div className="aj-card-grid aj-card-grid-2" style={styles.cardGrid2}>
                      {['Paid Tools Access', 'Skill Development', 'Remote Work Option', 'Project Bonus'].map(benefit => (
                        <div key={benefit} className="aj-card-option" style={styles.cardOption}>
                          <span className="aj-card-label" style={styles.cardLabel}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description Section */}
              <div className="aj-section-group" style={styles.sectionGroup}>
                <div className="aj-section-header" style={styles.sectionHeader}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="aj-section-icon" style={styles.sectionIcon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <div>
                    <h3 style={styles.sectionTitle}>Job Description</h3>
                    <p className="aj-section-desc" style={styles.sectionDesc}>📄 Full details about duties and requirements</p>
                  </div>
                </div>

                <div className="aj-desc-wrapper" style={styles.descWrapper}>
                  <textarea 
                    className="aj-textarea" 
                    name="description" 
                    rows="8" 
                    placeholder="Describe the job responsibilities and requirements..."
                    value={formData.description}
                    onChange={handleInputChange}
                    style={styles.textarea}
                  />
                  <div className="aj-word-count" style={styles.wordCount}>
                    {formData.description.split(/\s+/).length} words
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="aj-footer" style={styles.footer}>
                <div className="aj-footer-left">
                  <button type="button" className="aj-btn aj-btn-outline" style={{ ...styles.btn, ...styles.btnOutline }}>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg> 
                    Preview Job
                  </button>
                </div>
                <div className="aj-footer-right">
                  <button type="button" className="aj-btn aj-btn-discard" style={{ ...styles.btn, ...styles.btnDiscard }}>Discard</button>
                  <button type="button" className="aj-btn aj-btn-outline" style={{ ...styles.btn, ...styles.btnOutline }} onClick={onClose}>Cancel</button>
                  <button type="submit" className="aj-btn aj-btn-submit" style={{ ...styles.btn, ...styles.btnSubmit }}>Create Job</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
    </div>
  );
};

// Styles object
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(4px)'
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '24px',
    maxWidth: '900px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 30px',
    borderBottom: '1px solid #eef2f6'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#64748b',
    padding: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ajRoot: {
    fontFamily: "'Outfit', sans-serif",
    color: '#4a5568',
    backgroundColor: '#f0f4f8',
    padding: '30px',
    borderRadius: '24px'
  },
  sectionGroup: {
    background: '#f0f4f8',
    borderRadius: '32px',
    padding: '35px',
    marginBottom: '40px',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.8)'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px'
  },
  sectionIcon: {
    fontSize: '22px',
    color: '#4f46e5',
    background: '#f0f4f8',
    padding: '14px',
    borderRadius: '18px',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    margin: 0,
    letterSpacing: '-0.5px',
    color: '#4a5568'
  },
  sectionDesc: {
    fontSize: '13px',
    color: '#718096',
    margin: '4px 0 0 0',
    fontWeight: 400
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#718096',
    marginBottom: '8px',
    marginLeft: '14px'
  },
  select: {
    width: '100%',
    padding: '14px 22px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 500,
    color: '#1a202c',
    background: '#f0f4f8',
    outline: 'none',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
    fontFamily: 'inherit',
    cursor: 'pointer'
  },
  highlightBox: {
    background: '#f0f4f8',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  inputLg: {
    width: '100%',
    padding: '18px 28px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: 700,
    color: '#4f46e5',
    background: '#f0f4f8',
    outline: 'none',
    boxShadow: 'inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff'
  },
  hintInline: {
    fontWeight: 400,
    color: '#a0aec0',
    fontSize: '12px'
  },
  tagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '13px',
    fontWeight: 600,
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
    background: '#f0f4f8',
    color: '#10b981'
  },
  cardGrid4: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '14px'
  },
  cardGrid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px'
  },
  cardOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderRadius: '20px',
    background: '#f0f4f8',
    cursor: 'pointer',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  cardLabel: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#4a5568'
  },
  cardCheck: {
    color: '#4f46e5'
  },
  skillInputRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  addSkillBtn: {
    padding: '14px 24px',
    background: '#f0f4f8',
    color: '#4f46e5',
    border: 'none',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  skillSuggest: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    background: '#f0f4f8',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
    color: '#718096'
  },
  hintText: {
    fontSize: '12px',
    color: '#718096',
    margin: '0 0 8px 14px'
  },
  salaryCards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px'
  },
  salaryCard: {
    position: 'relative',
    padding: '24px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(0,0,0,0.04)',
    overflow: 'hidden'
  },
  salaryCardIcon: {
    fontSize: '32px',
    marginBottom: '12px'
  },
  salaryCardTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a202c',
    marginBottom: '4px'
  },
  salaryCardHint: {
    fontSize: '11px',
    color: '#94a3b8',
    marginBottom: '14px'
  },
  salaryInputWrap: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.8)',
    border: '2px solid rgba(0,0,0,0.06)',
    borderRadius: '14px',
    padding: '4px'
  },
  salaryPrefix: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#64748b',
    padding: '8px 4px 8px 12px'
  },
  salaryInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '20px',
    fontWeight: 700,
    color: '#1a202c',
    padding: '8px 4px'
  },
  salarySuffix: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#94a3b8',
    padding: '8px 12px 8px 4px'
  },
  salaryCardGlow: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    filter: 'blur(40px)',
    opacity: 0.15,
    top: '-20px',
    right: '-20px'
  },
  commissionCard: {
    background: 'linear-gradient(135deg, rgba(251,191,36,0.05), rgba(245,158,11,0.08))',
    border: '2px solid rgba(245,158,11,0.1)'
  },
  salaryPreview: {
    marginTop: '20px',
    padding: '14px 22px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  salaryPreviewLabel: {
    fontSize: '13px',
    fontWeight: 600,
    opacity: 0.8
  },
  salaryPreviewValue: {
    fontSize: '14px',
    fontWeight: 700
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: '12px'
  },
  radioItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#4a5568',
    padding: '12px 20px',
    borderRadius: '16px',
    background: '#f0f4f8',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  descWrapper: {
    position: 'relative'
  },
  textarea: {
    width: '100%',
    padding: '20px 24px',
    border: 'none',
    borderRadius: '20px',
    fontSize: '15px',
    fontWeight: 400,
    color: '#1a202c',
    background: '#f0f4f8',
    outline: 'none',
    boxShadow: 'inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff',
    minHeight: '200px',
    lineHeight: 1.7,
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  wordCount: {
    position: 'absolute',
    bottom: '15px',
    right: '20px',
    fontSize: '11px',
    fontWeight: 600,
    color: '#718096',
    background: '#f0f4f8',
    padding: '4px 10px',
    borderRadius: '50px',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    marginTop: '20px',
    borderTop: '2px solid #d1d9e6'
  },
  btn: {
    padding: '14px 28px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit'
  },
  btnOutline: {
    background: '#f0f4f8',
    color: '#4a5568',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  btnDiscard: {
    background: '#f0f4f8',
    color: '#ef4444',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
  },
  btnSubmit: {
    background: '#4f46e5',
    color: '#fff',
    boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff'
  }
};

export default CreateJobModal;