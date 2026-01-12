import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { X, Lock, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
  onClose: () => void;
}

const ADMIN_EMAIL = 'asiimirepatricia26@gmail.com';

const AdminLogin = ({ onClose }: AdminLoginProps) => {
  const [password, setPassword] = useState('');
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error } = await signIn(ADMIN_EMAIL, password);
      if (error) {
        // If user doesn't exist, prompt to set up password
        if (error.message.includes('Invalid login credentials')) {
          setIsSettingUp(true);
          setError('No account found. Please set your admin password below.');
        } else {
          setError(error.message);
        }
      } else {
        onClose();
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    
    setLoading(true);

    try {
      const { error } = await signUp(ADMIN_EMAIL, password);
      if (error) {
        setError(error.message);
      } else {
        // Auto sign in after signup
        const { error: signInError } = await signIn(ADMIN_EMAIL, password);
        if (!signInError) {
          onClose();
        }
      }
    } catch (err) {
      setError('Setup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-cream rounded-2xl p-8 max-w-md w-full relative border border-charcoal/10 shadow-elegant">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-gold" size={24} />
          </div>
          <h2 className="text-2xl font-display font-bold text-charcoal">
            {isSettingUp ? 'Set Admin Password' : 'Admin Access'}
          </h2>
          <p className="text-charcoal/60 mt-2 text-sm">
            {isSettingUp 
              ? 'Choose a password you\'ll remember' 
              : 'Enter your password to manage posts'}
          </p>
        </div>

        <form onSubmit={isSettingUp ? handleSetup : handleLogin} className="space-y-4">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-charcoal/20 focus:border-gold pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <p className={`text-sm ${isSettingUp && error.includes('set your') ? 'text-gold' : 'text-red-500'}`}>
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold"
          >
            {loading ? 'Please wait...' : (isSettingUp ? 'Set Password & Login' : 'Login')}
          </Button>

          {!isSettingUp && (
            <button
              type="button"
              onClick={() => setIsSettingUp(true)}
              className="w-full text-sm text-charcoal/50 hover:text-gold transition-colors"
            >
              First time? Set up password
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
