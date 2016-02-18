# ex1.rb

class SecurityLogger
  def create_log_entry
    # ... implementation omitted ...
  end
end

class SecretFile
  def initialize(secret_data, logger)
    @data = secret_data
    @logger = logger
  end

  def data
    @logger.create_log_entry
    @data
  end
end

